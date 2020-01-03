import React from 'react'
import logo from '../pictures/logo.png'
import searchJob from '../pictures/searchJob.png'
import notificationIcon from '../pictures/notificationIcon.png'
import Login from '../components/LogIn'
import LogOut from '../components/LogOut'
import { NavLink } from 'react-router-dom'




const PageNavBar = (props) => {
    const {loggedIn, logOut, user} = props


    const whatToShow = () =>{

        if(loggedIn){
          return  <header>
            <nav className='main-nav-bar' style={{ borderBottom: "solid", borderWidth: "2px", borderColor: "#929ca7", borderRadius: "30px",}}>
                    <div  className="generic-image logo"> 
                    <img src={logo} height='32' width='32'  className="logo" alt="logo"/>
                    </div>

                    <NavLink to='/search-jobs'>
                    <div  className="generic-image search-icon" >
                        <button className="button"><img src={searchJob} height='32' width='32'  alt="search"/>Search Jobs</button>
                    </div>
                    </NavLink>

                    <div className="generic-image sign-up">
                        <button className="button">My Dashboard</button>
                    </div>

                   <LogOut user={user} logOut={logOut}/>
            </nav>
        </header>
        }else{

            return  <header>
            <nav className='main-nav-bar' style={{ borderBottom: "solid", borderWidth: "2px", borderColor: "#929ca7", borderRadius: "30px",}}>
                    <div width='20%' className="generic-image logo"> 
                    <img src={logo} height='32' width='32'  className="logo" alt="logo"/>
                    </div>

                    <NavLink to='/search-jobs'>
                    <div  className="generic-image search-icon" >
                        <button className="button"><img src={searchJob} height='32' width='32'  alt="search"/>Search Jobs</button>
                    </div>
                    </NavLink>
                    
                    <NavLink to='/signup'>
                    <div width='20%' className="generic-image sign-up">
                        <img src={notificationIcon} height='32' width='32' className="notification-icon" alt="notifications"/>
                        <button className="button">Sign Up</button>
                    </div>
                    </NavLink>

                   <Login/>
            </nav>
        </header>
        }

    }
    return (
       whatToShow()
    )
}

export default PageNavBar



