import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Policis from '../components/Policis'


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
    </div>
  )
}

export default Home;
