import React from 'react'
import './Netflix.css'

function Netflix() {
    return (
        <div className="landingPage">
            <div >
                <div className="first">
                    <img className="background" src="https://media-assets-05.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-10557-netflixa--default--1280.jpg" alt="img" />
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
                                    <button className="signIn">Sign In</button>
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
                                    <form className="contentForm" action="">
                                        <input className="inputEmail" placeholder="Email Address" type="email"></input>
                                        <button className="formButton">Get Started ></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="second">

                </div>
                <div className="third">

                </div>
                <div className="fourth">

                </div>
                <div className="fifth">

                </div>
                <div className="sixth">

                </div>
                <div className="seventh">

                </div>
                <div className="eighteth">

                </div>

            </div>
        </div>
    )
}

export default Netflix
