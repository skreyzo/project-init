const React = require('react');
const Layout = require('./Layout');

function Album({ albums }) {
  return (
    <Layout title="Album">
      <script defer src="js/album.js"/>
      <h1>Add Album</h1>
      <form name="albumForm" action="/album/" method="POST">
        <input type="text" name="title" />        
        <button type="submit">Add Album</button>
      </form>
      <div className="Cover">
        {
          albums.map((el) => (
            <div className="albumCard" style={{ width: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title">{el.title}</h5>                                             
                <input id={el.id} type="text" name="title" />                  
                <button data-btn="access" id={el.id} type="button" className="btn btn-danger grant">Дать права!</button>
                <a href={`/album/${el.id}`} className="card-link">Подробнее</a>
                <button data-btn="delete" id={el.id} type="button" className="btn btn-danger delete">Удалить альбом!</button>
              </div>
            </div>
          ))
        }
      </div>
    </Layout>
  );
}

module.exports = Album;