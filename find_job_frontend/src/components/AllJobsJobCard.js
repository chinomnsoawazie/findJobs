import React from 'react'
import ViewButton from '../buttons/ViewButton'
import DeleteButton from '../buttons/DeleteButton'

const AllJobsJobCard = (props) => {
    const {job} =props

    const viewButtonText = () => {
        return 'View Job'
    }

   const removeButtonText = () => {
        return 'Remove Job'
    }
   
    return (
        <div>
            <div  className='row'>Title: {job.job_title}</div>
                        <div  className='row'>Pay: ${job.pay}</div> 
                        <div  className='row'>Location: {job.city}, {job.state} </div>
                        <div  className='row'><ViewButton  key={job.id + 'view'} buttonText={viewButtonText()} showJob={props.showJob} job={props.job}/> </div>
        </div>
    )
}

export default AllJobsJobCard
