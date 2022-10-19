const React = require('react');
class Footer extends React.Component {
    render() {
        return(
            <nav style={styles.container}>
                <a href='https://facebook.com/'><i class="bi bi-facebook"></i></a>
                <a href='https://github.com/ShanelHW/Blog'><i class="bi bi-github"></i></a>
                <a href='https://stackoverflow.com/'><i class="bi bi-stack-overflow"></i></a>
                <a href='https://www.reddit.com/'><i class="bi bi-reddit"></i></a>
                <a href='https://twitter.com/'><i class="bi bi-twitter"></i></a>
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


module.exports = Footer