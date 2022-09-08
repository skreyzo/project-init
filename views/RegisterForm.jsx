const React = require('react');
const Layout = require('./Layout');

function RegisterForm() {
  return (
    <Layout title="Form">
      <form
        className="container container-sm position-absolute top-50 start-50 translate-middle w-25 border border-grey rounded p-4"
        action="/user/register"
        method="POST"
      >
        <h1 className="label">
          <i className="fa-regular fa-address-card"></i>SIGN UP
        </h1>
        <div className="mb-2">
          <label htmlFor="exampleInputEmail1" className="form-label">
            FIRST NAME
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="firstname"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="exampleInputEmail1" className="form-label">
            LAST NAME
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="lastname"
          />
        </div>
        <div className="mb-2">
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
            id="exampleInputPassword1"
            name="password"
          />
        </div>
        <button type="submit" className="btnForm">
          Let's Go Enjoy!
        </button>
      </form>
    </Layout>
  );
}

module.exports = RegisterForm;
