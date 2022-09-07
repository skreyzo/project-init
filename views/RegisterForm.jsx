const React = require('react');
const Layout = require('./Layout');

function RegisterForm() {
  return (
    <Layout title="Form">
      <form
        className="container container-sm position-absolute top-50 start-50 translate-middle w-25 border border-grey rounded p-3 bg-light"
        action="/user/register"
        method="POST"
      >
      <h1 className="label">Registration</h1>
        <div className="mb">
          <label htmlFor="exampleInputEmail1" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="firstname"
          />
        </div>
        <div className="mb">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="lastname"
          />
        </div>
        <div className="mb-3">
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
            id="exampleInputPassword1"
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Registration
        </button>
      </form>
    </Layout>
  );
}

module.exports = RegisterForm;
