import React from 'react'
import ImageSlider from './ImageSlider'
import Latestnews from './LatestNews'
import DirectorsPage from './Members'
import QuickLinks from './Quicklineks'

import Vision from './vision'
import PlantSlider from './PlantSlider'
import Scheme from './Scheme'
import AboutWithScroll from './about'



const MainPage = () => {
  return (
    <>
    <ImageSlider />
    <Latestnews />
    {/* <AboutWithScroll/> */}
    <Scheme/>
    <DirectorsPage/>
    <Vision/>
    <QuickLinks/>
    <PlantSlider/>
  </>
  )
}

export default MainPage