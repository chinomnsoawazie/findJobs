import React, { Component } from 'react'
import JobCardNav from '../containers/JobCardNav'
import BackButton from '../buttons/BackButton'



export class JobCard extends Component {

    


    render() {
        // console.log(this.props.job)

        const buttonText = () =>{
            return 'All Jobs'
        }
        return (
            <div className='job-card-div'>
                <div className='row'>
                     <h4>Job Title: {this.props.job.job_title}</h4>
                </div>

                <div className='row' >
                    <div className='column job-card-row' >
                        <p><strong>Company:</strong> {this.props.job.company_name}</p> 
                    </div>
                    <div className='column'>
                        <p><strong>State: </strong>{this.props.job.state} <strong>City:</strong> {this.props.job.city} <strong>Zip Code: </strong>{this.props.job.zipcode} </p>
                    </div>
                </div>

                <div className='row' >
                    <div className='column job-card-row'>
                        <p> <strong>Pay:</strong> ${this.props.job.pay}</p>
                    </div>
                    <div className='column job-card-row'>
                        <p><strong>Job Type:</strong> {this.props.job.job_type}</p>
                    </div>
                </div>
                <div className='row' >
                    <div className='column job-card-row'>
                       <p> <strong>Summary:</strong></p>
                    </div>
                    <div className='column'>
                        {this.props.job.intro}
                    </div>
                </div>
                <div className='row' >
                    <div className='column job-card-row'>
                        <p><strong>Requirements:</strong></p>
                    </div>
                    <div className='column'>
                        {this.props.job.requirement}
                    </div>
                </div>
                <div className='row' >
                    <div className='column job-card-row'>
                        <p><strong>Schedule:</strong></p>
                    </div>
                    <div className='column'>
                        {this.props.job.schedule}
                    </div>
                </div>
                <div className='row' >
                    <div className='column job-card-row'>
                        <p><strong>Description:</strong></p>
                    </div>
                    <div className='column'>
                        {this.props.job.description}
                    </div>
                </div>
                <div className='row' >
                    <div className='column job-card-row'>
                        <p><strong>Duties:</strong></p>
                    </div>
                    <div className='column'>
                        {this.props.job.duties}
                    </div>
                </div>

                <div className='row'>
                    <JobCardNav  favoriteAJob={this.props.favoriteAJob} user={this.props.user} loggedIn={this.props.loggedIn} job={this.props.job}/>
                </div>

                <div className='row'>
                    <BackButton buttonText={buttonText()}/>
                </div>
            </div>
        )
    }
}

export default JobCard
