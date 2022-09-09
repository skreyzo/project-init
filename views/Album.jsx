const React = require('react');
const Layout = require('./Layout');

function Album({ albums, userAlbum }) {
  return (
    <Layout title="Album" username={userAlbum.firstname}>
      <script defer src="js/album.js" />
      <link rel="stylesheet" href="/css/album.css" />
      <h1 className="titleAlbom">Add Album</h1>
      <form
        name="albumForm"
        action="/album/"
        method="POST"
        className="albumForm"
      >
        <input
          type="text"
          name="title"
          placeholder="here you can add a comment to the album"
          className="inputComment"
        />
        <button type="submit" className="btnCm text-light">
          Add Album
        </button>
      </form>
      <div className="myAl">My albums</div>
      <hr className="hr2" align="center" />
      <div className="Cover">
        {/* <div>My album</div> */}
        {albums.map((el) => (
          <div className="albumCard" key={el.id}>
            <div className="card-body">
              <div className="picCard"></div>
              <h6 className="card-title">{el.title}</h6>
              <div className="shared">
                <i class="fa-solid fa-at"></i>
                <input
                  className="inputAlbom"
                  id={el.id}
                  type="text"
                  name="title"
                  placeholder="Type friends email"
                />
                <button
                  data-btn="access"
                  id={el.id}
                  type="button"
                  className="btnSh text-light"
                >
                  Shared
                </button>
              </div>
              <a href={`/album/${el.id}`} className="card-link">
                <button type="button" className="btnGo text-light">
                  <h6> Go to photo</h6>
                </button>
              </a>
              <hr className="hr" />
              <button
                data-btn="delete"
                id={el.id}
                type="button"
                className="btnDel text-light"
              >
                Delete album
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="frAl">Friends albums</div>
      <hr className="hr3" align="center" />
    </Layout>
  );
}

module.exports = Album;
