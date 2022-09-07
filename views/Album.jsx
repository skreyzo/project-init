const React = require('react');
const Layout = require('./Layout');

function Album() {
  return (
    <Layout title="Album">
      <h1>Add Album</h1>
      <form action="/album/addPhoto" method="POST">
        <input type="text" name="title" />        
        <button type="submit">Add Album</button>
      </form>
      <div className="box-tasks">
{/*         {
          tasks.map((el) => (
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title">{el.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">{el.description}</p>
                <button id={el.id} type="button" className="btn btn-danger">Удалить</button>
                <a href={`/tasks/${el.id}`} className="card-link">Подробнее</a>
              </div>
            </div>
          ))
        } */}
      </div>
    </Layout>
  );
}

module.exports = Album;