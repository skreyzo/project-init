const React = require('react');
const Layout = require('./Layout');

function LoginForm() {
  return (
    <Layout title="Form">

      <form
        className="container container-sm position-absolute top-50 start-50 translate-middle w-25 border border-grey rounded p-3 bg-light"
        action="/user/login"
        method="POST"
      >
        <h1 className="label">Login</h1>
        <div className="mb-3 ">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Email
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
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Go In!
        </button>
      </form>
    </Layout>
  );
}

module.exports = LoginForm;
