
const React = require('react');


class Blogs extends React.Component{
    render(){
  
        <div>
            <h1>Blog Page</h1>
            <ul>
                {
                   this.props.Blogs.map((blog, i) => {
                    return (
                        <li>
                        { blog.title } by {blog.author} is { blog.body.length() } and has {blog.likes} likes.
                        { blog.sponsored ? `Sponsored` : `` }
                        </li>
                        )
                    })
                }
            </ul>
        </div> );
  }
}

module.exports = Blogs