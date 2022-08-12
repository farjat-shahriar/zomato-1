import React from 'react'
import './Filters.css'
import Filteritem from './filteritem/Filteritem'
const Filters = ({filterlist}) => {
  return (
    <div className='filters'>
  {filterlist && filterlist.map((props)=>{
   return <div>
           <Filteritem filter={props} key={props.id}/>
       </div>
  })}

    </div>
  )
}

export default Filters