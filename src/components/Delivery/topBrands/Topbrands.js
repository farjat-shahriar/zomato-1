import React from 'react'
import './Topbrands.css';
import Slider from "react-slick";
import NextArrow from '../../common/carousel/NextArrow';
import PrevArrow from '../../common/carousel/PrevArrow';
import Topbrandsitem from '../topBrands/topbrandsitem/Topbrandsitem'
const topbrandsapi = [
    {
        id: 1,
        time: "32min",
        cover:"https://upload.wikimedia.org/wikipedia/sco/b/bf/KFC_logo.svg",
    },
    {
        id: 2,
        time: "12min",
        cover: "https://seeklogo.com/images/B/Burger_King-logo-EB00FAD8D3-seeklogo.com.png",
    },
    {
        id: 3,
        time: "15min",
        cover: "https://seeklogo.com/images/K/king-power-logo-A35FF55717-seeklogo.com.png",
    },
    {
        id: 4,
        time: "20min",
        cover: "https://www.genuinebroasterchicken.com/wp-content/themes/genuine-broaster-chicken/img/broaster-logo.png"
    },
    {
        id: 5,
        time: "20min",
        cover:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/512px-Dominos_pizza_logo.svg.png?20111115123340"
    },
    {
        id: 6,
        time: "20min",
        cover: "https://seeklogo.com/images/C/Carl_s_Jr_-logo-2443A114F7-seeklogo.com.jpg"
    },
    {
        id: 7,
        time: "20min",
        cover: "https://anagf16blog.files.wordpress.com/2016/10/b5i7rcho.jpeg"
    }
]
const settings = {
 
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow/>
  };
const Topbrands = () => {
    return (
        <div className='top-brands max-width'>
             <div className='collection-title'>Top Brands for you</div>
             <Slider{...settings}>
         {topbrandsapi.map((brand)=>{
            return <Topbrandsitem brand={brand}/>
         })}

        </Slider>
        </div>
    )
}

export default Topbrands