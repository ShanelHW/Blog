const React = require("react");

class Edit extends React.Component {
  render() {
    const {blog} = this.props.blog
    return (
      <div>
        <h1>Edit Blog</h1>

        <form action="blog" method='post'>
          Title: <input type="text" name="title" defaultValue={blog.title} />
          <br />
          Body: <input type="text" name='body' defaultValue={blog.body} />
          <br />
          Author: <input type="text" name="author" defaultValue={blog.author} />
          <br />
          Likes: <input type="text" name="likes" defaultValue={blog.likes} />
          <br />
          Sponsored: <input type="checkbox" name="isSponsored" defaultValue={blog.sponsored} />
          <br />
          <input type="submit" value="Update Blog" />
        </form>
        <Footer />
      </div>
    );
  }
}

module.exports = Edit;

// title: {type: String, required: true},
// body: {type: String, required: true},
// author: {type: String, required: true},
// likes:{type: Number, default: 0},
// sponsored: {type: Boolean, default: false},