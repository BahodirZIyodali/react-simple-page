import React from 'react'
import Image13 from "../../../images/photo13.svg";
import ideas from "./ideas.css"
export default function Ideas() {
  return (
    <div className='ideas w-100 text-center py-4'>
    <h3 className='saveOnText'>Ideas have a place here</h3>
    <p>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
    <div className="ideasContent d-flex flex-xl-row flex-column mt-xl-5 mt-2">
        <img src={Image13} alt="img" />
        <div className="ideasText ps-4 text-start">
            <p className="ideasText">We Make It Easy To Find The Great Design Talent, Easier...</p>
            <p className="ideasText">Road Design Handbook For The International Road...</p>
            <p className="ideasText">The Best Kept Secrets About Creative People</p>
            <p className="ideasText">We Make It Easy To Find The Great Design Talent, Easier...</p>
        </div>
    </div>
    <h4 className='mt-4'>See All <i class="bi bi-arrow-up-right-square"></i></h4>
</div>
  )
}
