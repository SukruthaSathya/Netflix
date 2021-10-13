import React from 'react'
import Navbar from './components/NavBar/Navbar';
import "./App.css"
import Banner from './components/Banner/Banner';
import Rowpost from './components/RowPost/Rowpost';
import {action, comedy, horror, originals,romance} from './urls'


function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost title='Netflix Originals' url={originals}/>
      <Rowpost title='Action' url={action} isSmall />
      <Rowpost title='Romance' url={romance} isSmall />
      <Rowpost title='Horror' url={horror} isSmall />
      <Rowpost title='Comedy' url={comedy} isSmall />
      

    </div>
  )
}

export default App;

