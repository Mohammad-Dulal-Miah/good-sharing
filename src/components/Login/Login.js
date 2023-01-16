import React from 'react';
import './Login.css';
import registration from '../../images/registration.jpg'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container">
            <section className='form text-center login-container m-5 p-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img src={registration} className="img-fluid" alt="" />
                        </div>
                        <div className='col-md-6'>
                            <h1>Login</h1>
                            <form className='login'>
                                <input type="email" name="email" className="form-controll" placeholder='Email' required />
                                <br />
                                <input type="password" name="password"  className="form-controll" placeholder='Password' required />
                                <br />
                                <input type="password" name="cpassword" className="form-controll" placeholder='conform password' required />
                                <br />
                                <input type="submit" value="Submit"  className='btn btn-danger' />
                            </form>
                            <span>Forgot password ? <Link to="/forgotPassword">click here</Link></span>
                            <br/>
                            <span> Have you not account ? <Link to="registration">Registration</Link></span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;