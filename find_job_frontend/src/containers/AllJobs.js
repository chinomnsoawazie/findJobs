import React from 'react'
import AllJobsJobCard from '../components/AllJobsJobCard'

const AllJobs = (props) => {
    const {allJobs, showJob, } = props

    return (
        <>
        <div className='job-card-div'>
            <div className='main-container'>
                {allJobs.map(job => <AllJobsJobCard key={job.id} job={job} showJob={showJob}/>)}    
            </div>
        </div>
        </>
    )
}

export default AllJobs
