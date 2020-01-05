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
import PersonalInfoCard from '../components/PersonalInfoCard'
import ProfileEntryPoint from '../components/ProfileEntryPoint'
import AllWorkHistory from './AllWorkHistory'


const PageMainContainer = (props) => {

    const {allJobs, userEmployments, favoriteAJob, getUser, searchResults, jobToShow, loggedIn, setJobSearchResults, showJob, user} = props

    const monthDisplay = (monthNo) =>{

        if(monthNo === 1){
            return 'Jan'
        }else if(monthNo === 2){
            return 'Feb'
        }else if(monthNo === 3){
            return 'March'
        }else if(monthNo === 4){
            return 'April'
        }else if(monthNo === 5){
            return 'May'
        }else if(monthNo === 6){
            return 'June'
        }else if(monthNo === 7){
            return 'July'
        }else if(monthNo === 8){
            return 'Aug'
        }else if(monthNo === 9){
            return 'Sept'
        }else if(monthNo === 10){
            return 'Oct'
        }else if(monthNo === 11){
            return 'Nov'
        }else if(monthNo === 12){
            return 'Dec'
        }
    }

        return (
        <>

        <Switch>
            
            <Route exact path='/'>
                <EntryPoint />
            </Route>

            {/*JobSearch*/}

            <Route path='/search-jobs'>
                <SearchPage loggedIn={loggedIn} allJobs={allJobs} setJobSearchResults={setJobSearchResults}/>
            </Route>

            <Route path='/search-jobs-results'>
                <AllJobs allJobs={searchResults} showJob={showJob}/>
            </Route>

            {/*Profile */}
            <Route path='/profile-entry-point'>
                <ProfileEntryPoint />
            </Route>

            <Route path='/profile-info'>
                <PersonalInfoCard user={user}/>
            </Route>

            <Route path='/profile-work-history'>
                <AllWorkHistory userEmployments={userEmployments} monthDisplay={monthDisplay}/>
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





