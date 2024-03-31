import React from 'react'
import Container from '../Components/Container'
import { useInView } from 'react-intersection-observer'

export default function Working() {
    const cardFunc = (img, title, text) => ({ img, title, text })
    const cardArr = [
        cardFunc("/asset/clip.png", "Make Schedule", "Lorem ipsum dolor sit amet adipelit sed eiusmtempor encid dolore."),
        cardFunc("/asset/chat.png", "Start Discussion", "Lorem ipsum dolor sit amet adipelit sed eiusmtempor encid dolore."),
        cardFunc("/asset/clip.png", "Enjoy Plan", "Lorem ipsum dolor sit amet adipelit sed eiusmtempor encid dolore."),
    ]
    const [ref, inView] = useInView({ threshold: 0 })
    
    return (
        <div className="wrap py-32">
            <Container>
                <div className="heading">
                    <div className="capitalize text-yellow-500 text-center text-3xl lg:text-5xl mb-5">
                        <span>How MindMeld work?</span>
                    </div>
                </div>

                <div className={`grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-20 mt-10 ${inView ? "fade-in" : "opacity-0"}`} ref={ref} >
                    {cardArr.map((i, index) => (
                        <div className="wrap flex flex-col justify-center items-center text-center gap-3">
                            <div className="img-wrap lll flex rounded-full bg-gray-300 p-10 hover:bg-yellow-500 trans">
                                <img src={i.img} alt="Clipboard" />
                            </div>

                            <span className='text-xl font-bold'> <span className='text-yellow-500 font-bold'>{index+1}.</span> {i.title}</span>
                            <span className='font-thin  lg:block'>{i.text}</span>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

