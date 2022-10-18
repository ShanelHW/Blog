const React = require("react");

class Navbar extends React.Component {
  render() {
    return (
      <nav style={styles.container}>
        <a href="/">
          <i class="bi bi-house"></i>
        </a>
        <a href="/blogs">Blogs</a>
        <a href="/blogs/new">Create New Blog</a>
        <div class="logbuttons">
          if(!req.session.loggedin)
          {
            <a href="/users/signout">
              <i class="bi bi-person-dash"></i>
            </a>
          }
          else{
            <a href="/users/signin">
              <i class="bi bi-person-plus"></i>
            </a>
          }
        </div>
      </nav>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    background: "rgb(74, 14, 148)",
    //must match a background in app.css
  },
};

module.exports = Navbar;
