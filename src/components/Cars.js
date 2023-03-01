import React from 'react';
import { motion } from "framer-motion"
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import { Pagetitle } from './Pagetitle';

const Cars = () => {
    Pagetitle('Cars')

    return (
        <>
            <motion.div
                className=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
            >
                <section id='carssection'>
                    <div className='container carscontainer'>

                        <OwlCarousel items={1}
                            className='owl-theme'
                            nav={true}
                            dots={false}
                            dotData='true'
                            mouseDrag={false}
                            pagination='true'
                            dotsEach={3}
                            loop={true}
                            autoplay={false}
                            smartSpeed='1000'
                        >

                            <div className='item caritem' data-dot="<span>01</span>">
                                <Link to={'/allcars/' + 'aston-martin'} >
                                    <div className='carnumbercategory'>
                                        <h1>O1</h1>
                                    </div>
                                    <div className='carcontent'>
                                        <div className='carscategory'>
                                            <h1 className='slidercontenthead'>ASTON MARTIN</h1>
                                            <p className='slidercontentpara'>Known for its class, Aston Martin is amongst the world’s top luxury car brands. All Aston Martin models have an exquisite elegance of their own that cannot be compared with other automobiles. </p>
                                        </div>
                                        <div className='carbox'>
                                            <img src={'./images/astonmartin.jpg'} alt="cars" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='item caritem' data-dot="<span>02</span>">
                                <Link to={'/allcars/' + 'audi'} >
                                    <div className='carnumbercategory'>
                                        <h1>O2</h1>
                                    </div>
                                    <div className='carcontent'>
                                        <div className='carscategory'>
                                            <h1 className='slidercontenthead'>AUDI</h1>
                                            <p className='slidercontentpara'>Take a glimpse into the bright future of automotive mobility with Audi. Known for the sophistication, performance, and comfort of its cars, Audi has long been trusted as one of the most luxurious car brands in the world.</p>
                                        </div>
                                        <div className='carbox'>
                                            <img src={'./images/audi.jpg'} alt="cars" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='item caritem' data-dot="<span>03</span>">
                                <Link to={'/allcars/' + 'land-rover'} >
                                    <div className='carnumbercategory'>
                                        <h1>O3</h1>
                                    </div>
                                    <div className='carcontent'>
                                        <div className='carscategory'>
                                            <h1 className='slidercontenthead'>LAND ROVER</h1>
                                            <p className='slidercontentpara'>While manufacturing Land Rover vehicles, luxury, performance, and capability are taken to a whole new dimension. This is the reason why these cars are distinct and royal.</p>
                                        </div>
                                        <div className='carbox'>
                                            <img src={'./images/range-rover.jpg'} alt="cars" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='item caritem' data-dot="<span>04</span>">
                                <Link to={'/allcars/' + 'bentley'} >
                                    <div className='carnumbercategory'>
                                        <h1>O4</h1>
                                    </div>
                                    <div className='carcontent'>
                                        <div className='carscategory'>
                                            <h1 className='slidercontenthead'>BENTLEY</h1>
                                            <p className='slidercontentpara'>Building cars for over a century, Bentley has manufactured stunning Sedans, SUVs, and Crossovers. This luxury brand’s entire car range offers incredible well-being and comfort.</p>
                                        </div>
                                        <div className='carbox'>
                                            <img src={'./images/bentley.jpg'} alt="cars" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='item caritem' data-dot="<span>05</span>">
                                <Link to={'/allcars/' + 'porsche'} >
                                    <div className='carnumbercategory'>
                                        <h1>O5</h1>
                                    </div>
                                    <div className='carcontent'>
                                        <div className='carscategory'>
                                            <h1 className='slidercontenthead'>PORSCHE</h1>
                                            <p className='slidercontentpara'>Porsche is much more than a car brand, and likewise, its cars are more than just sportscars. They are classy, comfortable, unique, powerful, and a treat for the eyes.</p>
                                        </div>
                                        <div className='carbox'>
                                            <img src={'./images/porsche.jpg'} alt="cars" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='item caritem' data-dot="<span>06</span>">
                                <Link to={'/allcars/' + 'mercedes'} >
                                    <div className='carnumbercategory'>
                                        <h1>O6</h1>
                                    </div>
                                    <div className='carcontent'>
                                        <div className='carscategory'>
                                            <h1 className='slidercontenthead'>MERCEDES</h1>
                                            <p className='slidercontentpara'>Mercedes can be regarded as the king of car brands!</p>
                                        </div>
                                        <div className='carbox'>
                                            <img src={'./images/mercedes.jpg'} alt="cars" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='item caritem' data-dot="<span>06</span>">
                                <Link to={'/allcars/' + 'ferrari'} >
                                    <div className='carnumbercategory'>
                                        <h1>O7</h1>
                                    </div>
                                    <div className='carcontent'>
                                        <div className='carscategory'>
                                            <h1 className='slidercontenthead'>FERRARI </h1>
                                            <p className='slidercontentpara'>Ferraris are what dreams are made of. Fast, jaw-droppingly amazing, and highly exclusive, these Italian supercars push the boundaries of performance and take luxury to a whole new level!</p>
                                        </div>
                                        <div className='carbox'>
                                            <img src={'./images/pexels-photo-9831580.jpeg'} alt="cars" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='item caritem' data-dot="<span>06</span>">
                                <Link to={'/allcars/' + 'jaguar'} >
                                    <div className='carnumbercategory'>
                                        <h1>O8</h1>
                                    </div>
                                    <div className='carcontent'>
                                        <div className='carscategory'>
                                            <h1 className='slidercontenthead'>JAGUAR</h1>
                                            <p className='slidercontentpara'>For more than 100 years, Jaguar has been producing cars that aim to push boundaries and evoke emotion. All Jaguars look beautiful and sound incredible.</p>
                                        </div>
                                        <div className='carbox'>
                                            <img src={'./images/pexels-photo-93652.jpeg'} alt="cars" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='item caritem' data-dot="<span>06</span>">
                                <Link to={'/allcars/' + 'mclaren'} >
                                    <div className='carnumbercategory'>
                                        <h1>O9</h1>
                                    </div>
                                    <div className='carcontent'>
                                        <div className='carscategory'>
                                            <h1 className='slidercontenthead'>MCLAREN</h1>
                                            <p className='slidercontentpara'>After building a technological masterpiece – the world's first carbon fibre road car, the world's fastest production car, and the fastest naturally aspirated road car ever built, McLaren took off as an elite car brand. </p>
                                        </div>
                                        <div className='carbox'>
                                            <img src={'./images/pexels-photo-12365929.jpeg'} alt="cars" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </OwlCarousel>
                    </div>
                </section>
            </motion.div>
        </>
    )
}

export default Cars