import React from 'react'
import Container from '../Components/Container'
import { FaUser, FaUserMd, FaChild, FaUserFriends, FaHeart, FaUsers, FaClipboardList } from 'react-icons/fa';
import Button from '../Components/Button';

export default function Service() {
    const dum = [1, 1, 1, 1, 1]
    return (
        <div className="wrap bg-pri  ">
            <div className="bg-con bg-black bg-opacity-30 py-24">
                <Container>
                    <div className="heading">
                        <span className='text-lg text-yellow-500 font-bold'>Our Services</span>
                        <div className="capitalize text-5xl mb-5 text-white">
                            <span>What Service Provide</span>
                        </div>
                        <span className='font-thin text-lg'>Excepteur sint occaecat cupidatat <br /> proident sunt culpa officia desernt mollit anim est laborum.</span>
                    </div>

                    <div className="grid lg:grid-cols-4 gap-8 mt-20">

                        {dum.map((card, index) => (
                            <div className="card bg-white rounded-3xl p-5 text-center hover:shadow-xl hover:bg-emerald-100 trans">
                                <div className="icon flex justify-center p-3">
                                    <span className='text-3xl bg-yellow-500 bg-opacity-20 rounded-full p-4 text-yellow-500'><FaUser /></span>
                                </div>
                                <div className="title font-bold text-lg">
                                    <span>Couples Therapy</span>
                                </div>
                                <div className="text font-thin">
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center my-10">
                        <Button text={"Expore Services >>"} />
                    </div>
                </Container>
            </div>
        </div>
    )
}
