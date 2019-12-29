import React from 'react'
import {Column, Row} from 'react-foundation'
import JobCard from '../components/JobCard'
import { Grid, Cell } from 'react-foundation/lib/components/xy-grid'

const PageMainContainer = (props) => {
    const {allJobs} = props
    return (
        <div className='main-container'>
             Main container

            <Grid className="display" isColumn>


            {allJobs.map(job => <Cell large={4} ><JobCard key={job.general_job.id} job={job}/> </Cell>)}
            
            
                


            </Grid>





    
        </div>
    )
}

export default PageMainContainer
