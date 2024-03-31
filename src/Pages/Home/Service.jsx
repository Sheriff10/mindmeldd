import React from 'react'
import Container from '../Components/Container'
import { FaUser, FaUserMd, FaChild, FaUserFriends, FaHeart, FaUsers, FaClipboardList } from 'react-icons/fa';
import Button from '../Components/Button';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { useInView } from 'react-intersection-observer';

export default function Service() {
    const dum = [1, 1, 1, 1, 1]
    const cardFunc = (icon, title) => ({ icon, title })
    const cardArr = [
        cardFunc(<FaUser />, "Adult Therapy"),
        cardFunc(<FaUserMd />, "Adult Psychiatry"),
        cardFunc(<FaChild />, "Children First Services"),
        cardFunc(<FaUserFriends />, "Adult Therapy"),
        cardFunc(<FaHeart />, "Couples Therapy"),
        cardFunc(<FaUsers />, "Self-Care"),
        cardFunc(<FaClipboardList />, "Psychometric Assessments"),
    ]
    const [ref, inView] = useInView({ threshold: 0.3 })
    const [ref2, inView2] = useInView({ threshold: 0})
    return (
        <div className="wrap   ">
            <div className="bg-con py-24">
                <div className="hidden lg:block">
                    <Container>
                        <div className={`heading text-center ${inView ? "fade-in" : "opacity-0"}`} ref={ref}>
                            <span className='text-lg text-grad font-bold'>Our Services</span>
                            <div className="capitalize text-5xl mb-5 text-yellow-500">
                                <span>What Service Provide</span>
                            </div>
                        </div>

                        <div className={`grid lg:grid-cols-4 gap-8 mt-20 ${inView2 ? "fade-in" : "opacity-0"}`} ref={ref2}>

                            {cardArr.map((card, index) => (
                                <div className="card bg-pri px-5  py-20 text-center hover:shadow-xl hover:bg-yellow-50 trans service-card" key={index}>

                                    <div className="icon flex justify-center p-3">
                                        <span className='text-3xl bg-yellow-500 bg-opacity-20 rounded-full p-4 text-yellow-500'>{card.icon}</span>
                                    </div>
                                    <div className="title font-bold text-lg">
                                        <span>{card.title}y</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center my-10">
                            <Button text={"Expore Services >>"} />
                        </div>
                    </Container>
                </div>

                <Container>
                    <div className="lg:hidden">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            {cardArr.map((card, index) => (
                                <SwiperSlide key={index}>
                                    <div className="card bg-pri px-5  py-20 text-center hover:shadow-xl hover:bg-yellow-50 trans service-card" >

                                        <div className="icon flex justify-center p-3">
                                            <span className='text-3xl bg-yellow-500 bg-opacity-20 rounded-full p-4 text-yellow-500'>{card.icon}</span>
                                        </div>
                                        <div className="title font-bold text-lg">
                                            <span>{card.title}y</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </Container>
            </div>
        </div>
    )
}
