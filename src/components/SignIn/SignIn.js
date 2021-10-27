import React, { useContext, useState } from 'react';
import './signIn.css'
import '../Netflix/Netflix.css'
import { FirebaseContext } from '../../Context/FirebaseContext';
import { useHistory } from 'react-router';


function SignIn() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {firebase} = useContext(FirebaseContext)
    const history=useHistory()

    const handleLogin=(e)=>{
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
            history.push('/home')
        }).catch((error)=>{
            alert(error.message)
        })
    }

    return (
        <div>
            <div className="signInPage">
                <img className="backgroundImage" src="https://media-assets-05.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-10557-netflixa--default--1280.jpg" alt="logo" />
                <div className="story">
                    <div className="head">
                        <div className="headLogo">
                            <img className="headImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo"></img>
                        </div>
                    </div>
                    <div className="signInContent">
                        <div className="content-inside">
                            <div className="signInForm">
                                <div className="formHead">
                                    <h1>Sign In</h1>
                                </div>
                                <div className="formFill">
                                    <form onSubmit={handleLogin} action="formContent">
                                        <input value={email}
                                        onChange={(e)=>setEmail(e.target.value)} 
                                        className="formInput" type="email" name="" id="" placeholder="Email Address" />
                                        <input value={password}
                                        onChange={(e)=>setPassword(e.target.value)}  className="formInput" type="password" placeholder="Password"/>
                                        <button type='submit' className="formSubmit">Sign In</button>
                                    </form>
                                </div>
                                <div className="signUpWay">
                                    <p>New to Netflix? <a href="/">Signup Now</a></p>
                                    
                                </div>
                                <div className="formFoot">
                                    <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
