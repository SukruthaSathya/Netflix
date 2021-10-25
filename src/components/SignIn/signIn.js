import React from 'react';
import './signIn.css'
import '../Netflix/Netflix.css'


function signIn() {
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
                                    <form action="formContent">
                                        <input className="formInput" type="email" name="" id="" placeholder="Email Address" />
                                        <input className="formInput" type="password" placeholder="Password"/>
                                        <button className="formSubmit">Sign In</button>
                                    </form>
                                </div>
                                <div className="signUpWay">
                                    <p>New to Netflix? <a href="/sign-up">Signup Now</a></p>
                                    
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

export default signIn
