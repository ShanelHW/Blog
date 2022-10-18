const React = require("react");
const Navbar = require("../components/Navbar");
const Footer = require("../components/Footer");

class Signin extends React.Component {
  render() {
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/app.css" />
        </head>
        <Navbar />
        <h1>Log In</h1>

        <form action='/users/signin' method="post">
          <fieldset>
            <legend>Enter your username and password</legend>

            <label htmlFor="email">Email</label>
            <br />
            <input type="text" name="email" />
            <br />

            <label htmlFor="password">Password</label>
            <br />
            <input type="password" name="password" />
            <br />

            <input type="submit" value="Signin" />
          </fieldset>
        </form>
        <div>
                    <p> New to the site?<a href="/users/signup">Sign Up</a></p>
        </div>
        <Footer />
      </div>
    );
  }
}

module.exports = Signin;