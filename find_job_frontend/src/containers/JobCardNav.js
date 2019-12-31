import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import applyIcon from '../pictures/applyIcon.png'
import favoriteIcon from '../pictures/favoriteIcon.png'
import shareIcon from '../pictures/shareIcon.png'


export class JobCardNav extends Component {

    state = {

    }

    handleClick = () => {
        console.log('clicked')

    }

    applyButtonText = () => {
        return 'Apply'
    }

    backToSearchButtonText = () => {
        return 'Remove Job'
    }
    render() {
        return (
            <div className='row'>
                <div className='column job-card-row'>

            <button className='job-card-button'> <img src={favoriteIcon} alt='add to favorites'/> Add to favorites </button>
            </div>

              <div className='column job-card-row'>
                  
             <NavLink to={'/jobs/general_jobs/:id/apply'} >
               <button  onClick={this.handleClick}   className='job-card-button'> <img src={applyIcon} alt='apply'/> Apply</button> 
            </NavLink>
                  </div>  

                  <div className='column job-card-row'>
            
               <button  onClick={this.handleClick}   className='job-card-button'> ToDo</button> 
               <select>
<option value="add">Add</option>
  <option value="delete">Delete</option>
  <option value="update">Update</option>
</select>
           


                  </div>

                  <NavLink to={'/jobs/general_jobs/:id/apply'} >
                  
               <button  onClick={this.handleClick}   className='job-card-button'> <img src={shareIcon} alt='apply'/> Share</button> 
            </NavLink>

            {/* <NavLink >
                <button  onClick={this.handleClick}   className='side-bar-button'>{this.backToSearchButtonText}</button> 
            </NavLink>
            <NavLink  >
                <button  onClick={this.handleClick}   className='side-bar-button'>ToDo</button> 
            </NavLink> */}
            </div>
        )
    }
}

export default JobCardNav