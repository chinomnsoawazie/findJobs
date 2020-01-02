import React from 'react'
import {NavLink} from 'react-router-dom'


const LogOut = (props) => {
    const {user, logOut} = props
    return (


        <div  className="generic-image sign-in">
        <NavLink to='/'>
            Welcome <strong>{user.first_name}</strong>
            <button onClick={() => logOut()}  className="button" >Logout</button>
        </NavLink>
        </div>
    )
}

export default LogOut

