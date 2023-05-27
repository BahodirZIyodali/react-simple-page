import React from 'react';
import "./carousel.css"
import Image from "../../../images/photo1.svg";
import Image2 from "../../../images/photo12.svg";
import Image3 from "../../../images/photo14.svg";


export default function Carousel() {
    return (
        <div id="carouselBasicExample" class="carousel carousel-dark slide carousel-fade" data-mdb-ride="carousel">
            <div class="carousel-indicators">
            <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="0"
      className="active w-25"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
      className='w-25'
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
      className='w-25'
    ></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className="carousel_wrapper d-flex h-100">
                    <div className="textContent col-xl-6 col-12 h-100 text-start px-5 d-flex flex-column justify-content-center align-items-start">
                        <h2 className='carouselText'>The new phones are here take a look.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.</p>
                        <button className='btn btn-outline-dark'>Explore</button>
                    </div>
                    <img className="imgContent col-6 d-xl-block d-none h-100" src={Image}/>
                    </div>
                </div>
                <div class="carousel-item">
                <div className="carousel_wrapper d-flex h-100">
                    <div className="textContent col-xl-6 col-12 h-100 text-start px-5 d-flex flex-column justify-content-center align-items-start">
                        <h2 className='carouselText'>The new laptops are here take a look.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.</p>
                        <button className='btn btn-outline-dark'>Explore</button>
                    </div>
                    <img className="imgContent col-6 d-xl-block d-none h-100" src={Image2}/>
                    </div>
                </div>
                <div class="carousel-item">
                <div className="carousel_wrapper d-flex h-100">
                    <div className="textContent col-xl-6 col-12 h-100 text-start px-5 d-flex flex-column justify-content-center align-items-start">
                        <h2 className='carouselText'>The new devices are here take a look.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.</p>
                        <button className='btn btn-outline-dark'>Explore</button>
                    </div>
                    <img className="imgContent col-6 d-xl-block d-none h-100" src={Image3}/>
                    </div>
                </div>
            </div>
            <button style={{width:"4rem"}} class="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button style={{width:"4rem"}} class="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
        </div>
    )
}
