import React from 'react'
import { Row } from 'react-foundation/lib/components/grid'
import CreatePrefrences from '../pictures/createPrefrences.png'
import ViewPreferences from '../pictures/ViewPreferences.png'


const PageLeftSideBar = () => {
    return (
        <div className='left-side-bar'>

            <Row>My Favorite Jobs</Row>
            <Row>My Applied Jobs</Row>
            <Row>Update Profile</Row>
            <Row>My Search Preferences</Row>
            <Row><img width='70px' src={CreatePrefrences} alt='create preferences'/> <img width='70px' src={ViewPreferences} alt='view preferences'/></Row>
        </div>
    )
}

export default PageLeftSideBar
