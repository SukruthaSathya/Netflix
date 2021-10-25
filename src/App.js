import React from 'react'
import Navbar from './components/NavBar/Navbar';
import "./App.css"
import Banner from './components/Banner/Banner';
import Rowpost from './components/RowPost/Rowpost';
import Netflix from './components/Netflix/Netflix';
import SignIn from './components/SignIn/signIn';
import { action, comedy, horror, originals, romance } from './urls'
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Netflix />
        </Route>
        <Route path="/sign-in">
          <SignIn/>
        </Route>
        <Route path="/home">
          <Navbar />
          <Banner />
          <Rowpost title='Netflix Originals' url={originals} />
          <Rowpost title='Action' url={action} isSmall />
          <Rowpost title='Romance' url={romance} isSmall />
          <Rowpost title='Horror' url={horror} isSmall />
          <Rowpost title='Comedy' url={comedy} isSmall />
        </Route>
      </Router>

    </div>
  )
}

export default App;

