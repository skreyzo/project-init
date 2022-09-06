const React = require('react');
const Layout = require('./Layout');

function LoginForm() {
  return (
    <Layout title="Form">
      <h1>Sign IN</h1>
      <form action="/login" method="POST">
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Go In!</button>
      </form>
    </Layout>
  );
}

module.exports = LoginForm;
