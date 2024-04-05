import React from 'react'
import { FaSearch } from 'react-icons/fa'
import Button from '../Components/Button'
import Container from '../Components/Container'

export default function Centres() {
    return (
        <div className="wrap py-32">
            <div className="flex justify-center">
                <div className="search-box relative flex items-center">
                    <div className="absolute ms-3 text-xl"><FaSearch /></div>
                    <input type="text" className='p-3 rounded-3xl border-[1px] border-black ps-10' placeholder='Search Location' />
                </div>
            </div>

            <Container>
                <div className="card shadow-xl p-5 py-10 border-t-[1px] rounded-3xl mt-10">
                    <div className="flex flex-wrap gap-5 items-center">
                        <div className="img-wrap pe-3">
                            <img src="/asset/city.jpeg" alt="Mumbia"  className='rounded-3xl'/>
                        </div>
                        <div className="detail-wrap">
                            <div className="heading mb-5 font-bold text-2xl">
                                <span>Banglass Location</span>
                            </div>

                            <div className="text-wrap leading-9">
                                <span> Open: 02:00 AM UTC </span> <br />
                                <span> Close: 02:00 AM UTC </span> <br />
                                <span> Location: 123, ABC Street XYZ Nagar, Mumbai, Maharashtra, India </span>
                            </div>
                        </div>
                    </div> <br />

                    <a href="mailto:someone@test.vom">
                        <Button text={"Book a Session"} />
                    </a>
                </div>
            </Container>
        </div>
    )
}
