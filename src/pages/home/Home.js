import React,{useState} from 'react'
import Header from '../../components/common/Header/Header'
import Tabs from '../../components/common/Tabs/Tabs';
import Footer from '../../components/common/Footer/Footer'
import Delivery from '../../components/Delivery/Delivery'
import Diningout from '../../components/Diningout/Diningout'
import Nightlife from '../../components/Nightlife/Nightlife'
import './Home.css'

const Home = () => {
    const [active, setactive] = useState("Delivery")
  return (
    <div>
        <Header/>
        <Tabs active={active} setactive={setactive}/>
        {/* diiferent scren */}
        {getcorrectscrn(active)}
        <Footer/>
    </div>
  )

}
const getcorrectscrn =(tab)=>{
    switch (tab) {
        case "Delivery":
            return <Delivery/>;
           
        case "Diningout":
            return <Diningout/>;
           
        case "Nightlife":
            return <Nightlife/>;
           
    
        default:
            return <Delivery/>;
    }
  }

export default Home