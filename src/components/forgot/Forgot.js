import React from 'react';
import { Link } from 'react-router-dom';
import { reactLocalStorage } from 'reactjs-localstorage';
import Constant from '../constant/Constant';



class Forgot extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            newpwd: "",
            confpwd: ""
        }
    }

    onChangeEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    onNewPassword = (e) => {
        this.setState({ newpwd: e.target.value })
    }

    onConfirmPassword = (e) => {
        this.setState({ confpwd: e.target.value })
    }

    onSubmitButton = () => {
        let eml = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (eml.test(this.state.email) === true && this.state.newpwd.length >= 7) {
            let EMAIL = reactLocalStorage.get(Constant.KEY_EMAIL)
           // let PWD = reactLocalStorage.get(Constant.KEY_PASSWORD)

            if (this.state.email === EMAIL) {
                if (this.state.newpwd === this.state.confpwd) {
                   // reactLocalStorage.remove(Constant.KEY_PASSWORD)
                    reactLocalStorage.set(Constant.KEY_EMAIL, this.state.email)
                    reactLocalStorage.set(Constant.KEY_PASSWORD, this.state.pwd)
                    alert('New Password Created');
                   // this.props.history.push('/');

                   // console.log(EMAIL, this.state.pwd);
                }
            }
           else if (this.state.email === EMAIL) {
                if (this.state.newpwd !== this.state.confpwd) {
                    alert('New password and confirm password no match');
                }
            }
            else if (this.state.email != EMAIL) {
                alert('User Not Found')
            }
        }
        // }
        //}

        // else if(eml.test(this.state.email===false)){
        //     alert   ('Enter valid email');
        // }

        // else if(eml.test(this.state.email===true)){
        //     if(this.state.newpwd!=7){
        //         alert('Password must be 7 digit');
        //     }
        // }

        // else if(eml.test(this.state.email===true)){
        //     if(this.state.newpwd===this.state.confpwd){
        //         alert('Password and confirm password not match');
        //     }
        // }

        else {
            alert('fill required fields')
        }

    }
    render() {
        return (
            <div id='login'>
                {/* <h3 class="text-center text-white pt-5">Recovery form</h3> */}
                <div class='container'>
                    <div id="login-row" class="row justify-content-center align-items-center">
                        <div id="login-column" class="col-md-6">
                            <div id="login-box2" class="col-md-12">
                                <form id="login-form" class="form" >
                                    <h3 class="text-center text-info">Recovery form</h3>

                                    {/* TextBox-Email*/}
                                    <div class="form-group">
                                        <label for='Username' class='text-info'>Username:</label><br />
                                        <input type="text" name="username" value={this.state.email} onChange={this.onChangeEmail} placeholder="Username" id="username" class="form-control" />
                                    </div>

                                    {/* TextBox-Pwd */}
                                    <div class="form-group">
                                        <label for='Password' class='text-info'>New Password:</label><br />
                                        <input type="password"  value={this.state.newpwd} onChange={this.onNewPassword} placeholder="New Password" id="password" class="form-control" />
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
export default Forgot   