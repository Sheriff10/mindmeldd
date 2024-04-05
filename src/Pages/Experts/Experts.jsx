import React from 'react'
import { FaSearch } from 'react-icons/fa'
import Button from '../Components/Button'
import Container from '../Components/Container'


export default function Expertise() {

    const therapists = [
        {
            name: "Sakshi Jain",
            experience: "5+ years",
            starting_price: "Rs. 800",
            best_help_for: ["Depression", "Relationships", "Stress", "Grief and Loss"],
            mode: "Online"
        },
        {
            name: "Akanksha Sharma",
            experience: "4+ years",
            starting_price: "Rs. 800",
            best_help_for: ["Relationships", "Self development", "Anxiety", "Work related", "Stress"],
            mode: "Online"
        },
        {
            name: "Fatema Saify",
            experience: "6+ years",
            starting_price: "Rs. 800",
            best_help_for: ["Depression", "Stress", "Relationships", "Anxiety", "Other"],
            mode: "Online"
        },
        {
            name: "Vinamra Vasudeva",
            experience: "2+ years",
            starting_price: "Rs. 800",
            best_help_for: ["Stress", "Relationships", "Self development", "Anxiety", "Work related"],
            mode: "Online"
        },
        {
            name: "Vahbiz Kerawalla",
            experience: "7+ years",
            starting_price: "Rs. 800",
            best_help_for: ["Depression", "Stress", "Grief and Loss", "Relationships", "Anxiety"],
            mode: "Online"
        },
        {
            name: "Zoha Merchant",
            experience: "8+ years",
            starting_price: "Rs. 800",
            best_help_for: ["Depression", "Stress", "Grief and Loss", "Relationships", "Self development"],
            mode: "Online"
        },
        {
            name: "Rahul Verma",
            experience: "4+ years",
            starting_price: "Rs. 800",
            best_help_for: ["Stress", "Grief and Loss", "Relationships", "Self development", "Anxiety"],
            mode: "Online"
        },
        {
            name: "Maria Sonali",
            experience: "4+ years",
            starting_price: "Rs. 800",
            best_help_for: ["Depression", "Stress", "Relationships", "Self development", "Anxiety"],
            mode: "Online"
        },
        {
            name: "Simran Bathija",
            experience: "2+ years",
            starting_price: "Rs. 800",
            best_help_for: ["Anxiety", "Self development", "Sleep help", "Other", "Depression"],
            mode: "Online"
        },
        {
            name: "Ashna Sharma",
            experience: "2+ years",
            starting_price: "Rs. 800",
            best_help_for: ["Depression", "Stress", "Relationships", "Self development", "Anxiety"],
            mode: "Online"
        }
    ];

    const img = [
        "https://adapt-storage.s3-ap-south-1.amazonaws.com/therapists/images/117-scaled_1000021080-1704178661637.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARKWRUYDXCEITAEMU%2F20240404%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240404T171209Z&X-Amz-Expires=7200&X-Amz-Signature=7ae280483b52f943eff5dccc29eb77ba6cb9bf35b13251f38a893382c653fc65&X-Amz-SignedHeaders=host",
        "https://adapt-storage.s3-ap-south-1.amazonaws.com/therapists/images/93-image_picker_83D14826-A809-4535-988D-49EAFFF35692-18316-00000B5BEBB45BEB-1699388261348.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARKWRUYDXCEITAEMU%2F20240404%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240404T171209Z&X-Amz-Expires=7200&X-Amz-Signature=03ef53a604afdea4019bfb49c8f975bac23e81f8e3d2a680b3ed6fd6b7585c21&X-Amz-SignedHeaders=host",
        "https://adapt-storage.s3-ap-south-1.amazonaws.com/therapists/images/107-VinamraPhoto%28MyndBlue%29-1695205115448.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARKWRUYDXCEITAEMU%2F20240404%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240404T171209Z&X-Amz-Expires=7200&X-Amz-Signature=4dd5b36f2f8bff22d3107c1f3c4f0345c56a21958d4c855b2464971eb36f77ec&X-Amz-SignedHeaders=host",
        "https://adapt-storage.s3-ap-south-1.amazonaws.com/therapists/images/96-image_picker_B688A45B-73D7-46C4-8AAB-7302AA42767C-7635-000011C1BC35D7C3-1694261231580.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARKWRUYDXCEITAEMU%2F20240404%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240404T171209Z&X-Amz-Expires=7200&X-Amz-Signature=dbdbd6055ee3db8d42cdf6b568120fa80d4b288b4ce4ce12998400d955d53135&X-Amz-SignedHeaders=host",
        "https://adapt-storage.s3-ap-south-1.amazonaws.com/therapists/images/95-206148-1694086831725.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARKWRUYDXCEITAEMU%2F20240404%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240404T171209Z&X-Amz-Expires=7200&X-Amz-Signature=68fbc76281b4419c345d3e329f676b2117ef0af8b779b32324d1065a402ec160&X-Amz-SignedHeaders=host",
        "https://adapt-storage.s3-ap-south-1.amazonaws.com/therapists/images/85-scaled_20210519_163117_05-1694493022409.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARKWRUYDXCEITAEMU%2F20240404%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240404T171209Z&X-Amz-Expires=7200&X-Amz-Signature=9fb5fc52c1f17d84c2542050c20b2a7e922dda8c1c483fd9c3c35b2f31f7ce98&X-Amz-SignedHeaders=host",
        "https://adapt-storage.s3-ap-south-1.amazonaws.com/therapists/images/116-image_picker_1AC12423-90A1-4DE1-835C-797C4C0F4338-14388-0000026353E6825E-1702884896064.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARKWRUYDXCEITAEMU%2F20240404%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240404T171209Z&X-Amz-Expires=7200&X-Amz-Signature=13a9965c19ca28c17429490900e0dd7a67a815736522f7ed6a852f24690d956b&X-Amz-SignedHeaders=host",
        "https://adapt-storage.s3-ap-south-1.amazonaws.com/therapists/images/96-image_picker_B688A45B-73D7-46C4-8AAB-7302AA42767C-7635-000011C1BC35D7C3-1694261231580.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARKWRUYDXCEITAEMU%2F20240404%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240404T171209Z&X-Amz-Expires=7200&X-Amz-Signature=dbdbd6055ee3db8d42cdf6b568120fa80d4b288b4ce4ce12998400d955d53135&X-Amz-SignedHeaders=host",
        "https://adapt-storage.s3-ap-south-1.amazonaws.com/therapists/images/116-image_picker_1AC12423-90A1-4DE1-835C-797C4C0F4338-14388-0000026353E6825E-1702884896064.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARKWRUYDXCEITAEMU%2F20240404%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240404T171209Z&X-Amz-Expires=7200&X-Amz-Signature=13a9965c19ca28c17429490900e0dd7a67a815736522f7ed6a852f24690d956b&X-Amz-SignedHeaders=host",
        "https://adapt-storage.s3-ap-south-1.amazonaws.com/therapists/images/85-scaled_20210519_163117_05-1694493022409.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARKWRUYDXCEITAEMU%2F20240404%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240404T171209Z&X-Amz-Expires=7200&X-Amz-Signature=9fb5fc52c1f17d84c2542050c20b2a7e922dda8c1c483fd9c3c35b2f31f7ce98&X-Amz-SignedHeaders=host",
        "https://adapt-storage.s3-ap-south-1.amazonaws.com/therapists/images/95-206148-1694086831725.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARKWRUYDXCEITAEMU%2F20240404%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240404T171209Z&X-Amz-Expires=7200&X-Amz-Signature=68fbc76281b4419c345d3e329f676b2117ef0af8b779b32324d1065a402ec160&X-Amz-SignedHeaders=host",
    ]

    return (
        <div className="wrap py-32">
            <div className="flex justify-center">
                <div className="search-box relative flex items-center">
                    <div className="absolute ms-3 text-xl"><FaSearch /></div>
                    <input type="text" className='p-3 rounded-3xl border-[1px] border-black ps-10' placeholder='Search Location' />
                </div>
            </div>

            <Container>
                <div className="grid gap-10 lg:grid-cols-2 mt-16">
                    {therapists.map((i, index) => (
                        <div className="wrap bg-gray-100 p-5 lg:p-8 rounded-3xl" key={index}>
                            <div className="img-rap">
                                <div className=" rounded-full h-40 w-40 mx-auto bg-black overflow-hidden">
                                <img src={img[index]} alt="Expert" className='mx-auto relative h-40 w-40' />
                                </div>
                                <div className="text-wrap text-2xl text-center mt-2 font-extrabold">
                                    <span><b>{i.name}</b></span>
                                </div>
                            </div>


                            <div className="text-wrap leading-9 mt-5">
                                <span> Experience: {i.experience} </span> <br />
                                <span> Starting at {i.starting_price} </span> <br />
                                <span> Best help for: {i.best_help_for.map((help, index) => (
                                    <span key={index}> {help },</span>
                                ))} </span> <br /> <br />
                                <span>Mode: Online</span>
                            </div>

                            <div className="btn-wrap flex flex-wrap justify-center items-center md:justify-start gap-5">
                                <Button text={"Book a session"} />
                                <Button text={"View Details"} />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
