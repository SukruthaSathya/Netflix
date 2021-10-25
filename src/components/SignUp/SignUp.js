import React from 'react'
import "./signUp.css"

function SignUp() {
    return (
        <div>
            <div className="signUpPage">
               <div className="signUpHead">
                    <div className="logoImage">
                        <img className="headImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo"></img>
                    </div>
                    <div className="signIn">
                        <a href="/signIn">Sign In</a>
                    </div>
               </div>
               <div className="signUpContent">
                    <div className="contentInside">
                        <div className="formHeading">
                            <h3>Set a password to create your account.</h3>
                        </div>
                        <div>
                            <form className="signUpForm" action="">
                                <input  type="email" placeholder="Email Address" />
                                <input type="password" placeholder="Password" />
                                <button className="submitSignUp">Sign Up</button>
                            </form>
                        </div>
                    </div>
               </div>
            </div>

        </div>
    )
}

export default SignUp
