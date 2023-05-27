import React from 'react'
import BestSellingCarousel from "../Carousel/BestSellingCarousel.jsx"
import "./bestSelling.css"
export default function BestSelling() {
    return (
        <div className='saveOn w-100 text-center py-4'>
            <h3 className='saveOnText'>See the best around here.</h3>
            <p>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
            <BestSellingCarousel/>
        </div>
    )
}
