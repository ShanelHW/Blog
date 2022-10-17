const React = require('react')


class Navbar extends React.Component {
    render() {
        return(
            <nav style={styles.container}>
                <a href='/'>Home</a>
                <a href='/blogs'>Blogs</a>
                <a href='/blog/new'>Create New Blog</a>
                <a href='/signin'>Signin/up</a>
            </nav>
        )
    }
}

const styles = {
    container : {
        display:"flex",
        justifyContent: 'space-between',
        background: 'rgb(74, 14, 148)'
        //must match a background in app.css
    }
}


module.exports = Navbar