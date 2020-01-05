import React from 'react'
import {withRouter} from 'react-router-dom'

const PersonalInfoCard = (props) => {
    const {user} = props
    return (
        <div className='profile-child'>
                    <div className='row'>
                        <p> <strong>First Name: </strong> {user.first_name}</p> 
                    </div>

                    <div className='row'>
                        <p><strong>Last Name: </strong> {user.last_name} </p>
                    </div>

                    <div className='row'>
                        <p><strong>Email: </strong>{user.email}</p>
                    </div>

                    <div className='row'>
                        <p><strong> Username: </strong>{user.username}</p>
                    </div>
                                         
                    <div className='row'>
                        <p><strong>Country: </strong>{user.country}</p>
                    </div>

                    <div className='row'>
                        <p><strong>State:</strong>{user.state}</p>
                    </div>

                    <div className='row'>
                        <p><strong>City:</strong>{user.city}</p>
                    </div>

                    <div className='row'>
                        <p><strong>Age:</strong>{user.age}</p>
                    </div>

                    <div className='row'>
                        <p><strong>Highest education:</strong>{user.highest_education}</p>
                    </div>

                    <div className='row'>
                        <p><strong>Years of experience:</strong>{user.years_of_experience}</p>
                    </div>

                    <div className='row'>
                        
                    <button onClick={() => props.history.push('profile-info')} className='profile-entry-button'>Edit personal information</button>
                    <button onClick={props.history.push('profile-entry-point')} className='profile-entry-button'>Back to profile</button>
                    </div>
        </div>
    )
}

export default withRouter(PersonalInfoCard)
