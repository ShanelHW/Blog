const React = require('react')
const blogs = require('../../models/BlogSchema')
const NavBar = require("../components/Navbar");
const Footer = require("../components/Footer");

class Show extends React.Component {
    render(){
        const {blog} = this.props
        return(
            <div>
            <head>
          <link rel="stylesheet" href="/app.css" />
        </head>
        <NavBar />
            <h1>Blog Page</h1>
            <div>
                {
                  <div class = 'card'>
                            <img src='public/media/beans_unsplash.jpg' class="card-img-top" alt=''>
                                
                            </img><div class= "card-body">
                            <h5 class="card-title"><a href={`/blog/${blog._id}`}>{blog.title}</a> {blog.sponsored ? <i class="bi bi-cash"></i> : ''}</h5>
                            <li class= 'username'><i class="bi bi-person"></i> {blog.author} </li>
                            <li id='date'> Created: {blog.createdAt.toString()}</li>
                            <li> {blog.likes} {blog.likes > 0 ? <i class="bi bi-lightning-fill"></i> : <i class="bi bi-lightning"></i>}</li>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                            <br></br>
                            
                            </div>
                        
                    })
                            </div>
            <Footer />
</div>
  )}
}

module.exports = Show