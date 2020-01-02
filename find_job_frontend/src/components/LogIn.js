import React from 'react'
import profileIcon from '../pictures/profileIcon.png'
import {NavLink} from 'react-router-dom'






const LogIn = () => { 
    return (

            <div width='20%' className="generic-image sign-in">
        <NavLink to='/login' >
            <img src={profileIcon} height='32' width='32' className="profile-icon" alt="profile-icon"/>
            <button className="button" >Login</button>
        </NavLink>
         </div>
    )
}

export default LogIn



