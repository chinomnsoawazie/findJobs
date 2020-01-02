import React from 'react'
import {NavLink} from 'react-router-dom'

const EntryPoint = () => {
    return (
        <div className='entry-pg'>
            <div className='column'>

            <div className='row'>
                <h4 className='landing-pg-row'><strong > Welcome to FindJobs</strong></h4> 
                </div> <br/>

                <div className='row'>
                        <strong className='landing-pg-row'>To have the best experience</strong>
                </div>

                <NavLink to='login'>
                <div className='row'>
                    <button className='landing-pg-button'>Sign in</button>
                </div><br/>
                </NavLink>

                <div className='row landing-pg-row'>
                    <p className='landing-pg-row'><strong >or</strong></p>
                </div>
                <div className='row '>
                    <button className='landing-pg-button'>Sign up</button>
                </div><br/>

                <div className='row'>
                <strong className='landing-pg-row'>You can also just search for Jobs</strong>
                </div>

                <NavLink to='search-jobs'>
                    <div className='row'>
                        <button className='landing-pg-button'>Search for jobs</button>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default EntryPoint
