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
        <div className="photoNav">
          <h1 className="titlePhoto">Upload Photo</h1>
          <label className="custom-file-upload text-light">
            <input type="file" name="photo" />
            Please click to select a file
          </label>
          <input type="file" name="photo" className="inputPic" />
          {/* <button type="file" name="photo" className="inputPic" ></button> */}
          <input
            type="text"
            name="comment"
            className="inputCommentPhoto"
            placeholder="Comment your photo"
          />
          <button className="btnUpload text-light">Upload pic</button>
        </div>
      </form>
      <div className="frPh">Photos</div>
      <hr className="hr3" align="center" />
      <div className="Foto">
        {photos.map((el) => (
          <div className="albumCardPh">
            <div className="card-body-photo">
              {/* <a href={el.addres} className="card-link">
                MyPhoto
              </a> */}
              <img src={`${el.addres}`} alt="" className="picPh" />
              <h5 className="card-title-photo">{el.comment}</h5>
              <button id={el.id} type="button" className="btnDelPh text-light">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = Myphoto;
