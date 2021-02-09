import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Register from '../components/register/Register';
import Forgot from '../components/forgot/Forgot';
import Login from '../components/login/Login';




class RouterApp extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>

                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <Link class="navbar-brand" Link to="/" >Login</Link>
                        <Link class="navbar-brand" Link to="/register">Register</Link>
                        <Link class="navbar-brand" Link to="/forgot">Forgot Password</Link>
                    </nav>
                    <br />

                    {/* <Link to="/">Login</Link><br />
                    <Link to="/forgot">Forgot Password</Link><br />
                    <Link to="/register">Register Password</Link><br />
                    <br /> */}

                    <Switch>
                        <Route exact path='/' component={Login}/>
                        {/* <Route exact path='/register' ><Login /></Route> */}
                        <Route exact path='/register' component={Register}/>
                        {/* <Route exact path='/register' ><Register /></Route> */}
                        <Route exact path='/forgot' component={Forgot}/>
                        {/* <Route exact path='/forgot' ><Forgot /></Route> */}
                    </Switch>

                </BrowserRouter>
            </div>
        );
    }
}
export default RouterApp