import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { AuthContext } from '../../Context/Context'
import "./Navbar.css"

function Navbar() {
    const {user}=useContext(AuthContext)
    const history=useHistory()
    const handleLogout=()=>{
        history.push('./')
    }
    return (
        <div className="navbar">
            <div className="logo"><img className="logoImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Logo" /></div>
            <div className="username"><h2>{user ? user.displayName : ''}</h2></div>
            <div className="logout"><button onClick={handleLogout} className="logoutButton">Logout </button></div>

        </div>
    )
}

export default Navbar

