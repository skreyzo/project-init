const React = require('react');
const Layout = require('./Layout');

function RegisterForm() {
  return (
    <Layout title="Form">
      <h1>Sign UP</h1>
      <form action="/user/register" method="POST">
        <input type="text" name="firstname" placeholder="firstname" />
        <input type="text" name="lastname" placeholder="lastname" />
        <input type="password" name="password" placeholder="password" />
        <input type="email" name="email" placeholder="email" />
        <button type="submit">Register!</button>
      </form>
    </Layout>
  );
}

module.exports = RegisterForm;
