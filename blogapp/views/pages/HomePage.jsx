const React = require("react");
const NavBar = require("../components/Navbar");
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/app.css" />
        </head>
        <NavBar />
        <h1>Welcome to My Blog</h1>
      </div>
    );
  }
}
module.exports = HomePage;
