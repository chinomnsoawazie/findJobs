import React, { Component } from 'react'

export class JobCard extends Component {


    render() {

        console.log(this.props.job)
        return (
            <div>
                Job Title: {this.props.job.general_job.job_title}
            </div>
        )
    }
}

export default JobCard
