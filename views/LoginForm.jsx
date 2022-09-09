const React = require('react');
const Layout = require('./Layout');

function LoginForm() {
  return (
    <Layout title="Form">
      <form
        className="container container-sm position-absolute top-50 start-50 translate-middle w-25 rounded p-4"
        action="/user/login"
        method="POST"
      >
        <h1 className="label">
          <i className="fa-solid fa-right-to-bracket"></i>SIGN IN
        </h1>
        <div className="mb-3 ">
          <label htmlFor="exampleInputPassword1" className="form-label">
            EMAIL
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputPassword1"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            PASSWORD
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            name="password"
          />
        </div>
        <button type="submit" className="btnForm">
          Go In!
        </button>
      </form>
    </Layout>
  );
}

module.exports = LoginForm;
