import React from 'react'
import MyCarousel from './carousel'
import Slider from './slider'
import Notice from './notice'
import Duration from './duration'
import Prizes from './prizes'
import CompetenceCard from '../competenceCard'
import DivyangAbout from './FisheriesAbout'
import Navbar from '../navbar'
import Testimonials from './testimonials'
import Rule from './rule'
import Support from './supportUs'
import Jobs from './jobs'
import Extented from './extented'
import ImageCarousel from './image-carousel'
import WhoWeAre from './who-we-are'
import InfoSection from './info'
import Campaigns from './campaigns'
import Services from './services'
import DirectorsPage from './director'
import News from './news'
import Update from './update'
import QuickLinks from './quicklinks'
import FisheriesAbout from './FisheriesAbout'
import Latestnews from './Latestnews'

const Landing = () => {
  return (
   <Navbar>
    
        <ImageCarousel/>
       
        <Latestnews/>
        <DirectorsPage/>

        <QuickLinks/>
     
        <FisheriesAbout/>
        <News />
    
   </Navbar>
  )
}

export default Landing
