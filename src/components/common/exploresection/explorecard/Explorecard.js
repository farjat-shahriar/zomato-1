import React from 'react'
import './Explorecard.css'
const Explorecard = ({lists}) => {
  return (
    <div className='explore-card'>

        <div className="explore-card-cover">
            <img src={lists.imgdata} alt={lists.rname} className='explore-card-img'/>
            <div className='explore-time'>{lists.time}</div>
            <div className='explore-data'>{lists.somedata}</div>
            <div className="res-row">
            <div className='explore-name'>{lists.rname}</div>
            <div className='explore-rating'>{lists.rating} ★</div>
             </div>
           
            <div className="res-row">
              <div className="explore-address">{lists.address}</div>
              <div className='explore-price'> ₹ {lists.price} </div>
            </div>
           <div className="separator"></div>
        </div>
          
    </div>
  )
}

export default Explorecard