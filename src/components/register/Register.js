import React from 'react';
import { Link } from 'react-router-dom';
import { reactLocalStorage } from 'reactjs-localstorage';
import Constant from '../constant/Constant';



class Register extends React.Component {

    state = {
        email: "",
        pwd: "",
        confpwd: "",       
    }

    onChangeEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    onChangePassword = (e) => {
        this.setState({ pwd: e.target.value })
    }

    onConfirmPassword = (e) => {
        this.setState({ confpwd: e.target.value })
    }

    onSubmitButton = () => {
        let eml = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (eml.test(this.state.email) === true && this.state.pwd.length >= 7) {
            if (this.state.pwd === this.state.confpwd) {
                reactLocalStorage.set(Constant.KEY_EMAIL, this.state.email)
                reactLocalStorage.set(Constant.KEY_PASSWORD, this.state.pwd)
                alert('User Created');
                this.props.history.push('/');
            }
        }

        else if (this.state.eml !== '' && this.state.pwd != '') {
            alert('not null')

            if (eml.test(this.state.email) !== true && !this.state.pwd.length >= 7)
                alert('Email is not in correct formate && Password must be 7 digit');

            if (eml.test(this.state.email) !== true && this.state.pwd.length >= 7)
                alert('Email is not in correct formate');

            if (eml.test(this.state.email) === true) {
                if (this.state.pwd != 7)
                    alert('Password must be 7 digit');
            }

            if (eml.test(this.state.email) === true) {
                if (this.state.pwd != this.state.confpwd) {
                    alert('Password and confirm password not match');
                }
            }
        }

        else
            alert('fill required fields')
    }

    render() {   //console.log('lllll')
        return (
            <div id='login'>
                {/* <h3 class="text-center text-white pt-5">Registration form</h3> */}
                <div class='container'>
                    <div id="login-row" class="row justify-content-center align-items-center">
                        <div id="login-column" class="col-md-6">
                            <div id="login-box2" class="col-md-12">
                                <form class="form" >
                                    <h3 class="text-center text-info">Registration form</h3>

                                    {/* TextBox-Email*/}
                                    <div class="form-group">
                                        <label for='Username' class='text-info'>Username:</label><br />
                                        <input type="text" name="username" value={this.state.email} onChange={this.onChangeEmail} placeholder="UserName" id="username" class="form-control" />
                                    </div>

                                    {/* TextBox-Pwd */}
                                    <div class="form-group">
                                        <label for='Password' class='text-info'>Password:</label><br />
                                        <input type="password" value={this.state.pwd} onChange={this.onChangePassword} placeholder="Password" id="password" class="form-control" />
                                    </div>

                                    {/* TextBox-confrm Pwd */}
                                    <div class="form-group">
                                        <label for='Password' class='text-info'>Confirm Password:</label><br />
                                        <input type="password" value={this.state.confpwd} onChange={this.onConfirmPassword} placeholder="Confirm Password" id="password" class="form-control" />
                                    </div>

                                    <div class="form-group">
                                        {/* Link */}
                                        <div id="register-link" class="text-right">
                                            <Link to="/" class="text-info">Login Here</Link><br />
                                        </div>

                                        {/* button */}
                                        <input type="submit" name="submit" onClick={this.onSubmitButton} class="btn btn-info btn-md form-control" value="Submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Register