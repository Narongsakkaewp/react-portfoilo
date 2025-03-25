import React from 'react'
import { projectData } from './Data'
import { projectCategory } from './Data'

const Project = () => {
    return(
        <div className='procject__filters'>
            {projectCategory.map((item, index) => {
                return <span className='project__filter'>{item.name}</span>
            })}
        </div>
    )
}

export default Project