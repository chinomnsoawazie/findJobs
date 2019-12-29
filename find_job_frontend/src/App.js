import React, { Component } from 'react'
import './App.css';
import PageLeftSideBar from './containers/PageLeftSideBar'
import PageNavBar from './containers/PageNavBar'
import PageRightSideBar from './containers/PageRightSideBar'
import PageMainContainer from './containers/PageMainContainer'
import Axios from 'axios';




class App extends Component {

  state = {
    allJobs: []
  }

  componentDidMount() {
    Axios.get('http://localhost:3000/jobs')
    .then(r => {

      this.setState({allJobs: r.data})
    })
  }


  render() {
    console.log(this.state.allJobs)
    return (

      <div className='nav-bar'>
        <PageNavBar />
        <div className='main-page'>
          <span> <PageLeftSideBar /></span>
          <span><PageMainContainer allJobs = {this.state.allJobs}/></span>
          <span> <PageRightSideBar /></span>
        </div>
    </div>
    )
  }
}

export default App

