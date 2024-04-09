import React from 'react'
import bgImage from '../../../../../public/bg.webp'
import fitpack from '../../../../../public/Fitpack.webp'
import rumble from '../../../../../public/rumble.webp'
import Pop from './Pop'

export default function Home() {
    return (
        <>
            {/*  */}
            <div>
                <img src={bgImage} alt="" />
            </div>

            {/*  */}
            <div className='flex container gap-4 py-5'>
                <div className='overflow-hidden'>
                    <img src={fitpack} alt="" className='hover:scale-110 transition-all duration-700' />
                </div>
                <div className='overflow-hidden'>
                    <img src={rumble} alt="" className='hover:scale-110 transition-all duration-700' />
                </div>
            </div>
            {/*  */}
            <Pop />

        </>
    )
}
