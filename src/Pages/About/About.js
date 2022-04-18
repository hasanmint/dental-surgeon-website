import React from 'react';
import aboutme from '../../images/about-me.png';

const About = () => {
    return (
        <><div className="container-fluid bg-body">
            <div class=" container col-xxl-8 sm-gy-3 mt-5">
                <div class="row flex-lg-row-reverse align-items-center  py-1 mb-5">
                    <div class=" col-sm-12 col-lg-6">
                        <img src={aboutme} class="d-block mx-lg-auto img-fluid shadow-sm p-3 mb-5 bg-body rounded-circle " alt="Bootstrap Themes" width="350" height="300" loading="lazy" />
                    </div>
                    <div class="col-lg-6">
                        <h4 className="">Mission 2022 To be Professional Web Developer</h4>
                        <h1 class="display-5 fw-bold lh-1  mb-3"> <span className='text-info'>About Me</span></h1>
                        <p>Hi , I'm Md. Hasan Ali. As my Target Stay Focused on become a Professional Full-Stack Web Developer.Get the skills to work with both back-end and front-end technologies.My goals and dream to build professional websites and learn advanced topics.To full fill my goal i will give me best effort with hardwork to learn.</p>
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

export default About;