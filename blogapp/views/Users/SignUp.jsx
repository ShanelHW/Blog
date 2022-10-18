const React = require("react");
const Navbar = require("../components/Navbar");
const Footer = require("../components/Footer");

<link rel="stylesheet" href="/css/app.css"></link>

class SignUp extends React.Component{
    render(){
        return(
            <div>
                <head>
          <link rel="stylesheet" href="/app.css" />
        </head>
                <Navbar/>
                <h1>Create a New Account</h1>
                <form action='/users/signup' method='post'>
                    <fieldset>
                        <legend> Create an account</legend>
                        <br />
                        <label htmlFor="username"> Username</label>
                        <br />
                        <input type="text" name="username" required/>
                        <br />
                        <label htmlFor="email"> Email</label>
                        <br />
                        <input type="text" name="email" required/>
                        <br />
                        <label htmlFor="password"> Password</label>
                        <br />
                        <input type="password" name="password" required/>
                        <br />
                        <input type='submit' value='Signup' />
                    </fieldset>
                </form>
                <div>
                    <p> Already have an account?<a href="/users/signin">Sign In</a></p>
                </div>
                <Footer/>
            </div>
        )
    }
}


module.exports = SignUp