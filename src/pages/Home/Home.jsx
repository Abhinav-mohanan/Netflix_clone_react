import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar.jsx'
import hero_banner from "../../assets/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png"
import play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png"
import Title_card from '../../components/Title_cards/Title_card.jsx'
import Footer from '../../components/Footer/footer.jsx'


const Home = () => {
  return (
    <>
    <div className='home'>
    <Navbar/>
    <div className='hero'>
      <img src={hero_banner} alt="hero image" className='banner-img' />
      <div className="hero-caption">
        <img src={hero_title} alt="hero_title" className='caption-img'/>
        <p>Discovering his ties to a secret ancient order, a young man living 
          in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className="hero-btns">
            <button className='btn'> <img src={play_icon} alt="play_icon" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="info_icon" />More Info</button>
          </div>
          <Title_card/>
      </div>
    </div>
    <div className='more-cards'>
    <Title_card title={"Blockbuster Movies"} category={"top_rated"}/>
    <Title_card title={"Only on Netflix"} category={"upcoming"}/>
    <Title_card title={"Upcoming"} category={"popular"}/>
    <Title_card title={"Top pics for you"} category={"now_playing"}/>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Home