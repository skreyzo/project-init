require("dotenv").config();

const path = require("path");
const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const FileStore = require("session-file-store")(session);

const dbConnectionCheck = require("../db/dbConnectCheck");
dbConnectionCheck();


const dbConnectionCheck = require('../db/dbConnectCheck');
dbConnectionCheck();

const Main = require("../views/Main"); //главная страница
const Upload = require("../views/Upload");
const userRoute = require("../routes/user.route"); //регистер и авторизэйшн

const albumRoute = require("../routes/album.route");

const { Photo } = require("../db/models");

const multer = require("multer");
const upload = multer({ dest: "public/uploads/" });
// const Main = require('../views/Main'); //главная страница
const userRoute = require('../routes/user.route'); //регистер и авторизэйшн
const accessRoute = require('../routes/accessRoute'); //регистер и авторизэйшн

const app = express();

app.use(morgan("dev"));
// Чтобы наши статические файлы были видны браузеру, мы должны их подключить
app.use(express.static(path.join(__dirname, "../public/")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Выносим порт в .env и на всякий случай подставляем дефолтный через ||
const { PORT, SESSION_SECRET } = process.env;

const sessionConfig = {
  name: "your coockie name", // * Название куки
  store: new FileStore(), // * подключение стора (БД для куки) для хранения
  secret: SESSION_SECRET ?? "projectX", // * ключ для шифрования куки
  resave: false, // * если true, пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // * Если false, куки появляются только при установке req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10, // * время жизни в ms (10 дней)
    httpOnly: true, // * куки только по http
  },
};

app.use(session(sessionConfig));

app.use((req, res, next) => {
  app.locals.firstname = req.session?.firstname; // User.firstname
  app.locals.userId = req.session?.userId; // userId уточнить при создании юзера!!!
  next();
});

app.get("/", (req, res) => {
  renderTemplate(Main, {}, res);
});

app.get("/upload", (req, res) => {
  renderTemplate(Upload, {}, res);
});

// ----------------------------------------------------
// Здесь подключаю загрузку файлов

app.post("/profile", upload.single("avatar"), async function (req, res, next) {
  // console.log("путь========>", path); // этот путь к фото надо загрузить в БД
  try {
    const { path } = req.file;
    const { comment } = req.body;

    console.log(comment);

    await Photo.create({ addres: path, comment: comment });
    res.send("загрузил");
  } catch (error) {
    console.log(error);
  }
  // req.file - файл `avatar`
  // req.body сохранит текстовые поля, если они будут
});

// Здесь подключаю загрузку файлов
// ----------------------------------------------------

app.use("/user", userRoute);
app.use("/album", albumRoute);

app.get('/', (req, res) => {
  const user = req.session?.firstname;
  console.log('userApp', user);
  renderTemplate(Main, { user }, res);
});


app.use('/user', userRoute);

app.listen(PORT, async () => {
  console.log(`Сервер поднят на ${PORT} порту!`);
});
