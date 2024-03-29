import React from 'react'
import Button from '../Components/Button'
import Container from '../Components/Container'

export default function Experts() {
    return (
        <div className="wrap exp">
            <div className="bg-black bg-opacity-50 text-white">
                <Container>
                    <div className="flex text-center justify-center py-24 items-center">
                        <div className="wrap p-3 md:w-[70%]">
                            <span className='text-lg text-yellow-500 font-bold'>Expertise And proffessionalism</span>
                            <div className="capitalize text-5xl mb-10">
                                <span>Professional & Expertize councellor</span>
                            </div>

                            <div className="my-10 text-lg font-thin">
                                <span>Lorem ipsum dolor sit amet consectetur adipicing elit sed do usmod tempor incididunt.enim ad minim veniam, quis nostrud exer citation ulla mco laboris nisi ut aliquip commodo.</span>
                            </div>

                            <Button text={"Contact An Expert Today"} />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
