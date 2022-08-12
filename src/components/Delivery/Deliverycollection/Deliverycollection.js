import React from 'react'
import'./Deliverycollection.css'
import Slider from "react-slick";
import NextArrow from '../../common/carousel/NextArrow'
import PrevArrow from '../../common/carousel/PrevArrow'
import Deliveryitem from '../Deliverycollection/Deliveryitem/Deliveryitem'
const Deliiveryapi=[
  {
    id:1,
    titil:"Butternut Squash",
    cover:"https://personalgourmetmeals.com/wp-content/uploads/2020/10/Soup-Butternut-Squash.jpg",
  },
  {
    id:2,
    titil:"Scrambled Eggs",
    cover:"https://personalgourmetmeals.com/wp-content/uploads/2020/10/SCRAMBLED-EGGS-WITH-BACON.jpg",
  },
  {
    id:3,
    titil:"Chocolate Bark",
    cover:"https://personalgourmetmeals.com/wp-content/uploads/2020/10/CHOCOLATE-BARK.jpg",
  },
  {
    id:4,
    titil:"Roasted Salmon",
    cover:"https://personalgourmetmeals.com/wp-content/uploads/2021/06/Meal-Kit-Roasted-Salmon-Honey-Mustard.jpg",
  },
  {
    id:5,
    titil:"Edamame Salad",
    cover:"https://personalgourmetmeals.com/wp-content/uploads/2020/10/EDAMAME-SALAD.jpg",
  },
  {
    id:6,
    titil:"Lemon Chicken",
    cover:"https://personalgourmetmeals.com/wp-content/uploads/2021/06/Meal-Kit-Lemon-Chicken.jpg",
  },
  {
    id:7,
    titil:"Beef Bolognese ",
    cover:"https://personalgourmetmeals.com/wp-content/uploads/2020/10/Beef-Bolognese.jpg",
  },
  {
    id:8,
    titil:"Chefs Charcuterie",
    cover:"https://personalgourmetmeals.com/wp-content/uploads/2020/10/CHEFS-CHARCUTERIE-scaled.jpg",
  },
  {
    id:9,
    titil:"Beef Kafta",
    cover:"https://personalgourmetmeals.com/wp-content/uploads/2021/06/Meal-Kit-Beef-Kafta.jpg",
  },
  {
    id:10,
    titil:"Roasted Salmon",
    cover:"https://personalgourmetmeals.com/wp-content/uploads/2021/06/Meal-Kit-Roasted-Salmon-Honey-Mustard.jpg",
  },
  
]

const settings = {
 
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow/>
};
const Deliverycollection = () => {
  return (
    <div className='delivery-collection'>
       <div className="max-width">
        <div className='collection-title'>Eat what makes you happy</div>
        <Slider{...settings}>
         {Deliiveryapi.map((item)=>{
            return <Deliveryitem items={item}/>
         })}

        </Slider>
       </div>
      
      </div>
  )
}

export default Deliverycollection