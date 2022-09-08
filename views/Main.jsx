const React = require('react');
const Layout = require('./Layout');

function Main(user) {
  console.log('userMain', user);
  return (
    <Layout title="Main" username={user}>
      <div className="mainLogo position-absolute align-items-center top-50 start-50 translate-middle ">
        <div className="box"></div>
        <div className="textDiv">
          <img className="text" src="./img/text.png" alt="" />
        </div>
        <div className="bird1Div">
          <img className="bird1" src="./img/bird1.png" alt="" />
        </div>
        <div className="bird2Div">
          <img className="bird2" src="./img/bird2.png" alt="" />
        </div>
        <div className="dogDiv">
          <img className="dog" src="./img/dog.png" alt="" />
        </div>
        <div className="iceDiv">
          <img className="ice" src="./img/ice.png" alt="" />
        </div>
        <div className="maskaDiv">
          <img className="maska" src="./img/maska1.png" alt="" />
        </div>
        <div className="maska2Div">
          <img className="maska2" src="./img/maska2.png" alt="" />
        </div>
        <div className="ph1Div">
          <img className="ph1" src="./img/photo1.png" alt="" />
        </div>
        <div className="ph2Div">
          <img className="ph2" src="./img/photo2.png" alt="" />
        </div>
        <div className="ramenDiv">
          <img className="ramen" src="./img/ramen.png" alt="" />
        </div>
        <div className="palmaDiv">
          <img className="palma" src="./img/palma.png" alt="" />
        </div>
        <div className="flowDiv">
          <img className="flow" src="./img/flow.png" alt="" />
        </div>
      </div>
      {user?.user ? (
        <a href="/user/register"></a>
      ) : (
        <>
          <a href="/user/register">
            <button className="btnreg">SIGN UP</button>
          </a>
          <div className="mainText">
            <span>Hello, dear friend!</span>
            <span> Join us and share the bright moments of</span>
            <span className="life">
              <span className="lifeType">your life.</span>
            </span>
          </div>
        </>
      )}
    </Layout>
  );
}

module.exports = Main;
