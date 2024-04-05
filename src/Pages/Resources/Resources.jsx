import React from 'react'
import Container from '../Components/Container'
import { useInView } from 'react-intersection-observer'
import { FaVideo, FaPhone, FaClipboard, FaFileAlt, FaNewspaper } from 'react-icons/fa';

export default function Resources() {
    const cardFunc = (img, title, text) => ({ img, title, text })

    const cardArr = [
        cardFunc(<FaNewspaper />, "Outside Counselling", "Enjoy therapy sessions in nature's calming embrace."),
        cardFunc(<FaPhone />, "Video Calls", "Connect with your therapist face-to-face from anywhere."),
        cardFunc(<FaFileAlt />, "Phone Calls", "Get support and guidance over the phone, confidentially."),
        cardFunc(<FaClipboard />, "Assessments:", "Tools to understand your mental and emotional health better."),
        cardFunc(<FaFileAlt />, "Articles", " Explore insightful resources for mental well-being."),
    ]

    const [ref, inView] = useInView({ threshold: 0 })

    return (
        <div className="wrap py-32">
            <Container>
                <div className="heading">
                    <div className="capitalize text-yellow-500 text-center text-3xl lg:text-5xl mb-5">
                        <span>Resources</span>
                    </div>
                </div>


                <div className={`grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-20 gap-y-28 mt-10 ${inView ? "fade-in" : "opacity-0"}`} ref={ref} >
                    {cardArr.map((i, index) => (
                        <div className="wrap flex flex-col justify-center items-center text-center gap-3 px-8">
                            <div className="img-wrap lll flex rounded-full bg-gray-300 p-10 hover:bg-yellow-500 trans text-5xl text-neutral-800">
                                <span>{i.img}</span>
                            </div>

                            <span className='text-xl font-bold'> {i.title}</span>
                            <span className='font-thin  lg:block'>{i.text}</span>
                        </div>
                    ))}
                </div>
            </Container>
        </div>



    )
}
