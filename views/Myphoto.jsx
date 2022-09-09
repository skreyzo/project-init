const React = require('react');
const Layout = require('./Layout');

function Myphoto({ photoId, photos, userAlbum }) {
  console.log(photos);
  return (
    <Layout title="Main" username={userAlbum.firstname}>
      <form
        action={`/album/${photoId}`}
        method="post"
        encType="multipart/form-data"
      >
        <div className='photoNav'>
        <h1 className="titlePhoto">Upload Photo</h1>
        <input type="file" name="photo" className='inputPic'/>
        <input
          type="text"
          name="comment"
          className="inputCommentPhoto"
          placeholder="Comment your photo"
        />
        <button className="btnUpload text-light">Upload pic</button>
        </div>
      </form>
      <div className="Foto">
        {photos.map((el) => (
          <div className="albumCard" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">{el.comment}</h5>
              {/* <a href={el.addres} className="card-link">
                MyPhoto
              </a> */}
              <button
                id={el.id}
                type="button"
                className="btn btn-danger deleteFoto"
              >
                Удалить фото!
              </button>
              <img src={`${el.addres}`} alt="" className="pic" />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = Myphoto;
