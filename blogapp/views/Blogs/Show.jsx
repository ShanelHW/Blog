const React = require('react')
const blogs = require('../../models/BlogSchema')

class Show extends React.Component{
    render(){
        //retrieve blog data from blogs.js

        const blog= this.props.blogconst presentDate = this.props.date 
        return(
            <div style={{backgroundColor: 'royalblue'}}>
                <h1>Blog Page</h1>
                <h3>{blog.title}</h3>
                <h6>{blog.author} {blog.likes}</h6>
                <h6>Year: {presentDate)</h6>
            </div>
        )
    }
}