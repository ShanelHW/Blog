const React = require('react')

class NavBar extends React.Component {
    render(){
        return(<nav>
            <a href='/'>Home</a>
            <a href='/blog'>Blog</a>
            <a href='/blog/new'>Create Blog</a>
            <a href='/login'>Login</a>
        </nav>)
    }
    const styles = {
        container: {
            display: flex,
            justifyContent: 'space-between'
        }
    }
}
module.exports = NavBar