import React, { Component } from 'react'
import logo from '../pictures/logo.png'
import searchJob from '../pictures/searchJob.png'
import notificationIcon from '../pictures/notificationIcon.png'
import profileIcon from '../pictures/profileIcon.png'



export class PageNavBar extends Component {
    state = {
        signedIn: false,
        signUpClicked: false
        }

        /*change the buttons to regular buttons with text */

    render() {
        return (
            <header>
                <nav className='main-nav-bar' style={{ borderBottom: "solid", borderWidth: "2px", borderColor: "#929ca7", borderRadius: "30px",}}>
                        <div width='20%' className="generic-image logo"> 
                        <img src={logo} height='32' width='32'  className="logo" alt="logo"/>
                        </div>
                        <div width='40%'  className="generic-image search-icon" >
                            <img src={searchJob} height='32' width='32'  alt="search"/>
                            <button className="button">Search Jobs</button>

                            </div>
                        <div width='20%' className="generic-image sign-up">
                            <img src={notificationIcon} height='32' width='32' className="notification-icon" alt="notifications"/>
                            <button className="button">Sign Up</button>
                            </div>
                        <div width='20%' className="generic-image sign-in">
                            <img src={profileIcon} height='32' width='32' className="profile-icon" alt="profile-icon"/>
                            <button className="button">Sign in</button>
                        </div>
                </nav>
            </header>
             )
    }
}

export default PageNavBar

