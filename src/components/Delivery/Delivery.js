import React from 'react'
import  './Delivery.css'
import Filters from '../common/filters/Filters'
import Deliverycollection from './Deliverycollection/Deliverycollection'
import Topbrands from './topBrands/Topbrands'
import Explore from '../common/exploresection/Explore'
import{ Restaurent} from '../../../src/data/Restaurent'
const Deliveryfilter =[
  {
    id:1,
    icon:<i className="fi fi-rs-filter absolute-center"></i>,
    title:"Filters",
  },
  {
    id:2,
    title:"Rating: 4.0+",
  },
  {
    id:3,
    title:"Safe and Hygienic",
  },
  {
    id:4,
    title:"Pure Veg",
  },
  {
    id:5,
    icon:<i className="fi fi-rr-apps-sort absolute-center"></i>,
    title:"Delivery Time",
  },
  {
    id:6,
    title:"Great Offers",
  },
]
const restaurentlist = Restaurent;
const Delivery = () => {
  return (
    <div>
      <div className="max-width"> 
      
      <Filters filterlist={Deliveryfilter}/>
      
      </div>
       <Deliverycollection/>
       <Topbrands/>
       <Explore listcard ={restaurentlist} collectionName="Delivery Restaurants in Dhaka"/>
    </div>
  )
}

export default Delivery
