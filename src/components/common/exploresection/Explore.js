import React from 'react'
import  './Explore.css'
import Explorecard from './explorecard/Explorecard'
const Explore = ({listcard,collectionName}) => {
  return (
    <div className='max-width explore-secton'>
        <div className="collection-title">{collectionName}</div>
        <div className="explore-grid">
           {listcard&&listcard.map((cur)=>{
            return<Explorecard lists = {cur} />
           })}
        </div>
    </div>
  )
}

export default Explore