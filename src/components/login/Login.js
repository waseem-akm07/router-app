import React from 'react';
import { Link } from 'react-router-dom';
import { reactLocalStorage } from 'reactjs-localstorage';
import Constant from '../constant/Constant';


class Login extends React.Component {

    state = {
        email: '',
        pwd: '',
        emler: '',
        pwder: '',
    }

    onEmailChange = (e) => {
        this.setState({ email: e.target.value })
    }

    onPwdChange = (e) => {
        this.setState({ pwd: e.target.value })
    }

    onSubmitButton = () => {

        let eml = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (eml.test(this.state.email) === true && this.state.pwd.length >= 7) {
            let EMAIL = reactLocalStorage.get(Constant.KEY_EMAIL)
            let PWD = reactLocalStorage.get(Constant.KEY_PASSWORD)
            if (this.state.email === EMAIL && this.state.pwd === PWD) {
                this.props.history.push('/register');
            }
            else {
                alert('User Not Correct');
            }
        }

        else if (eml.test(this.state.email) === true && this.state.pwd.length !== 7) {
            alert('Password must be 7 digit');
        }

        else if (this.state.email.length > 0 && this.state.pwd.length > 0) {
            if (eml.test(this.state.email) === false) {
                // if (this.state.pwd.length < 7) {
                alert("Please!!! Enter Valid Email")
                // }
            }
        }

        else if (this.state.email.length === 0 && this.state.pwd.length === 0) {
            alert("Email/Pwd must be Required...")
            // this.props.history.push('/');            
        }
    }

    render() {
        return (
            <div id='login'>
                {/* <h3 class="text-center text-info pt-5">Login form</h3> */}
                <div class='container'>
                    <div id="login-row" class="row justify-content-center align-items-center">
                        <div id="login-column" class="col-md-6">
                            <div id="login-box" class="col-md-12">
                                <form id="login-form" class="form">
                                    <h3 class="text-center text-info">Login form</h3>

                                    {/* <!-- TextBox-Email --> */}
                                    <div class="form-group">
                                        <label for='Username' class='text-info'>Username:</label><br />
                                        <input type="text" name="username" placeholder="Username" value={this.state.email} onChange={this.onEmailChange} id="username" class="form-control" />
                                    </div>

                                    {/* <!-- TextBox-Pwd --> */}
                                    <div class="form-group">
                                        <label for='Password' class='text-info'>Password:</label><br />
                                        <input type="password" placeholder="Password" value={this.state.pwd} onChange={this.onPwdChange} id="password" class="form-control" />
                                    </div>

                                    <div class="form-group">
                                        {/* <!-- Checkbox --> */}
                                        <label for="remember-me" class="text-info">
                                            {/* <span>Remember Me:</span>
                                            <span>
                                               <input id="remember-me" name="remember-me" type="checkbox" />
                                            </span> */}
                                        </label><br />

                                        {/* <!-- button --> */}
                                        {/* <Link to="/register" class="text-info"> */}
                                        <input type="submit" value="submit" onClick={this.onSubmitButton} class="btn btn-info btn-md form-control" value="Submit" />
                                        {/* </Link><br /> */}
                                    </div>

                                    {/* <!-- Register link --> */}
                                    <div id="register-link" class="text-right">
                                        <Link to="/register" class="text-info">Register Here</Link><br />
                                        <Link Link to="/forgot" class="text-info">Forgot Password</Link>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>



                {/* <nav class="navbar navbar-light bg-light">
                    <form class="form-inline">
                    <b>Email:</b> <input class="form-control mr-sm-2" type="search" placeholder="Email" aria-label="Search" />
                    <b>pwd:</b> <input class="form-control mr-sm-2" type="search" placeholder="Password" aria-label="Search" />

                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav><br />
                <input type='text' value={this.state.email} onChange={this.onEmailChange} /><br />
                <br />
                <input type='button' value="Register" onClick={this.onChange} /> */}
            </div>
        );
    }
}
export default Login