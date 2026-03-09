import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Policis from '../components/Policis'
import Subscription from '../components/Subscription'
import Footer from '../components/Footer'


function Home() {

  

  return (
    <div>
      <Hero/>
      <br/>
     <LatestCollection/>
       <br/>
       <BestSeller/>
       <br/>
       <br/>
       <Policis/>
       <br/>
       <br/>
       <Subscription/>
       
    </div>
  )
}

export default Home;
