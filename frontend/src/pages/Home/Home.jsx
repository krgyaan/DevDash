import React from 'react'
import { HackathonComp, Hero, HostEvents, PickRight } from '../../components'

const Home = () => {
    return (
        <div className='mt-16'>
            <Hero />
            <HostEvents />
            <HackathonComp />
            <PickRight />
        </div>
    )
}

export default Home
