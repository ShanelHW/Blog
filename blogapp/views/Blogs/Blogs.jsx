
const React = require('react');
const NavBar = require("../components/Navbar");


class Blogs extends React.Component{
    render(){
        console.log(this.props.Blogs);
    return (
        <div>
            <head>
          <link rel="stylesheet" href="/app.css" />
        </head>
        <NavBar />
            <h1>Blog Page</h1>
            <ul>
                {
                   this.props.Blogs.map((blog, i) => (
                    
                        <li>
                        { blog.title } by {blog.author} is { blog.body.length } characters and has {blog.likes} likes.
                        { blog.sponsored ? `Sponsored` : `` }
                        </li>
                        
                    ))
                }
            </ul>
        </div>) 
  }
}

module.exports = Blogs