import React, { Component } from 'react'
import './App.css';
import PageLeftSideBar from './containers/PageLeftSideBar'
import PageNavBar from './containers/PageNavBar'
import PageRightSideBar from './containers/PageRightSideBar'
import PageMainContainer from './containers/PageMainContainer'
import Axios from 'axios';




class App extends Component {

  state = {
    allJobs: [],
    showAllJobs: false,
    showUserJobs: false,
    showTodo: false,
    showNotes: false,
    loggedIn: false,
    jobToShow: [],
    jobToShowClicked: false
  }

  componentDidMount() {
    Axios.get('http://localhost:3000/jobs')
    .then(r => {

      console.log(r.data[0])
      this.setState({allJobs: r.data})
    })
  }

  showJob = (job) => {
    console.log('show job clicked')
    this.setState({
      jobToShow: job,
      jobToShowClicked: !this.state.jobToShowClicked
    })
  }

  whatToShow = () =>{
    if(this.props.jobToShowClicked){
        return this.state.jobToShow
    }else{
        return this.state.allJobs
    }
}


  render() {
    console.log(this.state.jobToShow)
    return (


      <div>


      <div className='nav-bar'>
        <PageNavBar />
      </div>
        <div className='main-page'>
          <PageLeftSideBar />
          <PageMainContainer allJobs = {this.whatToShow()} showJob={this.showJob} jobToShow={this.state.jobToShow} loggedIn={this.state.loggedIn}/>
          <PageRightSideBar />
        </div>
      </div>
    )
  }
}

export default App

