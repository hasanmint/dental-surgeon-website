import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../images/banner/banner.jpg';


const Banner = () => {
    return (
        <><div className="container-fluid bg-body">
            <div class=" col-xxl-8 sm-gy-3">
                <div class="row flex-lg-row-reverse align-items-center  py-1 mb-5">
                    <div class=" col-sm-12 col-lg-6 shadow-sm p-3 mb-5 bg-body rounded">
                        <img src={banner} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="600" height="450" loading="lazy" />
                    </div>
                    <div class="col-lg-6">
                        <h3 className="">Welcome to my Dental Surgeon</h3>
                        <h1 class="display-5 fw-bold lh-1  mb-3">Meet <span className='text-info'>Dr. Jeremy Hill</span></h1>
                        <p>Dentist Dr. Jeremy Hill is the
                            Cosmetic dentistry (aesthetic dentistry), Veneers, Complex restorative dentistry, Smile design, Lumineers, Digital dentistry

                            Cosmetic dentistry (aesthetic dentistry), Veneers, Complex restorative dentistry, Smile design, Lumineers, Digital dentist</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" class="btn btn-info px-4 me-md-2">learn More</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>


        </>
    );
};

export default Banner;