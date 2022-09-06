const React = require('react');

module.exports = function Layout({ children, title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>{title}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
          crossOrigin="anonymous"
        />
        <script defer src="/js/publicScript.js" />
        <link rel="stylesheet" href="/css/publicStyles.css" />
      </head>
      <body>
        <div id="root">
          <header>
            <nav className="navbar navbar-expand-lg bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="/upload">
                  MyPhoto
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/"
                      >
                        MyAlbom
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/profile">
                        Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Logout
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/user/login">
                        Login
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/user/register">
                        Registration
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
          <div className="container">
            <div className="row">
              <div className="col align-self-center">{children}</div>
            </div>
          </div>
          <div className="footer">
            <footer className=" d-flex flex-wrap justify-content-between align-items-center min-height:100% bg-dark">
              <h1 className="footer__title text-light">Footer</h1>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
};
