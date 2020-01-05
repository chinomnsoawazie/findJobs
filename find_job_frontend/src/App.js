import React, { Component } from 'react'
import './App.css';
import PageLeftSideBar from './containers/PageLeftSideBar'
import PageNavBar from './containers/PageNavBar'
import PageRightSideBar from './containers/PageRightSideBar'
import PageMainContainer from './containers/PageMainContainer'
import Axios from 'axios';

class App extends Component {
  state = {
    token: localStorage.token,
    jobToShow: [],
    jobSearchResult: [],
    userJobs: [],
    allJobs: [],

    loggedIn: false,
    allJobsClicked: false,

    user: {},
    userPreferences: [],
    userSkills: [],
    userMemberships: [],
    userEmployments: [],
    userCertifications: [],
    userNotes: [],
    userToDos: []

  }

  componentDidMount() {
    Axios.get('http://localhost:3000/jobs')
    
    .then(r => {
      console.log(r.data[0])
      this.setState({allJobs: r.data})})
      .catch((error) =>{
        console.log(error)
      })
    
  }

  showJob = (job) => {
    this.setState({jobToShow: job})
  }

  whatToShow = () =>{
    if(this.state.loggedIn){
        return this.state.jobSearchResult
    }else{
        return this.state.nonUserJobs
    }
}


getUser = (fetchedUser) => {
  let user = fetchedUser.user
  let token = fetchedUser.token
  let newJobsArray = this.state.allJobs.concat(user.jobs)
  console.log(token)

  this.setState({
    token: token,
    allJobs: newJobsArray,
    loggedIn: !this.state.loggedIn,
    user: {
          id: user.id, first_name: user.first_name,
          last_name: user.last_name, email: user.email,
          country: user.country, state: user.state, 
          city: user.city, age: user.age, highest_education: 
          user.highest_education, years_of_experience: user.years_of_experience},
    userPreferences: user.preferences,
    userSkills: user.skills,
    userMemberships: user.memberships,
    userEmployments: user.employments,
    userCertifications: user.certifications,
    userJobs: user.jobs,
    userJobNotes: user.notes,
    userToos: user.tasks  }, )
}

logOut = () =>{
  this.setState({
    loggedIn: !this.state.loggedIn,
  token: null})

}

setJobSearchResult = (results) => {
  this.setState({jobSearchResult: results})
}

toggleAllJobsClicked = () => {
  this.setState({allJobsClicked: !this.state.allJobsClicked})
}

favoriteAJob = (job) => {

  let token = this.state.token

  let auth = {
    headers: {'Authorization': token}
};

var jobToSend = {
  user_id: `${job.user_id}`,
  job_title: `${job.job_title}`,
  company_name: `${job.company_name}`,
  country: `${job.country}`,
  state: `${job.state}`,
  city: `${job.city}`,
  zipcode: `${job.zipcode}`,
  pay: `${job.pay}`,
  job_type: `${job.job_type}`, 
  intro: `${job.intro}`,
  requirement: `${job.requirement}`,
  employer_strongpoints: `${job.employer_strongpoints}`,
  benefits: `${job.benefits}`,
  education: `${job.education}`,
  schedule: `${job.schedule}`,
  description: `${job.description}`,
  duties: `${job.duties}`,
  url: `${job.url}`,
  industry: `${job.industry}`,
  favorite_key: `${job.favorite_key}`
}

Axios.post( 
  'http://localhost:3000/jobs',
  jobToSend,
  auth
).then((response) => {
}).catch((error) => {
  console.log(error)
});
}



  render() {
    console.log(this.state.allJobs)
    return (
      <>
      <div className='nav-bar'>
        <PageNavBar loggedIn={this.state.loggedIn} user={this.state.user} logOut={this.logOut}/>
      </div>

        <div className='main-page row'>
          <div className='column'>

          {this.state.loggedIn ?
          
          <>
          <PageLeftSideBar/>
           <PageRightSideBar /> 
          </>
         : null}

          </div>
          <div className='column'>

          <PageMainContainer  setJobSearchResults={this.setJobSearchResult} user={this.state.user} getUser={this.getUser}
           allJobs = {this.state.allJobs} showJob={this.showJob} jobToShow={this.state.jobToShow}
            searchResults={this.state.jobSearchResult} loggedIn={this.state.loggedIn} toggleAllJobsClicked={this.toggleAllJobsClicked}
            favoriteAJob={this.favoriteAJob} userEmployments={this.state.userEmployments}
            />

</div>
<div className='column'>

       

</div> 

          
        </div>
      </>
    )
  }
}

export default App

