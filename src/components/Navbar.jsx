import React from 'react'
import Brand from "../../images/brand.svg"
export default function Navbar() {
   return (
      <nav class="navbar navbar-expand-xl">
         <div class="container-fluid">
            <a class="navbar-brand" href="#">
               <img src={Brand} alt="" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
               <ul class="navbar-nav w-100">
                  <div className='d-flex flex-xl-row flex-column w-50 justify-content-around mx-xl-auto mx-start'>
                     <li class="nav-item">
                        <a class="nav-link text-dark" aria-current="page" href="#">ALL PRODUCTS</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link text-dark" aria-current="page" href="#">SOLUTIONS</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link text-dark" aria-current="page" href="#">ABOUT</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link text-dark" aria-current="page" href="#">SUPPORT</a>
                     </li>
                  </div>
                  <div className='d-flex'>
                     <li class="nav-item me-xl-0 me-3 "><i class="bi bi-search nav-link active searchBtn text-dark"></i></li>
                     <li class="nav-item"> <i class="bi bi-cart2 nav-link active marketBtn text-dark"></i></li>
                  </div>
               </ul>
            </div>
         </div>
      </nav>
   )
}
