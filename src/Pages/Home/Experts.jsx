import React from 'react'
import Button from '../Components/Button'
import Container from '../Components/Container'
import { useInView } from 'react-intersection-observer'

export default function Experts() {
    const [ref, inView] = useInView({ threshold: 0.3 })
    return (
        <div className={`wrap bg-yellow-500`} ref={ref}>
            <div className=" text-white">
                <Container>
                    <div className={`flex text-center justify-center py-24 items-center ${inView ? "fade-in" : "opacity-0"}`}>
                        <div className="wrap p-3 md:w-[70%]">
                            <span className='text-lg text-black font-bold'>Expertise And proffessionalism</span>
                            <div className="capitalize text-5xl mb-10">
                                <span>Professional & Expertize councellor</span>
                            </div>

                            <div className="my-10 text-lg font-thin">
                                <span>Lorem ipsum dolor sit amet consectetur adipicing elit sed do usmod tempor incididunt.enim ad minim veniam, quis nostrud exer citation ulla mco laboris nisi ut aliquip commodo.</span>
                            </div>
                            <Button className=' border-2' text={"Contact An Expert Today"} />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
