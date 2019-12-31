import React from 'react'
import {NavLink} from 'react-router-dom'

const ViewButton = (props) => {

    const {job, showJob, buttonText} = props
    const handleClick = () => {
        showJob(job)
    }

    return (
        <NavLink to={`/jobs/general_job/${job.general_job.id}`} >
            <button  onClick={handleClick}   className='side-bar-button'>{buttonText}</button> 
        </NavLink>
    )
}

export default ViewButton
