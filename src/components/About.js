import React from 'react';
import { motion } from "framer-motion";
import OwlCarousel from 'react-owl-carousel';
import { Pagetitle } from './Pagetitle';

const About = () => {

    Pagetitle('About')

    return (
        <>
            <motion.div
                className=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
            >
                <div className="container-fluid aboutuscontainer px-0">
                    <div className='row'>
                        <div className='col-md-5'>
                            <div className="aboutimages aboutimagesmob">
                                <img src={'./images/about-us.jpg'} alt="cars" className='landingcars aboutimg' />
                            </div>
                        </div>
                        <div className='col-md-5' id="aboutuscontent">
                            <div className='formdiv'>
                                <h1>About us</h1>
                                <br /><br />
                                <p className='aboutuscontent'>Whether you want to drive one of the world’s most exquisitely engineered cars, or need a reliable budget vehicle for your next trip, Beverly Motors has them all!
                                    <br /><br />
                                    At Beverly Motors, we have an extensive luxury car collection available for rent including Ferrari, Aston Martin, Land Rover, Mercedes, and more.
                                    <br /><br />
                                    We have been operating in the UK for a long time, and our exclusive rentals have continued to increase the demand for cars that we provide on rent.
                                    <br /><br />
                                    So, give yourself the treat of a lifetime by hiring the car of your dreams!
                                    <br /><br />
                                    For a comforting experience and a smooth car hiring process, just get in touch with us!
                                </p>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <div className="aboutimagesmobileview">
                                <OwlCarousel items={1}
                                    className='owl-theme'
                                    nav={true}
                                    dots={false}
                                    loop={true}
                                    autoplay={false}
                                >
                                    <div className='item'>
                                        <img src={'./images/astonmartin.jpg'} alt="cars" className='landingcars' />
                                    </div>
                                    <div className='item'>
                                        <img src={'./images/astonmartin.jpg'} alt="cars" className='landingcars' />
                                    </div>
                                    <div className='item'>
                                        <img src={'./images/audi.jpg'} alt="cars" className='landingcars' />
                                    </div>
                                    <div className='item'>
                                        <img src={'./images/range-rover.jpg'} alt="cars" className='landingcars' />
                                    </div>
                                    <div className='item'>
                                        <img src={'./images/bentley.jpg'} alt="cars" className='landingcars' />
                                    </div>
                                    <div className='item'>
                                        <img src={'./images/porsche.jpg'} alt="cars" className='landingcars' />
                                    </div>
                                    <div className='item'>
                                        <img src={'./images/mercedes.jpg'} alt="cars" className='landingcars' />
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default About