import React, { Suspense, lazy } from 'react'
import Hero from '../components/Hero'

const LatestCollection = lazy(() => import('../components/LatestCollection'))
const BestSeller = lazy(() => import('../components/BestSeller'))
const Policis = lazy(() => import('../components/Policis'))
const Subscription = lazy(() => import('../components/Subscription'))

function Home() {
  return (
    <div>
      <Hero />
      <br />
      <Suspense fallback={
        <div className="flex justify-center items-center min-h-[30vh] py-10">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500"></div>
        </div>
      }>
        <LatestCollection />
        <br />
        <BestSeller />
        <br />
        <br />
        <Policis />
        <br />
        <br />
        <Subscription />
      </Suspense>
    </div>
  )
}

export default Home;
