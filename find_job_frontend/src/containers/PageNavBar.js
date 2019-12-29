import React, { Component } from 'react'
import logo from '../pictures/logo.png'
import searchJob from '../pictures/searchJob.png'
import notificationIcon from '../pictures/notificationIcon.png'
import profileIcon from '../pictures/profileIcon.png'
import SignUpSmall2 from '../pictures/SignUpSmall2.png'
import SignInSmall2 from '../pictures/SignInSmall2.png'
import {Row, Column} from 'react-foundation'
import { Grid } from 'react-foundation/lib/components/xy-grid'



export class PageNavBar extends Component {
    state = {
        signedIn: false,
        signUpClicked: false
        }



    render() {
        return (
            <header>
       <nav className='main-nav-bar' style={{
                                            borderBottom: "solid", 
                                            borderWidth: "2px", 
                                            borderColor: "#929ca7", 
                                            borderRadius: "30px",
                                        }}>

           <Row className='display'><Column small={4} large={6}><div className="generic-image logo"> <img src={logo} height='32' width='32'  className="logo" alt="logo"/></div></Column></Row>
           <Row className='display'><Column small={4} large={12}><div width='40%' className="generic-image search-icon"><img src={searchJob} height='32' width='32'  alt="search"/></div></Column></Row>
           <Row className='display'><Column small={4} large={6}><div width='20%' className="generic-image"><img src={notificationIcon} height='32' width='32' className="notification-icon" alt="notifications"/><img src={SignUpSmall2} height='32' width='32'  className="sign-up-small" alt="sign in"/></div></Column></Row>
           <Row className='display'> <Column small={4} large={6}><div width='20%' className="generic-image"><img src={profileIcon} height='32' width='32' className="profile-icon" alt="profile-icon"/><img src={SignInSmall2} height='32' width='32'  className="sign-in-small" alt="sign in"/></div></Column></Row>

       </nav>
        </header>
        )
    }
}

export default PageNavBar

