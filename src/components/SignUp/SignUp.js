import React, { useState,useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import { AuthContext } from '../../Context/Context'
import { FirebaseContext } from '../../Context/FirebaseContext'
import "./signUp.css"

function SignUp() {
    const history=useHistory()
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const {firebase} =useContext(FirebaseContext)
    const {email}=useContext(AuthContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
            result.user.updateProfile({displayName:username}).then(()=>{
                firebase.firestore().collection('users').add({
                    id:result.user.uid,
                    username:username,
                }).then(()=>{
                    alert("Your account is created successfully.")
                    history.push('/sign-in')
                })


            })
        }).catch((error)=>{
            alert(error.message)
        })
    }
    
    
    return (
        <div>
            <div className="signUpPage">
               <div className="signUpHead">
                    <div className="logoImage">
                        <img className="headImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo"></img>
                    </div>
                    <div className="signIn">
                        <a href="./sign-in">Sign In</a>
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
                                type="text" placeholder="Username" />
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
