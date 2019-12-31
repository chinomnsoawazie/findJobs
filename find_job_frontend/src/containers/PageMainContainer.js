import React, { Component } from 'react'
// import JobCard from '../components/JobCard'
import ViewButton from '../buttons/ViewButton'
import DeleteButton from '../buttons/DeleteButton'
import {Route, Switch, Redirect} from 'react-router-dom'
import AllJobs from './AllJobs'
import JobCard from '../components/JobCard'
import Apply from '../components/Apply'






class PageMainContainer extends Component {


    viewButtonText = () => {
        return 'View Job'
    }

    removeButtonText = () => {
        return 'Remove Job'
    }

   
   

    
    render() {
        // console.log(this.props.jobToShow)

        return (
        <>
        

        <Switch>
            <Route  exact path="/">
                <AllJobs allJobs={this.props.allJobs} showJob={this.props.showJob} />
            </Route>

            <Route path="/jobs/general_job/:id">
                {/* {this.showJobMainContainer} */}
                <JobCard job={this.props.jobToShow} />
            </Route>

            <Route path="/jobs/general_jobs/:id/apply">
                <Apply />
            </Route>
            

        </Switch>
        </>
        )

    }

    // showJobMainContainer = () => {
    //     return <JobCard job={this.props.jobToShow} />
    // }
}

export default PageMainContainer