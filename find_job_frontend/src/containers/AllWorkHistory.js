import React from 'react'
import WorkHistoryCard from '../components/WorkHistoryCard'

const AllWorkHistory = (props) => {
    const {userEmployments, monthDisplay} = props
    return (
            <div className='profile-child'>
                {userEmployments.map(employment => <WorkHistoryCard key={employment.id} employment={employment} monthDisplay={monthDisplay} />)}    
            </div>
    )
}

export default AllWorkHistory
