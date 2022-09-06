const React = require("react");
const Layout = require("./Layout");

function Upload(props) {
  return (
    <Layout title="Main">
      <form action="/profile" method="post" encType="multipart/form-data">
        <input type="file" name="avatar" />
        <button>Upload pic</button>
      </form>
    </Layout>
  );
}

module.exports = Upload;
