import React from 'react'
import "./Tab.css"

const tabs=[
  {
    id:1,
    name:"Delivery",
    active_img: require('../../../images/delivery_clk.png'),
    backdrop:"#FCEEC0",
    inactive_img: require('../../../images/delivery.jpg'),
  },
  {
    id:2,
    name:"Diningout",
    active_img: require('../../../images/take-away_clk.png'),
    backdrop:"#E5F3F3",
    inactive_img:require('../../../images/take-away.png'),
  },
  {
    id:3,
    name:"Nightlife",
    active_img:require('../../../images/martini_clk.png'),
    backdrop:"#EDf4FF",
    inactive_img:require('../../../images/martini.png'),
  },
]
const Tabs = ({active, setactive}) => {
  return (
    <div>
        {/* <button onClick={()=>setactive("Nightlife")}>onclk</button> */}
       <div className="tab-options">
        <div className="max-width option-wrapper">
          {tabs.map((curelm)=>{
               return(
                <div onClick={()=>{setactive(curelm.name)}}
                className={`tab-item absolute-center${
                  active===curelm.name && 'active-tab'
              }`}
                
                >
                <div className="tab-image-container absolute-center"
                style={{backgroundColor:`${active===curelm.name?curelm.backdrop:""}`}}
                >
               <img className='tab-image' alt={curelm.name} src={active===curelm.name?curelm.active_img:curelm.inactive_img}/>

                  
                  
                 </div>  
                 <div className={`tab-name ${active===curelm.name?'active-tab':""}`}>{curelm.name}</div>
               </div>

               )
          })}
        </div>
       </div>
    </div>
  )
}

export default Tabs