import React from "react";
import popular1 from "../../../../../public/popular1.webp";
import popular2 from "../../../../../public/popular2.webp";
import popular3 from "../../../../../public/popular3.webp";
import popular4 from "../../../../../public/popular4.webp";
import popular5 from "../../../../../public/popular5.webp";
import popular6 from "../../../../../public/popular6.webp";
import popular7 from "../../../../../public/popular7.webp";
import popular8 from "../../../../../public/popular8.webp";
import { Button } from "flowbite-react";

let sub = [
    {
        image: popular1,
        title: "Casual",
        shop: "Shop Now",
    },
    {
        image: popular2,
        title: "College",
        shop: "Shop Now",
    },
    {
        image: popular3,
        title: "School",
        shop: "Shop Now",
    },
    {
        image: popular4,
        title: "Professional",
        shop: "Shop Now",
    },
    {
        image: popular5,
        title: "Travel",
        shop: "Shop Now",
    },
    {
        image: popular6,
        title: "Sports",
        shop: "Shop Now",
    },
    {
        image: popular7,
        title: "Mask and Accessories",
        shop: "Shop Now",
    },
    {
        image: popular8,
        title: "Messenger",
        shop: "Shop Now",
    },
]

export default function Pop() {
    return (
        <>
            <h2 className="ps-10 font-normal">POPULAR</h2>
            <div className="grid grid-cols-4">
                {sub?.map((e, i) => {
                    return (
                        <div key={i}>
                            <div className='overflow-hidden p-3'>
                                <img className='hover:scale-110 transition-all duration-700 rounded-full h-48 m-auto relative' src={e?.image} alt={e?.title} />
                            </div>
                            <div className="text-center pb-6">{e?.title}</div>
                            <Button className="m-auto bg-red-600 hover:!bg-black my-4">{e?.shop}</Button>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
