const React = require('react');
const Layout = require('./Layout');

function Main(user) {
  return (
    <Layout title="Main" username={user.firstname}>
      <h1>Hello my dear friends! Shut up and upload your photo!</h1>
    </Layout>
  );
}

module.exports = Main;
