<link rel="stylesheet" href="/css/app.css"></link>

class SignUp extends React.Component{
    render(){
        return(
            <div>
                <h1>Create a New Account</h1>
                <form action='/user' method='post'>
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
                        <label htmlFor="passwird"> Password</label>
                        <br />
                        <input type="text" name="password" required/>
                        <br />
                        <input type='submit' value='Signup' />
                    </fieldset>
                </form>
                <div>
                    <p> Already have an account?<a href="/user/signin">SignIn</a></p>
                </div>
            </div>
        )
    }
}


module.exports = SignUp