import React, { useContext, useEffect } from 'react'
import Navbar from './components/NavBar/Navbar';
import "./App.css"
import Banner from './components/Banner/Banner';
import Rowpost from './components/RowPost/Rowpost';
import Netflix from './components/Netflix/Netflix';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import { action, comedy, horror, originals, romance } from './urls'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {  FirebaseContext } from './Context/FirebaseContext';
import { AuthContext } from './Context/Context';


function App() {
  const {setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })

  return (
    <div className="App">
      <Router>
        
        <Route exact path="/">
          <Netflix />
        </Route>
        <Route path="/sign-in">
          <SignIn/>
        </Route>
        <Route path="/sign-up">
          <SignUp/>
        </Route>
        <Route path="/home">
          <div className="home">
          <div>
          <Navbar />
          </div>
          <div>
          <Banner />
          </div>
          <div>
          <Rowpost title='Netflix Originals' url={originals} />
          <Rowpost title='Action' url={action} isSmall />
          <Rowpost title='Romance' url={romance} isSmall />
          <Rowpost title='Horror' url={horror} isSmall />
          <Rowpost title='Comedy' url={comedy} isSmall />
          </div>
          </div>
        </Route>
        
      </Router>

    </div>
  )
}

export default App;

