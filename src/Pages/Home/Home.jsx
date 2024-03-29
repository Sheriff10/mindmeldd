import React from 'react'
import Header from '../Components/Header'
import Intro from './Intro'
import About from './About'
import Service from './Service'
import Experts from './Experts'
import Faqs from './Faqs'
import Working from './Working'

export default function Home() {
    return (
        <div className="wrap">
            <Intro />
            <About />
            <Service />
            <Experts />
            <Working />
            <Faqs />
        </div>
    )
}
