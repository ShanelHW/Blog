const React = require('react')
const blogs = require('../../models/BlogSchema')

class Show extends React.Component {
    render(){
        const {blog} = this.props
        return(
            <div>
                <h1>{blog.title}</h1>

                <p>{blog.body}</p>
                <h6>Liked by {blog.likes}</h6>

                <h5>Written by: {blog.author}</h5>
            </div>
        )
    }
}

module.exports = Show