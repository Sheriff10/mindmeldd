import React from 'react'

export default function Button({ text, className, onClick }) {
    return (
        <button className={`${className} p-3 rounded-3xl text-white bg-yellow-500 px-5`} onClick={() => onClick()}>{text}</button>
    )
}
