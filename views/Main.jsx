const React = require('react');
const Layout = require('./Layout');

function Main(user) {
  console.log('userMain', user);
  return (
    <Layout title="Main" username={user}>
      <div className="mainLogo position-absolute align-items-center top-50 start-50 translate-middle border border-grey rounded ">
        <div class="bird1Div">
          <img class="bird1" src="./img/bird1.png" alt="" />
        </div>
        <div class="bird2Div">
          <img class="bird2" src="./img/bird2.png" alt="" />
        </div>
        <div class="dogDiv">
          <img class="dog" src="./img/dog.png" alt="" />
        </div>
        <div class="iceDiv">
          <img class="ice" src="./img/ice.png" alt="" />
        </div>
        <div class="maskaDiv">
          <img class="maska" src="./img/maska.png" alt="" />
        </div>
        <div class="ph1Div">
          <img class="ph1" src="./img/photo1.png" alt="" />
        </div>
        <div class="ph2Div">
          <img class="ph2" src="./img/photo2.png" alt="" />
        </div>
        <div class="ramenDiv">
          <img class="ramen" src="./img/ramen.png" alt="" />
        </div>
      </div>
    </Layout>
  );
}

module.exports = Main;
