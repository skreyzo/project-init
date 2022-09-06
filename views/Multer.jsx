
const React = require('react');
const Layout = require('./Layout');

function Multer() {
  return (
    <Layout title="Main">
      <h1>Hello my dear friends! Shut up and upload your photo!</h1>
      <form action="/profile" method="post" encType="multipart/form-data">
        <input type="file" name="avatar" />
        <label htmlFor="">Massive</label><input type="file" name="photos" />
        <button type="submit">Upload</button>
      </form>
    </Layout>
  );
}

module.exports = Multer;














