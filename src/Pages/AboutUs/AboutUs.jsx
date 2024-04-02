import React from 'react'
import About from '../Home/About'
import Container from '../Components/Container'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function AboutUs() {
    const cardArr = [
        " I was going through a really tough time and I was really struggling to find the help I needed until I found MindMeldd. They were so amazingly understanding, efficient and responsive, and made sure I got the help I needed as quickly as possible. Their discounted student rates were also incredibly helpful for me and it made it much easier for me to seek help. ",
        " MindMeldd helped me with student-pocket friendly therapy session when I was in a rough spot. The team replied immediately and assigned a session (with an amazing psychologist/therapist) at my convenience and by the earliest. Plus the team is sensitive, helpful and punctual and offer assistance and reply ASAP (which is amazing). ",
        " My experience with MindMeldd was wonderful. In a low point in my life and mindset, Ms. Vedika really was a source of self-reflection and understanding. MindMeldd also made the whole customer experience really smooth and stress free- important when dealing with people’s mental health. Overall, I would recommend this service for anyone that wants an understanding and empathetic ear and guidance "
    ]
    return (
        <div className="wrap py-32">
            <About />
            <div className="wrap bg-pri py-32">
                <Container>
                    <div className="head text-yellow-500 text-center text-4xl font-bold mb-20">
                        <span>Testimonial</span>
                    </div>

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
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {cardArr.map((card, index) => (
                            <SwiperSlide key={index}>
                                <div className="wrap flex justify-center text-3xl">
                                    <div className="box w-[800px] bg-white lg:p-16 p-8 py-16 rounded-3xl leading-10 shadow-xl">
                                        <span>
                                            {card
                                            }
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Container>
            </div>
        </div>
    )
}
