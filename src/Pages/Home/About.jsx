import React from 'react'
import Container from '../Components/Container'
import Button from '../Components/Button'

export default function About() {
    return (
        <div className="wrap">
            <Container>
                <div className="grid lg:grid-cols-2 py-24 items-center">
                    <div className="wrap p-3">
                        <span className='text-lg text-yellow-500font-bold'>About me</span>
                        <div className="capitalize text-5xl mb-10">
                            <span className='text-grad'>Professional Psychology Therapy</span>
                        </div>

                        <span className='font-bold text-lg'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu santium doloreque laudantum.</span>

                        <div className="my-10 text-lg font-thin">
                            <span>Lorem ipsum dolor sit amet consectetur adipicing elit sed do usmod tempor incididunt.enim ad minim veniam, quis nostrud exer citation ulla mco laboris nisi ut aliquip commodo.</span>
                        </div>

                        <Button text={"Book an Appointment"} />
                    </div>

                    <div className="img-wrap flex justify-center">
                        <img src="/asset/mobile.png" alt="MindMeld" />
                    </div>
                </div>
            </Container>
        </div>
    )
}
