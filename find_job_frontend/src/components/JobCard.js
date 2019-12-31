import React, { Component } from 'react'
import JobCardNav from '../containers/JobCardNav'



export class JobCard extends Component {


    render() {

        console.log(this.props.job)
        return (
            <div>
                <div className='row'>
        <h4>Job Title: {this.props.job.general_job.job_title}</h4>

                </div>
                <div className='row' >
                    <div className='column job-card-row' >
                        <p><strong>Company:</strong> {this.props.job.general_job.company_name}</p> 
                    </div>
                    <div className='column'>
                        <p><strong>State: </strong>{this.props.job.general_job.state} <strong>City:</strong> {this.props.job.general_job.city} <strong>Zip Code: </strong>{this.props.job.general_job.zipcode} </p>
                    </div>
                </div>

                <div className='row' >
                    <div className='column job-card-row'>
                        <p> <strong>Pay:</strong> ${this.props.job.general_job.pay}</p>
                    </div>
                    <div className='column job-card-row'>
                        <p><strong>Job Type:</strong> {this.props.job.general_job.job_type}</p>
                    </div>
                </div>
                <div className='row' >
                    <div className='column job-card-row'>
                       <p> <strong>Summary:</strong></p>
                    </div>
                    <div className='column'>
                        {this.props.job.general_job.intro}
                    </div>
                </div>
                <div className='row' >
                    <div className='column job-card-row'>
                        <p><strong>Requirements:</strong></p>
                    </div>
                    <div className='column'>
                        {this.props.job.general_job.requirement}
                    </div>
                </div>
                <div className='row' >
                    <div className='column job-card-row'>
                        <p><strong>Schedule:</strong></p>
                    </div>
                    <div className='column'>
                        {this.props.job.general_job.schedule}
                    </div>
                </div>
                <div className='row' >
                    <div className='column job-card-row'>
                        <p><strong>Description:</strong></p>
                    </div>
                    <div className='column'>
                        {this.props.job.general_job.description}
                    </div>
                </div>
                <div className='row' >
                    <div className='column job-card-row'>
                        <p><strong>Duties:</strong></p>
                    </div>
                    <div className='column'>
                        {this.props.job.general_job.duties}
                    </div>
                </div>

                <div className='row'>
                <JobCardNav />

                </div>




                {/*replace below with JobCardNav class(?) component */}
                <div className='row' >
                    <div className='column'>
                        Add to Favorites
                    </div>
                    <div className='column'>
                        Apply
                    </div>
                    <div className='column'>
                        Notes
                    </div>
                    <div className='column'>
                        ToDo
                    </div>
                    <div className='column'>
                        Share
                    </div>
                </div>


            </div>
        )
    }
}

export default JobCard
