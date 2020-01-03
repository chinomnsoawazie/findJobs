import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import AllJobs from './AllJobs'
import JobCard from '../components/JobCard'
import Apply from '../components/Apply'
import AllTODo from '../components/AllToDo'
import LoginForm from '../forms/LoginForm'
import EntryPoint from '../components/EntryPoint'
import SearchPage from '../components/SearchPage'
import LoggedInEntryOptions from '../components/LoggedInEntryOptions'
import SignUPForm from '../forms/SignUpForm'







const PageMainContainer = (props) => {

    const {allJobs, toggleAllJobsClicked, favoriteAJob, getUser, searchResults, jobToShow, loggedIn, setJobSearchResults, showJob, user} = props

    const renderSearchedJobs = () => {
        if(searchResults.length > 0){
            return <Redirect to='/jobs' />
        }
    }

        return (
        <>

        {renderSearchedJobs()}


        <Switch>
            
            <Route exact path='/'>
                <EntryPoint />
                
            </Route>

            <Route path='/search-jobs'>
                <SearchPage loggedIn={loggedIn} allJobs={allJobs} setJobSearchResults={setJobSearchResults}/>
            </Route>

            <Route path='/logged-in-options'>
                <LoggedInEntryOptions user={user} />

            </Route>
            <Route  exact path="/jobs">
                <AllJobs allJobs={allJobs} showJob={showJob} />
            </Route>

            <Route path="/jobs/:id">
                <JobCard  user={user} favoriteAJob={favoriteAJob} loggedIn={loggedIn} job={jobToShow} />
            </Route>

            <Route  path="/jobs/:id/apply">
                <Apply />
            </Route>

            <Route  path='/jobs/id/todos'>
                <AllTODo />
            </Route>

            <Route  path='/login'>
              {loggedIn ?  <Redirect to="/logged-in-options" /> : <LoginForm  getUser={getUser}/>}  
            </Route>

            <Route path='/signup'>
                <SignUPForm getUser={getUser}/>
            </Route>



        </Switch>
        </>
        )
    
}

export default PageMainContainer





