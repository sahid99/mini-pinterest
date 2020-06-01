import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {tokenCheck, register} from '../actions/authActions';

const SignUp = ({
    error,
    register
}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");
    // const [data, setData] = useState({ auth: true, token: "" });
    const [msg, setMsg] = useState(null);

    const handleChangeName = (e) => setName(e.target.value);
    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);
    const handleChangeConfirmPassword = (e) => setConfirmPassword(e.target.value);

    function handleClick(e) {    
        e.preventDefault();    
        console.log('The link was clicked.'); 
        console.log("Res: ",name,email,password, confirm_password);
        register({name, email, password, confirm_password});
    }

    useEffect(() => {
             // Check for register error
        if (error.id === 'REGISTER_FAIL') {
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
                                        <input type="text" className="form-control round-input mx-auto" placeholder="Name" onChange={handleChangeName}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control round-input mx-auto" placeholder="Email" onChange={handleChangeEmail}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control round-input mx-auto" placeholder="Password" onChange={handleChangePassword}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control round-input mx-auto" placeholder="Confirm Password" onChange={handleChangeConfirmPassword}/>
                                    </div>
                                    <div className="form-group text-center">
                                        <button className="btn btn-primary" type="submit" onClick={handleClick}>Sign Up</button>
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

export default connect(mapStateToProps, { register })(SignUp);