import React from 'react'
import  './Deliveryitem.css'
const Deliveryitem = ({items}) => {
  return (
    <div >
        <div className="item-img">
            <img src={items.cover} alt={items.title} className="item-image"/>
        </div>
     
     <div className="item-title">{items.titil}</div>

    </div>
  )
}

export default Deliveryitem