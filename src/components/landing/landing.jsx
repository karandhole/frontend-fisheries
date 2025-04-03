import React from 'react'
import MyCarousel from './carousel'
import Slider from './slider'
import Notice from './notice'
import Duration from './duration'
import Prizes from './prizes'
import CompetenceCard from '../competenceCard'
import DivyangAbout from './divyangAbout'
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

const Landing = () => {
  return (
   <Navbar>
      {/* <MyCarousel/> */}
        <ImageCarousel/>
        {/* <Update/> */}
        {/* <WhoWeAre/>
        <DirectorsPage/> */}
        <QuickLinks/>
       {/* <Extented /> */}
       {/* <InfoSection/>
       <Campaigns/> */}
       <Services/>
      
        {/* <Slider/> */}
        {/* <Rule /> */}
        {/* <Notice/> */}
        {/* <Duration/> */}
        <News />
        {/* <Support/> */}
        {/* <Prizes /> */}
        {/* <CompetenceCard/> */}
        {/* <Testimonials/> */}
        {/* <DivyangAbout/> */}
        {/* <Jobs/> */}
   </Navbar>
  )
}

export default Landing
