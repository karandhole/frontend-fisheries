import React from 'react'

import Navbar from '../navbar'

import ImageCarousel from './image-carousel'

import DirectorsPage from './director'
import News from './news'

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
