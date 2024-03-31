import React from 'react'
import Container from '../Components/Container'
import Button from '../Components/Button'
import { FaRightFromBracket } from 'react-icons/fa6'
import { FaAngleRight, FaCaretRight } from 'react-icons/fa'

export default function Footer() {
    const link = ["Company Hstory", "About Us", "Contact Us", "Services", "Privacy Policy"]
    return (
        <div className="wrap bg-pri text-gray-800">
            <Container>
                <div className="grid md: grid-cols-2 lg:grid-cols-4 py-24 gap-10">
                    <div className="wrap col-span-2">
                        <div className="head font-bold text-4xl mb-3">
                            <span>Mind<span className='text-yellow-500'>Meld</span></span>
                        </div>
                        <div className="text-wrap my-8">
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</span>
                        </div>
                        <Button text={"Contact Me"} />
                    </div>

                    <div className="wrap">
                        <div className="head text-2xl font-bold mb-3">
                            <span>Quick links</span>
                        </div>
                        <div className="ul list-none leading-9">
                            {link.map((i, index) => (
                                <li key={index} className='flex leading-10 items-center gap-2 text-lg'><FaAngleRight /> {i}</li>
                            ))}
                        </div>
                    </div>

                    <div className="wrap">
                        <div className="head text-2xl font-bold mb-3">
                            <span>Contact Me</span>
                        </div>
                        <div className="list-none flex flex-col gap-3">
                            <span>Lorem ipsum dolor amet consectetur adipisicing elit sed do tempor.</span>

                            <span>Flat 20, Reynolds Neck, North Hele naville, FV77 8WS</span>


                            <span>+2(305) 587-3407</span>

                            <span>info@example.com</span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
