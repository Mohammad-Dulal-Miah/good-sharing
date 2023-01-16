import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../images/login.jpg';

const Registration = () => {
    return (
        <div className="container">
        <section className='form text-center login-container m-5 p-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src={login} className="img-fluid mx-auto " alt="" />
                    </div>
                    <div className='col-md-6'>
                        <h1>Register Now!</h1>
                        <form className='login'>
                            <input type="text" name="name" className='form-controll' placeholder='Name' required/>
                            <br/>
                            <input type="number" name="number" className='form-controll' placeholder='Phone-number' required/>
                            <br/>
                            <input type="text" name="city" className='form-controll' placeholder='City' required/>
                            <br/>
                            <input type="text" name="address" className='form-controll' placeholder='Address' required/>
                            <br/>
                            <input type="number" name="word" className="form-controll" placeholder='Word No' required/>
                            <br/>
                            <input type="email" name="email" className="form-controll" placeholder='Email' required />
                            <br />
                            <input type="password" name="password"  className="form-controll" placeholder='Password' required />
                            <br />
                            <input type="submit" value="Submit"  className='btn btn-danger' />
                        </form>
                        <span> Have you account ? <Link to="/login">Login</Link></span>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
};

export default Registration;