import React from 'react'

const PageLeftSideBar = () => {
    return (
        <div className='left-side-bar'>
            <ul>
                <li> My Favorite Jobs</li>
                <li> My Applied Jobs</li>
                <li> Update profile </li>
                <li> My Search preferences</li>
                <ul>
                    <li>Preference 1</li>
                    <li>Preference 2</li>
                    <li>Preference 3</li>
                </ul>
                <li><button className='side-bar-button'>Create Preference</button> <button className='side-bar-button'>View preferences</button></li>
            </ul>
        </div>
    )
}

export default PageLeftSideBar
