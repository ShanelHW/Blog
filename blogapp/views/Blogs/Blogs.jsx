const React = require("react");
const NavBar = require("../components/Navbar");
const Footer = require("../components/Footer");

class Blogs extends React.Component {
  render() {
    console.log(this.props.Blogs);
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/app.css" />
        </head>
        <NavBar />
        <h1>Blog Page</h1>
        <div>
          {this.props.blogs.map((blog, i) => (
            <div class="card">
              <div class="card-body">
                <div class="card-banner">
                  <h3 class="card-title">
                    {blog.title}
                    {blog.sponsored ? <i class="bi bi-cash"></i> : ""}
                  </h3>
                </div>
                <li class="username">
                  <i class="bi bi-person"></i> {blog.author}{" "}
                </li>
                <li id="date"> Created: {blog.createdAt.toString()}</li>
                <li>
                  {" "}
                  {blog.likes}{" "}
                  {blog.likes > 0 ? (
                    <i class="bi bi-lightning-fill"></i>
                  ) : (
                    <i class="bi bi-lightning"></i>
                  )}
                </li>
                <a href={`/blogs/${blog._id}`}>
                  <i class="bi bi-arrow-right"></i>
                </a>{" "}
              </div>
              <br></br>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

module.exports = Blogs;
