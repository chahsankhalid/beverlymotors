import React from 'react';
import { motion } from "framer-motion";
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Pagetitle } from './Pagetitle';
import Button from 'react-bootstrap/Button';
import { IoIosArrowForward } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let owl_carousel = require('owl.carousel');
window.fn = owl_carousel;

const Home = () => {
  Pagetitle('Home')

  return (
    <>
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <section id='mainsection'>
          <OwlCarousel items={1}
            className='owl-theme'
            nav={true}
            dots={false}
            loop={true}
            autoplay={false}
            mouseDrag={false}
            smartSpeed='1000'
          >
            <div className='item'>
              <video autoPlay loop muted playsInline className="back-video">
                <div className='landingcarsoverlay'></div>
                <source src={'./videos/main.mp4'} type="video/mp4" />
              </video>
              <div className='videocontet'>
                <h1 className='slidercontenthead'>Hire Luxury Cars at Affordable Rentals </h1>
              </div>
            </div>
            <div className='item'>
              <img src={'./images/mclaren.jpg'} alt="cars" className='landingcars' />
              <div className='landingcarsoverlay'></div>
              <div className='videocontet videosectioncontent'>
                <h1 className='slidercontenthead'>MCLAREN</h1>
                <p className='slidercontentpara'>After building a technological masterpiece – the world's first carbon fibre road car, the world's fastest production car, and the fastest naturally aspirated road car ever built, McLaren took off as an elite car brand.
                  <br /><br />
                  Adorably elegant to look at and exhilaratingly quick, the record-slaying McLaren F1 changed super car history.
                  <br /><br />
                  Is it your dream to drive it? We’ll make it happen!
                </p>
                <Link to={'/allcars/' + 'mclaren'} ><Button variant="outline-secondary" className="booknow">Book Now<span className='submit'><IoIosArrowForward /></span></Button></Link>
              </div>
            </div>
            <div className='item'>
              <img src={'./images/bentley.jpg'} alt="cars" className='landingcars' />
              <div className='landingcarsoverlay'></div>
              <div className='videocontet videosectioncontent'>
                <h1 className='slidercontenthead'>BENTLEY</h1>
                <p className='slidercontentpara'>Building cars for over a century, Bentley has manufactured stunning Sedans, SUVs, and Crossovers. This luxury brand’s entire car range offers incredible well-being and comfort.
                  <br /><br />
                  Make your outing a special one by riding one of these amazing cars!
                  <br /><br />
                  Select from our range of exquisite Bentley cars now!
                </p>
                <Link to={'/allcars/' + 'bentley'} ><Button variant="outline-secondary" className="booknow">Let Me Choose<span className='submit'><IoIosArrowForward /></span></Button></Link>
              </div>
            </div>
            <div className='item'>
              <img src={'./images/range-rover.jpg'} alt="cars" className='landingcars' />
              <div className='landingcarsoverlay'></div>
              <div className='videocontet videosectioncontent'>
                <h1 className='slidercontenthead'>LAND ROVER</h1>
                <p className='slidercontentpara'>While manufacturing Land Rover vehicles, luxury, performance, and capability are taken to a whole new dimension. This is the reason why these cars are distinct and royal.
                  <br /><br />
                  Pick from our vast range of Land Rover luxury SUVs.
                </p>
                <Link to={'/allcars/' + 'land-rover'}><Button variant="outline-secondary" className="booknow">Let Me Choose<span className='submit'><IoIosArrowForward /></span></Button></Link>
              </div>
            </div>

            <div className='item'>
              <img src={'./images/astonmartin.jpg'} alt="cars" className='landingcars' />
              <div className='landingcarsoverlay'></div>
              <div className='videocontet videosectioncontent'>
                <h1 className='slidercontenthead'>ASTON MARTIN</h1>
                <p className='slidercontentpara'>Known for its class, Aston Martin is amongst the world’s top luxury car brands. All Aston Martin models have an exquisite elegance of their own that cannot be compared with other automobiles.
                  <br /><br />To make your journeys comforting and luxurious select from one of our Aston Martins available for rent.
                </p>
                <Link to={'/allcars/' + 'aston-martin'}><Button variant="outline-secondary" className="booknow">Let Me Choose<span className='submit'><IoIosArrowForward /></span></Button></Link>
              </div>
            </div>
            <div className='item'>
              <img src={'./images/audi.jpg'} alt="cars" className='landingcars' />
              <div className='landingcarsoverlay'></div>
              <div className='videocontet videosectioncontent'>
                <h1 className='slidercontenthead'>AUDI</h1>
                <p className='slidercontentpara'>Take a glimpse into the bright future of automotive mobility with Audi.<br /> Known for the sophistication, performance, and comfort of its cars, Audi has long been trusted as one of the most luxurious car brands in the world.
                  <br /><br />Find a complete range of the latest Audi models at Beverly!<br /><br />Want to book one on rent?
                </p>
                <Link to={'/allcars/' + 'audi'}><Button variant="outline-secondary" className="booknow">Let Me Choose<span className='submit'><IoIosArrowForward /></span></Button></Link>
              </div>
            </div>
            <div className='item'>
              <img src={'./images/ferrari.png'} alt="cars" className='landingcars' />
              <div className='landingcarsoverlay'></div>
              <div className='videocontet videosectioncontent'>
                <h1 className='slidercontenthead'>FERRARI</h1>
                <p className='slidercontentpara'>Ferraris are what dreams are made of. Fast, jaw-droppingly amazing, and highly exclusive, these Italian supercars push the boundaries of performance and take luxury to a whole new level!
                  <br /><br />
                  If driving a Ferrari was your dream! Here’s the time to make it come true.
                  <br /><br />
                  Get one at a special rental!
                </p>
                <Link to={'/allcars/' + 'ferrari'}><Button variant="outline-secondary" className="booknow">Let Me Choose<span className='submit'><IoIosArrowForward /></span></Button></Link>
              </div>
            </div>

            <div className='item'>
              <img src={'./images/porsche.jpg'} alt="cars" className='landingcars' />
              <div className='landingcarsoverlay'></div>
              <div className='videocontet videosectioncontent'>
                <h1 className='slidercontenthead'>PORSCHE</h1>
                <p className='slidercontentpara'>Porsche is much more than a car brand, and likewise, its cars are more than just sportscars. They are classy, comfortable, unique, powerful, and a treat for the eyes.
                  <br /><br />
                  At Beverly, we have a complete range of these automotive masterpieces available for rent.
                </p>
                <Link to={'/allcars/' + 'porsche'}><Button variant="outline-secondary" className="booknow">Let Me Choose<span className='submit'><IoIosArrowForward /></span></Button></Link>
              </div>
            </div>

            <div className='item'>
              <img src={'./images/jaguar.jpg'} alt="cars" className='landingcars' />
              <div className='landingcarsoverlay'></div>
              <div className='videocontet videosectioncontent'>
                <h1 className='slidercontenthead'>JAGUAR</h1>
                <p className='slidercontentpara'>For more than 100 years, Jaguar has been producing cars that aim to push boundaries and evoke emotion. All Jaguars look beautiful and sound incredible.
                  <br /><br />
                  Want one on rent? We’ll provide!
                </p>
                <Link to={'/allcars/' + 'jaguar'}><Button variant="outline-secondary" className="booknow">Let Me Choose<span className='submit'><IoIosArrowForward /></span></Button></Link>
              </div>
            </div>
            <div className='item'>
              <img src={'./images/mercedes.jpg'} alt="cars" className='landingcars' />
              <div className='landingcarsoverlay'></div>
              <div className='videocontet videosectioncontent'>
                <h1 className='slidercontenthead'>MERCEDES</h1>
                <p className='slidercontentpara'>Mercedes can be regarded as the king of car brands!
                  <br /><br />
                  Whenever a car is made by Mercedes, it promises class, luxury, elegance, performance, and unmatched comfort.
                  <br /><br />
                  If you need a Mercedes on rent, just let us know!
                </p>
                <Link to={'/allcars/' + 'mercedes'}><Button variant="outline-secondary" className="booknow">Let Me Choose<span className='submit'><IoIosArrowForward /></span></Button></Link>
              </div>
            </div>
          </OwlCarousel>
        </section>
      </motion.div>
    </>
  )
}

export default Home