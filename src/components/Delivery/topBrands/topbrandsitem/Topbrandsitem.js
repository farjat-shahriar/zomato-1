import React from 'react'
import  './Topbrandsitem.css'
const Topbrandsitem = ({brand}) => {
  return (
    <div>
        <div className="brand-img">
            <img src={brand.cover} alt={brand.title} className="brand-image"/>
        </div>
     
     <div className="brand-title">{brand.title}</div>
    </div>
  )
}

export default Topbrandsitem