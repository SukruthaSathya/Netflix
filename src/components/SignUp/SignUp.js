import React, { useState,useContext } from 'react'
import { FirebaseContext } from '../../Context/FirebaseContext'
import "./signUp.css"

function SignUp() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const {firebase} =useContext(FirebaseContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(firebase);
    }
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
                            <form onSubmit={handleSubmit} className="signUpForm" action="">
                                <input value={username}
                                onChange={(e)=>{
                                    setUsername(e.target.value)
                                }}
                                type="text" placeholder="username" />
                                <input value={password}
                                onChange={(e)=>setPassword(e.target.value)} 
                                 type="password" placeholder="Password" />
                                <button type='submit' className="submitSignUp">Sign Up</button>
                            </form>
                        </div>
                    </div>
               </div>
            </div>

        </div>
    )
}

export default SignUp
