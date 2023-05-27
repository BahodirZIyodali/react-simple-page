import React from 'react'
import mdb from 'mdb-ui-kit';
import Brand from "../../images/brand.svg"
export default function Footer() {
    return (
        <footer class="text-center text-lg-start text-muted mt-5">
            <section class="">
                <div class="container text-center text-md-start">
                    <div class="row mt-3">
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                <img src={Brand} alt="brand" />
                            </h6>
                            <p>
                                Sign up for texts to be notified about our best offers on the perfect gifts.
                            </p>
                        </div>
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                All products
                            </h6> 
                            <p>
                                <a href="#!" class="text-reset text-decoration-none">Phones</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset text-decoration-none" >Watch</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset text-decoration-none">Tablet</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset text-decoration-none">Laptops</a>
                            </p>
                        </div>
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Company
                            </h6>
                            <p>
                                <a href="#!" class="text-reset text-decoration-none">About</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset text-decoration-none">Support</a>
                            </p>
                        </div>
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Support
                            </h6>
                            <p>
                                <a href="#!" class="text-reset text-decoration-none">Style Guide</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset text-decoration-none">Licensing</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset text-decoration-none">Change Log</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset text-decoration-none">Contact</a>
                            </p>
                        </div>
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Follow Us
                            </h6>
                            <p>
                                <a href="#!" class="text-reset text-decoration-none">Instagram</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset text-decoration-none">Facebook</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset text-decoration-none">LinkedIn</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset text-decoration-none ">Youtube</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div class="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.01)",borderTop:"1px solid rgba(0, 0, 0, 0.105)" }}>
                © 2021 Copyright:
                <a class="text-reset fw-bold ms-2" href="https://t.me/akhmedov_mailbox">Altruist</a>
            </div>
        </footer>
    )
}
