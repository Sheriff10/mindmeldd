import React from 'react'
import Container from '../Components/Container'
import Button from '../Components/Button'
import { useInView } from 'react-intersection-observer'

export default function Intro() {
    const [ref, inView] = useInView({ threshold: 0.3 })
    const [ref2, inView2] = useInView({ threshold: 0.3 })
    return (
        <div className="wrap">
            <div className="grid lg:grid-cols-2 gap-5 items-center ">
                <div className="card bg-white rounded-3xl px-5 lg:ps-24 font ">
                    <div className={`card-head text-grad capitalize text-5xl font-bold  mb-5 ${inView2 ? "fade-in" : "opacity-0 "}`} ref={ref2}>
                        <span>Be Smart, Help yourself now</span>
                    </div>
                    <span className={`text-yellow-500 font-bold text-lg ${inView ? "fade-in" : "opacity-0 "}`} ref={ref}>Wellness isn’t a one size fits all concept.
                        Discover your unique path with us today!</span>

                    <div className="text-wrap my-4 text-xl">
                        <span>Counseling and psychotherapy for individuals, couples and families.
                        </span>
                    </div>
                    <Button text={"Contact Us"} />
                </div>

                <div className="img-wrap fade-in row-start-1 lg:col-start-2 flex min-h-screen justify-center items-center py-32 ll bg-grad">
                    <div className="wrap">
                        <img src="/asset/mind.png" alt="MindMeld" className='w-[250px] lg:w-[400px] fade-in-late' />
                    </div>
                </div>
            </div>
        </div>
    )
}