const React = require("react");
const NavBar = require('../components/Navbar')
const Footer = require('../components/Footer')

class New extends React.Component {
  render() {
    return (
      <div>
         <head>
          <link rel="stylesheet" href="/app.css" />
        </head>
        <NavBar />
        <h1>Create New Blog</h1>

        <form action="/blog" method='post'>
          Title: <input type="text" name="title" />
          <br />
          Body: <textarea type="text" name='body'  />
          <br />
          Author: <input type="text" name="author"  />
          <br />
          Sponsored: <input type="checkbox" name="isSponsored"  onClick='{blog.sponsored} = true'/>
          <br />
          <input type="submit" value="New Blog" />
        </form>
        <Footer />
      </div>
    );
  }
}
const styles = {
    container : {
        display:"flex",
        justifyContent: 'space-between',
        background: 'rgb(74, 14, 148)',
        //must match a background in app.css
    }
}
module.exports = New;

// title: {type: String, required: true},
// body: {type: String, required: true},
// author: {type: String, required: true},
// likes:{type: Number, default: 0},
// sponsored: {type: Boolean, default: false},