import React from 'react'
import Container from '../Components/Container'

export default function Working() {
    const cardFunc = (img, title, text) => ({ img, title, text })
    const cardArr = [
        cardFunc("/asset/clip.png", "Make Schedule", "Lorem ipsum dolor sit amet adipelit sed eiusmtempor encid dolore."),
        cardFunc("/asset/chat.png", "Start Discussion", "Lorem ipsum dolor sit amet adipelit sed eiusmtempor encid dolore."),
        cardFunc("/asset/clip.png", "Enjoy Plan", "Lorem ipsum dolor sit amet adipelit sed eiusmtempor encid dolore."),
    ]
    return (
        <div className="wrap py-32">
            <Container>
                <div className="heading">
                    <span className='text-lg text-yellow-500 font-bold'>Working Process</span>
                    <div className="capitalize text-5xl mb-5">
                        <span>How MindMeld work?</span>
                    </div>
                    <span className='font-thin text-lg'>Lorem ipsum dolor sit amet consectetur adipicing elit sed do usmod tempor incididunt.enim adminim veniam</span>
                </div>

                <div className="grid lg:grid-cols-3 grid-cols-2 gap-10 mt-10">
                    {cardArr.map((i, index) => (
                        <div className="wrap flex flex-col justify-center items-center text-center gap-3">
                            <div className="img-wrap flex rounded-full bg-gray-300 p-10 hover:bg-yellow-500 trans">
                                <img src={i.img} alt="Clipboard" />
                            </div>

                            <span className='text-xl font-bold'>{i.title}</span>
                            <span className='font-thin'>{i.text}</span>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
