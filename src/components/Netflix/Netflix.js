import React, { useContext } from 'react'
import './Netflix.css'
import enjoy from "./images/Enjoy.png"
import download from "./images/Download.png"
import watch from "./images/Watch.png"
import children from "./images/children.png"
import { useHistory } from 'react-router'
import { AuthContext } from '../../Context/Context'



function Netflix() {
    const {email}=useContext(AuthContext)
    const {setEmail}=useContext(AuthContext)
    const history = useHistory()
    const handleFormSubmit=(e)=>{
        e.preventDefault()
        history.push('/sign-up')
    }
    const handleSignIn=(e)=>{
        e.preventDefault()
        history.push('/sign-in')
    }
    return (
        <div className="landingPage">
            <div >
                <div className="first">
                    <img className="backgroundImage" src="https://media-assets-05.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-10557-netflixa--default--1280.jpg" alt="img" />
                    <div className="story">
                        <div className="head">
                            <div className="headContent">
                                <div className="headLogo">
                                    <img className="headImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo"></img>
                                </div>
                                <div className="headLang">
                                    
                                    <i className="fas fa-globe"></i>
                                    <span className="Lang">English</span>
                                    <i className="fas fa-caret-down	"></i>
                                </div>
                                <div className="headSign">
                                    <button onClick={handleSignIn} className="signIn">Sign In</button>
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="content-inside">
                                <div className="title">
                                    <div>
                                        <h1>Unlimited movies, TV shows and more.</h1>
                                    </div>
                                    <div className="subTitle1"> <span >Watch anywhere. Cancel anytime.</span></div>
                                    <div className="subTitle2"><span >Ready to watch? Enter your email to create or restart your membership.</span></div>
                                </div>
                                <div className="form">
                                    <form onSubmit={handleFormSubmit} className="contentForm" action="">
                                        <input value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                        className="inputEmail" placeholder="Email Address" type="email"></input>
                                        <button type="submit" className="formButton">Get Started {">"} </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="second">
                    <div className="secContent">
                        <div className="contentMain">
                            <h1>Enjoy on your TV.</h1>
                            <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
                        </div>
                        <div className="contentImage">
                            <img src={enjoy} alt="" />
                        </div>
                    </div>
                </div>
                <div className="second">
                    <div className="secContent2">
                        <div className="contentImage">
                            <img src={download} alt="" />
                        </div>
                        <div className="contentMain">
                            <h1>Download your shows to watch offline.</h1>
                            <h3>Save your favourites easily and always have something to watch.</h3>
                        </div>
                    </div>
                </div>
                <div className="second">
                    <div className="secContent">
                        <div className="contentMain">
                            <h1>Watch everywhere.</h1>
                            <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
                        </div>
                        <div className="contentImage">
                            <img src={watch} alt="" />
                        </div>
                    </div>
                </div>
                <div className="second">
                    <div className="secContent2">
                        <div className="contentImage">
                            <img src={children} alt="" />
                        </div>
                        <div className="contentMain">
                            <h1>Create profiles for children.</h1>
                            <h3>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h3>
                        </div>
                    </div>
                </div>
                <div className="third">
                    <div className="thirdContent">
                        <h1>Frequently Asked Questions  </h1>
                        <div className="queries">
                        <h2>What is Netflix? </h2><i className="fas fa-plus"></i></div>
                        <div className="queries"><h2>How much does Netflix cost? </h2><i className="fas fa-plus"></i></div>
                        <div className="queries"><h2>Where can I watch? </h2><i className="fas fa-plus"></i></div>
                        <div className="queries"><h2>How do I cancel?</h2><i className="fas fa-plus"></i></div>
                        <div className="queries"><h2>What can I watch on Netflix?</h2><i className="fas fa-plus"></i></div>
                        <div className="queries"><h2>Is Netflix good for kids?</h2><i className="fas fa-plus"></i></div>
                        <div className="subTitle2"><span >Ready to watch? Enter your email to create or restart your membership.</span></div>
                        <div className="form">
                                    <form onSubmit={handleFormSubmit} className="contentForm" action="">
                                        <input value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                        className="inputEmail" placeholder="Email Address" type="email"></input>
                                        <button type="submit" className="formButton">Get Started {">"} </button>
                                    </form>
                                </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Netflix
