import React, { useState } from 'react'
import { FaHSquare } from "react-icons/fa";
import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6';

export default function Dropdown({title, text}) {
    const [toggle, setToggle] = useState(false)

    const faqArr = [
        "What is the NFTNG Pass?",
        "What is NFTNG Vision?",
        "What utilities does the NFTNG pass have?",
        "What is the date and venue?",
    ];

    return (
        <div className="wrap w-full py-2">
            <div
                className="flex mb-4 text-light justify-between px-3 p-2 border items-center rounded-xl"
            >
                <div className="wrap w-[100%]">
                    <div className="flex text-lg justify-between items-center">
                        <span>{title}</span> {toggle ? <FaCirclePlus onClick={() => setToggle(false)} /> : <FaCircleMinus onClick={() => setToggle(true)} />}
                    </div>
                    {toggle && (
                        <div className="text-wrap text-sm bg-ng-primary-opacity text-ng-primary p-3 rounded-lg mt-3">
                            <span>{text}</span>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}
