require('dotenv').config();

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

// раскомментить эти две строки после создания базы

// const dbConnectionCheck = require('../db/dbConnectCheck');
// dbConnectionCheck();

const renderTemplate = require('../lib/renderReactModule');

const Main = require('../views/Main'); //главная страница
const userRoute = require('../routes/user.route'); //регистер и авторизэйшн
const uploadRoute = require('../routes/upload'); //регистер и авторизэйшн

const app = express();

app.use(morgan('dev'));
// Чтобы наши статические файлы были видны браузеру, мы должны их подключить
app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Выносим порт в .env и на всякий случай подставляем дефолтный через ||
const { PORT, SESSION_SECRET } = process.env;

const sessionConfig = {
  name: 'your coockie name', // * Название куки
  store: new FileStore(), // * подключение стора (БД для куки) для хранения
  secret: SESSION_SECRET ?? 'projectX', // * ключ для шифрования куки
  resave: false, // * если true, пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // * Если false, куки появляются только при установке req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10, // * время жизни в ms (10 дней)
    httpOnly: true, // * куки только по http
  },
};
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })


app.use(session(sessionConfig));

app.use((req, res, next) => {
  app.locals.userName = req.session?.firstname; // User.firstname
  app.locals.userId = req.session?.userId; // userId уточнить при создании юзера!!!
  next();
});

app.get('/', (req, res) => {
  renderTemplate(Main, {}, res);
});

app.use('/user', userRoute);
app.use('/upload', uploadRoute);
///------------------------------------------------------------------------

app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file - файл `avatar`
  // req.body сохранит текстовые поля, если они будут
})

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
  // req.files - массив файлов `photos`
  // req.body сохранит текстовые поля, если они будут
})

const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
app.post('/cool-profile', cpUpload, function (req, res, next) {
  // req.files - объект (String -> Array), где fieldname - ключ, и значение - массив файлов
  //
  // например:
  //  req.files['avatar'][0] -> File
  //  req.files['gallery'] -> Array
  //
  // req.body сохранит текстовые поля, если они будут
})

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '/tmp/my-uploads')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// })

// const upload = multer({ storage: storage })

// app.listen(PORT, async () => {
//   console.log(`Сервер поднят на ${PORT} порту!`);
// });
