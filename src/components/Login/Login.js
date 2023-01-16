import React, { useState } from 'react';
import './Login.css';
import registration from '../../images/registration.jpg'
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../Authentication/firebase.confog';


const auth = getAuth(app);

const Login = () => {

    const[message , setMessage] = useState('');

    const loginUser = (event) => {

        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        const cpassword = form.cpassword.value;

        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(email)) {
            alert("Invalid email....");
        }
        else {
            let regPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            if (!regPass.test(password) || !regPass.test(cpassword)) {
                alert("Invalid password");
            } else {

                if (cpassword !== password) {
                    alert("password and confirm password not match")
                }
                else {
                    setMessage("please wait....")
                    signInWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            const user = userCredential.user;
                            if(!user.emailVerified){
                                setMessage("Your email is not verified...")
                            }
                            else{
                                setMessage("Login success")
                            }
                          
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                        });
                }
            }
        }

    }
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
                            <form className='login' onSubmit={loginUser}>
                                <input type="email" name="email" className="form-controll" placeholder='Email' required />
                                <br />
                                <input type="password" name="password" className="form-controll" placeholder='Password' required />
                                <br />
                                <input type="password" name="cpassword" className="form-controll" placeholder='conform password' required />
                                <br />
                                <input type="submit" value="Submit" className='btn btn-danger' />
                                <br/>
                                <h4>{message}</h4>
                            </form>
                            <span>Forgot password ? <Link to="/forgotPassword">click here</Link></span>
                            <br />
                            <span> Have you not account ? <Link to="/registration">Registration</Link></span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;