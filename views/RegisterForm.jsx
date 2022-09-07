const React = require('react');
const Layout = require('./Layout');

function SignUpForm() {
  return (
    <Layout title="Form">
      <h1>Sign UP</h1>
      <form action="/register" method="POST" >
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="lastname" placeholder="lastname" />
        <input type="password" name="password" placeholder="password" />
        <input type="email" name="email" placeholder="email" />
        <button type="submit">Register!</button>
      </form>
    </Layout>
  );
}

module.exports = SignUpForm;
