import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {tokenCheck, login} from '../actions/authActions';

const SignIn = ({
    error,
    login
}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [data, setData] = useState({ auth: true, token: "" });
    const [msg, setMsg] = useState(null);

    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);

    function handleClick(e) {    
        e.preventDefault();    
        console.log('The link was clicked.'); 
        console.log("Res: ",email, password);
        login({email, password});
    }

    useEffect(() => {
             // Check for register error
        if (error.id === 'LOGIN_FAIL') {
            setMsg(error.msg.msg);
        } else {
            setMsg(null);
        }
    }, [error]);

    return (
        <div>
            <div className="container">
                <p></p>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                    <div className="card card-border">
                            <div className="mx-auto">
                                <Link  to="/"><img src="https://business.pinterest.com/profiles/contrib/pin/logo.svg?dpid=5922e8c52f4f83763ec5e0d19f9d994d" alt="Logo"/></Link>
                            </div>
                            <div className="card-body mx-auto">
                                <h2 className="card-title text-center">Te damos la bienvenida a Pinterest</h2>
                                <form action="">
                                    <div className="form-group">
                                        <input type="email" className="form-control round-input mx-auto" placeholder="Email" onChange={handleChangeEmail}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control round-input mx-auto" placeholder="Password" onChange={handleChangePassword}/>
                                    </div>
                                    <div className="form-group text-center">
                                        <button className="btn btn-primary" type="submit" onClick={handleClick}>Sign In</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});
//Conect is the other way of dispatch, like in an automatic way
export default connect(mapStateToProps, { login })(SignIn);