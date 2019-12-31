import React from 'react'
import ViewButton from '../buttons/ViewButton'
import DeleteButton from '../buttons/DeleteButton'

const AllJobs = (props) => {
    const {allJobs, showJob} = props


   const viewButtonText = () => {
        return 'View Job'
    }

   const removeButtonText = () => {
        return 'Remove Job'
    }

    return (
        <div>
               <div className='main-container'>
           

           {allJobs.map(job => {
               return<div>
                        <div className='row'>Title: {job.general_job.job_title}</div>
                        <div className='row'>Pay: ${job.general_job.pay}</div> 
                        <div className='row'>Location: {job.general_job.city}, {job.general_job.state} </div> 
                        <div className='row'><ViewButton buttonText={viewButtonText()} showJob={showJob} job={job}/> <DeleteButton buttonText={removeButtonText()} job={job}/></div>
                    </div>
                })
            }    
        </div>
            
        </div>
    )
}

export default AllJobs
