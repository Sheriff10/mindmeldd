import React from 'react'
import Container from '../Components/Container'
import Button from '../Components/Button'

export default function Intro() {
    return (
        <div className="wrap intro">
            <Container>
                <div className="grid lg:grid-cols-2 py-32 min-h-screen items-center">
                    <div className="card bg-white rounded-3xl p-10 col-start-2 shadow-lg ">
                        <div className="card-head capitalize text-5xl font- mb-5">
                            <span>Be Smart, Help yourself now</span>
                        </div>
                        <span className='text-yellow-500 font-bold'>Free Consultation</span>

                        <div className="text-wrap my-4 text-xl">
                            <span>Counseling and psychotherapy for individuals, couples and families.
                            </span>
                        </div>
                        <Button text={"Contact Us"} />
                    </div>
                </div>
            </Container>
        </div>
    )
}
