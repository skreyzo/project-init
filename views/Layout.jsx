const React = require('react');
const {
  proposalSyntaxPlugins,
} = require('@babel/preset-env/lib/shipped-proposals');

module.exports = function Layout({ children, title, username }) {
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
        <script defer src="/js/photo.js" />
        <script
          src="https://kit.fontawesome.com/55a9ffd6d9.js"
          crossOrigin="anonymous"
        ></script>
        <link rel="stylesheet" href="/css/publicStyles.css" />
        <link rel="stylesheet" href="/css/logo.css" />
        <link rel="stylesheet" href="/css/button.css" />
        <link rel="stylesheet" href="/css/album.css" />
        <link rel="stylesheet" href="/css/photo.css" />
      </head>
      <body>
        <div id="root">
          <header>
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid ">
                <a className="nav-link" href="/">
                  <i className="fa-solid fa-icons"></i>
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
                <div
                  className="collapse navbar-collapse text-light"
                  id="navbarNav"
                >
                  <ul className="navbar-nav">
                    {username ? (
                      <>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            aria-current="page"
                            href="/album"
                          >
                            MyAlbom
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link profile">{username}</a>
                        </li>
                        <li className="nav-item position-absolute top-0 end-0">
                          <a className="nav-link" href="/user/logout">
                            <i className="fa-solid fa-person-through-window"></i>
                          </a>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="nav-item">
                          <a className="nav-link" href="/user/login">
                            <i className="fa-solid fa-right-to-bracket"></i>
                            SIGN IN
                          </a>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </nav>
          </header>
          <div className="">
            <div className="">
              <div className="">{children}</div>
            </div>
          </div>
          <div className="footer">
            <footer className="footercontent d-flex flex-wrap justify-content-between align-items-center min-height:100% ">
              <div className="discMain">
                <h3 className="disc1 footer__title text-light">
                  Go Make Something Awesome
                </h3>
              </div>
              <div className="logo">
                <h6 className="disc footer__title text-light">
                  Contact | Support Us
                </h6>
                <a href="https://github.com/skreyzo/project-init">
                  <i className="fa-brands fa-github"></i>
                </a>
                <i className="fa-brands fa-telegram"></i>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
};
