const React = require("react");
const NavBar = require("../components/Navbar");
const Footer = require("../components/Footer");

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/app.css" />
        </head>
        <NavBar />
        <h1>Welcome to My Blog</h1>
        <section id='intro'>
          <h2>Intro</h2>
          <p>
            <i class="bi bi-app-indicator"></i> 
            Incididunt same lorem ea.
          </p>
        </section>
        <section id='intro'>
        <h2>About</h2>
          <p>
            <i class="bi bi-app-indicator"></i> 
            Incididunt same lorem ea.
          </p>
        </section>
        <section id='intro'>
        <h2>Contact</h2>
          <p>
            <i class="bi bi-app-indicator"></i> 
            Incididunt same lorem ea.
          </p>
        </section>
<Footer />
</div>
    );
  }

}
module.exports = HomePage;
