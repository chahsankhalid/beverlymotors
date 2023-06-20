import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import $ from 'jquery';
import { useParams, useNavigate } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import { Pagetitle } from './Pagetitle';

const Allcars = () => {
    Pagetitle('All Cars')
    const navigate = useNavigate();

    const [cars, setCars] = useState();
    const params = useParams();
    const category = params.id;

    function showDetail(car, img, interior, exterior, age, mileage) {
        document.getElementById("detailcontainer").style.visibility = 'visible';
        document.getElementById("detailcontainer").style.opacity = '1';
        document.getElementById('introMain').src = img
        document.getElementById('interiorImage').src = interior
        document.getElementById('exteriorImage').src = exterior
        document.getElementById('age').innerHTML = age
        document.getElementById('mileage').innerHTML = mileage
        // document.getElementById('rental').innerHTML = rental
    }

    useEffect(() => {
        console.log('pathcheck' , category)
        setCars(category);
    })


    let toTop = () => {
        let bodyoverlay = document.getElementById("bodyoverlay");
        bodyoverlay.classList.add('active');
        document.getElementById('detailcontainer').style.transform = 'translateY(10vh)';
        var scrollTop = $('#detailcontainer').scrollTop();
        if (scrollTop <= 0) {
            document.getElementById('detailcontainer').style.transform = 'translateY(30vh)';
            document.getElementById("detailcontainer").style.opacity = '0';
            document.getElementById("detailcontainer").style.visibility = 'hidden';
        } else {

        }
    }
    let handleProceed = (name, path) => {
        navigate(`/rentalinquiry/${name}/${path}`);
    }

    const Testcars = () => {
        if (cars === 'aston-martin') {
            return (
                <>
                    <div className='container-fluid carsintro'>
                        <div className="row">
                            <OwlCarousel items={1}
                                className='owl-theme'
                                nav={true}
                                dots={false}
                                dotData='true'
                                pagination='true'
                                loop={true}
                                autoplay={false}
                                smartSpeed='1000'
                                mouseDrag={false}
                            >
                                <div class='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1 >O1</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>DB11 Volante</h1>
                                                <p>The new DB11 Volante sets new standards of performance, innovation, engineering and style to create the definitive open-top Sports GT.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button onClick={() => handleProceed('DB11-Volante', 'model_three_quarters_photo_753.png')} className='btn btn-outline-secondary hirebtn'>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('db11-volante', '/images/pexels-photo-2812839.jpeg', '/images/aston-martin-interior-black-1-1200x674.jpg', '/images/model_side_photo_753.png', '28 Years', '100 per day', '£750')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/model_three_quarters_photo_753.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O2</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>DB11</h1>
                                                <p>DB11 brings you pure engineering brilliance, combined with unexpected practicality. Equipped with twin-turbo engines, it effortlessly delivers 503bhp and 630bhp worth of breathtaking performance.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('DB11', 'model_three_quarters_photo_624.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('DB11', '/images/db11blackintro.jpg', '/images/New-2019-Aston-Martin-DB11-V8-VOLANTE--CALL-TO-ORDER-_edited.jpg', '/images/db11exerior.png', '28+ Years', '100 per day', '£750')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/model_three_quarters_photo_624.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O3</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>Vantage Convertible</h1>
                                                <p>The Vantage Roadster is a two-seat, rear-wheel-drive convertible with seemingly endless power and a thrill factor that's off the charts.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('Vantage Convertible', 'convertible.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('Vantage Convertible', '/images/vcintro.jpg', '/images/db11interiormain.jpg', '/images/convertible.png', '28+ Years', '100 per day', '£750')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/convertible.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>

                        </div>
                    </div>
                </>
            )
        }
        if (cars === 'audi') {
            return (
                <>
                    <div className='container-fluid carsintro'>
                        <div className="row">
                            <OwlCarousel items={1}
                                className='owl-theme'
                                nav={true}
                                dots={false}
                                dotData='true'
                                pagination='true'
                                loop={true}
                                autoplay={false}
                                smartSpeed='1000'
                                mouseDrag={false}
                            >
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O1</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>RS5 Sportback</h1>
                                                <p>The RS5 charming powertrain and Quattro all-wheel-drive system help deliver zealous acceleration and enthusiastic responses.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('RS5 Sportback', '13351_st0640_046.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('dRS5-Sportback', '/images/rs5into.jpg', '/images/rs5inter.jpg', '/images/rs5exterior.png', '28+ Years', '100 per day', '£280')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/13351_st0640_046.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O2</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>A8</h1>
                                                <p>The Audi A8 is a full-size luxury sedan with sharpened design and innovative technologies. Audi is ensuring the sporty elegance and increased presence of the A8 and is working out the confident and progressive character of the active luxury beater.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('A8', '14923_st0640_046.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('A8', '/images/a8into.jpg', '/images/a8inter.jpeg', '/images/a8.png', '28+ Years', '100 per day', '£225')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/14923_st0640_046.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O3</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>Q7 Tdi S Line</h1>
                                                <p>Size matters was Audi’s philosophy when it came to developing its first off-roader. The Q7 is massive; it has an abundant space, a vast length and width with a wheelbase of more than three meters.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('Q7 Tdi S Line', 'model_three_quarters_photo_241.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('Q7-Tdi-S-Line', '/images/qtintro.jpg', '/images/qinterior.jpeg', '/images/model_three_quarters_photo_241.png', '28+ Years', '100 per day', '£185')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/model_three_quarters_photo_241.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O4</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>A6 Tdi S Line</h1>
                                                <p>The A6 is one of the oldest models in Audi's line-up, but its strong diesel engine and four-wheel drive grip still make it a contender, with soft-touch materials and a simple design set off by brilliant build quality and classy detailing.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('A6 Tdi S Line', 'model_three_quarters_photo_221.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('A6', '/images/agintro.jpg', '/images/a6inter.jpg', '/images/a6exter.png', '28+ Years', '100 per day', '£110')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/model_three_quarters_photo_221.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O5</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>RS Q8</h1>
                                                <p>The Q8 features full-laser headlamps and taillamps, the first-ever in a crossover or SUV. The RS Q8 has a twin-turbocharged 4.0-liter V-8 engine that produces 590 lb-ft of torque and 591 horsepower, making it one of the fastest SUVs.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('RS Q8', '15009_st0640_046.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('RS Q8', '/images/rsq8intro.webp', '/images/rsq8inter.jpg', '/images/15009_st0640_046.png', '28+ Years', '100 per day', '£350')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/15009_st0640_046.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O6</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>R8</h1>
                                                <p>The engine, the cabin design, the gearbox, the quality, the noise, the refinement – you could tell the R8 has been facelifted.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('R8', 'r8.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('R8', '/images/r8intro.jpg', '/images/r8inter.jpg', '/images/r8exter.png', '28+ Years', '100 per day', '£600')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/r8.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </>
            )
        }
        if (cars === 'land-rover') {
            return (
                <>
                    <div className='container-fluid carsintro'>
                        <div className="row">
                            <OwlCarousel items={1}
                                className='owl-theme'
                                nav={true}
                                dots={false}
                                dotData='true'
                                pagination='true'
                                loop={true}
                                autoplay={false}
                                smartSpeed='1000'
                                mouseDrag={false}
                            >
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O1</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>Discovery</h1>
                                                <p>A SUV that rightfully ignores sportiness and focuses on flexibility, comfort and downright classiness. More than six years after launch, the Discovery Sport remains Land Rover's best-selling car.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('Discovery', 'model_three_quarters_photo_301.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('Discovery Sport', '/images/discoverysportintro.jpg', '/images/dsportinter.jpg', '/images/model_three_quarters_photo_301.png', '28+ Years', '100 per day', '£185')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/model_three_quarters_photo_301.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O2</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>Range Rover SVR</h1>
                                                <p>With a supercharged 5.0-liter V-8 under its hood, a spine-tingling exhaust note, and a menacing exterior design, the 2022 Range Rover Sport Supercharged and SVR will let you live out your Bond villain fantasy.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('Range Rover Sport SVR', 'model_three_quarters_photo_853.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('Range Rover Sport SVR', '/images/range_rover_sport_svr_intro.jpg', '/images/Range-Rover-Sport-SVR-inter.webp', '/images/model_three_quarters_photo_853.png', '28+ Years', '100 per day', '£390')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/model_three_quarters_photo_853.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O3</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>Range Rover Sport</h1>
                                                <p>The Range Rover Sport redefines sporting luxury with a dynamic design and exclusive details with a muscular stance, short overhangs and dramatic proportions.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('Range Rover Sport', 'model_three_quarters_photo_81.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('Range Rover Sport', '/images/rrsportintro.jpg', '/images/rrsportinter.jpg', '/images/model_three_quarters_photo_81.png', '28+ Years', '100 per day', '£250')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/model_three_quarters_photo_81.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O4</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>Range Rover Vogue</h1>
                                                <p>Being a class apart from other ultra-luxe SUVs, the all-new Range Rover Vogue takes design, poshness, and performance to lofty new heights. It will be the most thrilling partner for your long journeys.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('Range Rover Vogue', '14982_st0640_046.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('Range Rover Vogue', '/images/range-rover-vogue-intro.jpg', '/images/Range-Rover-vogueinter.jpg', '/images/vogueexter.png', '28+ Years', '100 per day', '£275')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/14982_st0640_046.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O5</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>Range Rover Evoque</h1>
                                                <p>The Range Rover Evoque is the fashionista of the subcompact-SUV class offering great levels of luxury and technology.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('Range Rover Evoque', '13728_st0640_046.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('Range Rover Evoque', '/images/31-318437_land-rover-evoque-intro.jpg', '/images/rrevoqeinter.jpg', '/images/13728_st0640_037.png', '28+ Years', '100 per day', '£165')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/13728_st0640_046.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </>
            )
        }
        if (cars === 'bentley') {
            return (
                <>
                    <div className='container-fluid carsintro'>
                        <div className="row">
                            <OwlCarousel items={1}
                                className='owl-theme'
                                nav={true}
                                dots={false}
                                dotData='true'
                                pagination='true'
                                loop={true}
                                autoplay={false}
                                smartSpeed='1000'
                                mouseDrag={false}
                            >
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O1</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>Continental GT</h1>
                                                <p>Voguish it may be, but the Continental GT is also a ferociously powerful car, built for effortless acceleration and a truly thrilling drive.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('Continental GT', 'continentalgt.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('Continental GT', '/images/carpixel.net-2018-bentley-continental-gt-uk-84771-hd.jpg', '/images/EYDdItrXQAAlZSUinter.jpg', '/images/model_side_photo_95.png', '28+ Years', '100 per day', '£900')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/continentalgt.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O2</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>Continental GTC</h1>
                                                <p>Mimicking the overall style of the GT, the GTC Convertible adds an element of fun and adventure. It also comes with a small trunk and carries up to four people.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('Continental GTC', 'gtc.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('Continental GTC', '/images/bentley-continental-gtc-mk12-pic85377.jpg', '/images/725743-bentley-continental-gt-speed-convertible-cars-2015.jpg', '/images/model_side_photo_912.png', '28+ Years', '100 per day', '£1000')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/gtc.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </>
            )
        }
        if (cars === 'porsche') {
            return (
                <>
                    <div className='container-fluid carsintro'>
                        <div className="row">
                            <OwlCarousel items={1}
                                className='owl-theme'
                                nav={true}
                                dots={false}
                                dotData='true'
                                pagination='true'
                                loop={true}
                                autoplay={false}
                                smartSpeed='1000'
                                mouseDrag={false}
                            >
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O1</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>Cayman 'S'</h1>
                                                <p>The Cayman becomes the latest Porsche sports car to switch from natural aspiration to turbocharging and the most powerful Cayman to date.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('Cayman S', 'model_three_quarters_photo_601 (1).png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('Cayman', '/images/_b9p8784intro.webp', '/images/porsche_718_2016_images_4inter.jpg', '/images/model_three_quarters_photo_601 (1).png', '28+ Years', '100 per day', '£245')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/model_three_quarters_photo_601 (1).png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O2</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>Boxster 'S'</h1>
                                                <p>The Porsche Boxster S develops its superior power from a six-cylinder boxer engine that charms you with its sharp handling, eager nature and stylish drop-top look.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('Boxster S', 'model_three_quarters_photo_141.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('Boxster S', '/images/Porsche-Boxster-2.7-2014-3-6712.jpg', '/images/Porsche 718 Boxsterinter.webp', '/images/model_three_quarters_photo_141.png', '28+ Years', '100 per day', '£225')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/model_three_quarters_photo_141.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O3</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>911 Carrera Cabriolet</h1>
                                                <p>The 911 comes with a sophisticated interior along with a dual-clutch automatic making it possibly the best self-shifting gearbox in the world.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('911 Carrera Cabriolet', '911.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('911 Carrera Cabriolet', '/images/2019-Porsche-911-Carrera-4S-Cabriolet-white-press-image-1001x565p-(1).jpg', '/images/old_Porsche_911_Carrera_inter.webp', '/images/model_three_quarters_photo_141.png', '28+ Years', '100 per day', '£425')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/911.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O4</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>Cayenne S</h1>
                                                <p>The Cayenne S remains the king of driver friendly SUVs having fancy tech while keeping the car’s weight down.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('Cayenne S', 'model_three_quarters_photo_491.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('Cayenne S', '/images/2011_porsche_cayenne_1intro.jpg', '/images/cayennesinter.jpg', '/images/model_three_quarters_photo_491.png', '28+ Years', '100 per day', '£295')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/model_three_quarters_photo_491.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O5</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>Macan GTS</h1>
                                                <p>The Macan GTS has outperformed in just about every department - impressive swiftness, lateral grip and iron-clad body control</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('Macan GTS', 'model_three_quarters_photo_511.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('Macan GTS', '/images/mecanintro.webp', '/images/4.Porsche-Macaninter.jpg', '/images/model_three_quarters_photo_511.png', '28+ Years', '100 per day', '£295')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/model_three_quarters_photo_511.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O6</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>911 Carrera Coupe</h1>
                                                <p>The new design and spirit is a nod to its earlier predecessors; and just like those vehicles, the Carrera S is a car that appeals to one and all.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('911 Carrera Coupe', '911carrera.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('911 Carrera Coupe', '/images/goodwp.com-26934intro.jpg', '/images/porsche_911_carrera_4s_2019_4k_interior-2560x1440inter.jpg', '/images/model_side_photo_431.png', '28+ Years', '100 per day', '£395')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/911carrera.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </>
            )
        }
        if (cars === 'mercedes') {
            return (
                <>
                    <div className='container-fluid carsintro'>
                        <div className="row">
                            <OwlCarousel items={1}
                                className='owl-theme'
                                nav={true}
                                dots={false}
                                dotData='true'
                                pagination='true'
                                loop={true}
                                autoplay={false}
                                smartSpeed='1000'
                                mouseDrag={false}
                            >
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O1</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>C63 AMG</h1>
                                                <p>Gone is the old twin-turbo V-8 engine from the last-generation C63 and in its place is a turbocharged 2.0-liter four-cylinder with a promise to improved great performance.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('C63 AMG', 'model_three_quarters_photo_341.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('C63 AMG', '/images/c63intro.jpg', '/images/C3inter.jpg', '/images/model_three_quarters_photo_341.png', '28+ Years', '100 per day', '£280')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/model_three_quarters_photo_341.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O2</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>AMG GTC</h1>
                                                <p>The GTC's robust body is impressively balanced and objectively gorgeous for street or track duty.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('AMG GTC', '13934_st0640_046.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('AMG GTC', '/images/2018-Mercedes-AMG-GT-C-intro.jpg', '/images/2016_mercedes-amg_inter.jpg', '/images/gtcexterior.png', '28+ Years', '100 per day', '£550')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/13934_st0640_046.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O3</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>C43 Coupe</h1>
                                                <p>Bold style, advanced technology and a rich cockpit put it all in your hands.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('C43 Coupe', '12334_st0640_046.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('C43 Coupe', '/images/mercedes-amg-c43-intro.jpg', '/images/gtcinter.jpg', '/images/c43exter.png', '28+ Years', '100 per day', '£260')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/12334_st0640_046.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O4</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>S63 AMG</h1>
                                                <p>The AMG tuned S63 holds positively deluxe interiors, thrilling athleticism, countless tech and luxury features.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('S63 AMG', 'model_three_quarters_photo_38.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('S63 AMG', '/images/s63intro.jpg', '/images/2014_MercedesBenz_S63AMG-inter.jpg', '/images/model_three_quarters_photo_38.png', '28+ Years', '100 per day', '£395')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/model_three_quarters_photo_38.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O5</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>GLE</h1>
                                                <p>The Mercedes-Benz GLE is a mid-size technology showpiece with spacious and sophisticated cabin escorted by legit off-road capability. </p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('GLE', 'model_three_quarters_photo_104.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('GLE', '/images/811519-mercedes-amg-gle-intro.jpg', '/images/gleinter.jpg', '/images/model_three_quarters_photo_104.png', '28+ Years', '100 per day', '£185')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/model_three_quarters_photo_104.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O6</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>E53 AMG</h1>
                                                <p>The Mercedes-Benz E53 AMG is a 5-seater elegant sports coupe with a more striking appearance, new headlights and the flashy cabin immediately hits the mark.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('E53 AMG', 'amg.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('E53 AMG', '/images/e53intro.jpg', '/images/mercedes-benz_e-class_inter.jpg', '/images/e5eexter.png', '28+ Years', '100 per day', '£395')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/amg.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O7</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>E220Cdi AMG D</h1>
                                                <p>It can drive itself, it's more refined and magnificent than ever, and it debuts an important 2.0-liter turbodiesel engine.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('E220Cdi AMG D', 'model_three_quarters_photo_352 (1).png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('E220Cdi AMG D', '/images/yraiWmFhintro.jpg', '/images/images_mercedes-benz_e-klasse_2009_8inter.jpg', '/images/model_three_quarters_photo_352.png', '28+ Years', '100 per day', '£175')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/model_three_quarters_photo_352 (1).png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O8</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>Mercedes V Class</h1>
                                                <p>The Mercedes V Class is the ultimate convenience people need for smooth travel, offering a spacious and comfortable interior that can accommodate up to eight passengers. Experience style, comfort, and versatility like never before!</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('Mercedes V Class', 'vclass.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('Mercedes V Class', '/images/vclassintro.jpg', '/images/vclassinterior.jpg', '/images/vclassexterior.png', '28+ Years', '100 per day', '£395')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/vclass.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O9</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>Mercedes S Class</h1>
                                                <p>The Mercedes S Class embodies the pinnacle of automotive luxury, with its sleek design, cutting-edge technology, and ultimate comfort. Indulge in the finest driving experience with this exquisite vehicle.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('Mercedes S Class', 'sclass.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('Mercedes S Class', '/images/sclassintro.webp', '/images/sclassinterior.jpg', '/images/cclassecterior.png', '28+ Years', '100 per day', '£395')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/sclass.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>10</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>Mercedes G63</h1>
                                                <p>The Mercedes G63 is an unstoppable force of power and luxury, boasting a handcrafted V8 engine and a rugged yet stylish exterior. Experience the ultimate off-road adventure in style!</p>
                                            </div>
                                            <div className='readbtn'>      
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('Mercedes G63', 'G63.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('Mercedes G63', '/images/g63intro.jpg', '/images/g63interior.png', '/images/g63extrior.png', '28+ Years', '100 per day', '£395')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/G63.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </>
            )
        }
        if (cars === 'ferrari') {
            return (
                <>
                    <div className='container-fluid carsintro'>
                        <div className="row">
                            <OwlCarousel items={1}
                                className='owl-theme'
                                nav={true}
                                dots={false}
                                dotData='true'
                                pagination='true'
                                loop={true}
                                autoplay={false}
                                smartSpeed='1000'
                                mouseDrag={false}
                            >
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O1</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>Portofino</h1>
                                                <p>The Ferrari Portofino is an audacious build that'll turn heads, a mighty and rich twin-turbo V-8, a drop-top with top-notch performance.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('Portofino', 'portofino.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('Portofino', '/images/portofinointro.jpg', '/images/2018-Ferrari-Portofino-3inter.jpg', '/images/model_side_photo_88exter.png', '28+ Years', '100 per day', '£850')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/portofino.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O2</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>F8 Tributo</h1>
                                                <p>The F8 is a supercar with magnificent engine, stunning chassis and matchless handling balance. A dramatic design, inside and out.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('F8 Tributo', 'model_three_quarters_photo_1031.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('F8 Tributo', '/images/F8 Tributointro.jpg', '/images/f8inter.jpg', '/images/f8exter.jpg', '28+ Years', '100 per day', '£1000')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/model_three_quarters_photo_1031.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>03</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O3</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>Ferrari 458</h1>
                                                <p>Indulge in the epitome of automotive excellence with the Ferrari 458. A sleek, aerodynamic marvel of Italian engineering, designed to elevate your driving experience to new heights of luxury and performance.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('Ferrari 458', '458.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('Ferrari 458', '/images/458exrior.jpg', '/images/458interior.png', '/images/458intro.jpg','28+ Years', '100 per day', '£1000')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/458.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </>
            )
        }
        if (cars === 'jaguar') {
            return (
                <>
                    <div className='container-fluid carsintro'>
                        <div className="row">
                            <OwlCarousel items={1}
                                className='owl-theme'
                                nav={true}
                                dots={false}
                                dotData='true'
                                pagination='true'
                                loop={true}
                                autoplay={false}
                                smartSpeed='1000'
                                mouseDrag={false}
                            >
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O1</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>F-Pace</h1>
                                                <p>The Jaguar F-Pace is a luxury performance SUV that brings together award winning design, redefined engine and intuitive technologies.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('F-Pace', 'model_three_quarters_photo_61.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('F-Pace', '/images/fpaceintro.jpg', '/images/1A.jpg', '/images/model_three_quarters_photo_61.png', '28+ Years', '100 per day', '£165')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/model_three_quarters_photo_61.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </>
            )
        }
        if (cars === 'mclaren') {
            return (
                <>
                    <div className='container-fluid carsintro'>
                        <div className="row">
                            <OwlCarousel items={1}
                                className='owl-theme'
                                nav={true}
                                dots={false}
                                dotData='true'
                                pagination='true'
                                loop={true}
                                autoplay={false}
                                smartSpeed='1000'
                                mouseDrag={false}
                            >
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O1</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>720s Coupe</h1>
                                                <p>The McLaren 720S coupe is uniquely purposeful and radical. With zenith predator responses. This astonishingly light yet strong supercar accelerates from 0-60mph within the blink of an eye! Thanks to wild styling and outlandish performance, the McLaren 720S coupe looks exotically futuristic and drives like Formula 1 cars.</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('720s Coupe', '720s.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('720s Coupe', '/images/mclaren-720s-thedrive-642intro.webp', '/images/2015-mansory-mercedes-benz-s63-amg-coupe-04inter.jpg', '/images/model_side_photo_1061exter.png', '28+ Years', '100 per day', '£1000')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/720s.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </>
            )
        }
        if (cars === 'rollsroyce') {
            return (
                <>
                    <div className='container-fluid carsintro'>
                        <div className="row">
                            <OwlCarousel items={1}
                                className='owl-theme'
                                nav={true}
                                dots={false}
                                dotData='true'
                                pagination='true'
                                loop={true}
                                autoplay={false}
                                smartSpeed='1000'
                                mouseDrag={false}
                            >
                                <div className='item' data-dot="<span>01</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O1</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>Rolls Royce Cullinan</h1>
                                                <p>The Rolls Royce Cullinan is the epitome of automotive opulence, combining supreme comfort and advanced technology with a bold, iconic design. Indulge in a driving experience fit for royalty!</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('Rolls Royce Cullinan', 'rrc.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('Rolls Royce Cullinan', '/images/rrcullinanintro.jpg', '/images/rrcullinaninterior.png' , '/images/rrcullinanexterior.png', '28+ Years', '100 per day', '£395')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/rrc.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                                <div className='item' data-dot="<span>02</span>">
                                    <div className='col-md-5 floatleft carscontent'>
                                        <div className='carcontent carcontentall'>
                                            <div className='carnumber'>
                                                <h1>O2</h1>
                                            </div>
                                            <div className='cardetail'>
                                                <h1>Rolls Royce Phantom</h1>
                                                <p>The paradigm of elegance and sophistication, the Rolls Royce Phantom exudes opulence from every angle. Its flawless design and powerful V12 engine make it a true work of art, for you to adore!</p>
                                            </div>
                                            <div className='readbtn'>
                                                <button className='btn btn-outline-secondary hirebtn' onClick={() => handleProceed('Rolls Royce Phantom', 'rr2.png')}>Hire now</button>
                                                <button className='btn btn-outline-secondary morebtn' onClick={() => showDetail('Rolls Royce Phantom', '/images/rrphantomexterior.jpg', '/images/rrphantominterior.jpg' , '/images/rollsroycephantomintro.png', '28+ Years', '100 per day', '£395')}>Read more</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5 floatleft'>
                                        <div className="categorcarimgbox">
                                            <img src={process.env.PUBLIC_URL + '/images/rr2.png'} alt="cars" />
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <motion.div
                className=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
            >
                <section id="categorycar">
                    <Testcars />
                    <div className="bodyoverlay" id="bodyoverlay"></div>
                    <div className="container-fluid detailcontainer" id="detailcontainer" onScroll={toTop}>
                        <div className='container moreinfocontainer'>
                            <div className='row'>
                                <div className='col-md-6 introcardiv'>
                                    <div className="car__title-cover">01</div>
                                    <h1 className='headingtest' id="headingtest">Introduction</h1>
                                    <br /><br />
                                    <p>Few vehicles achieve this level of aesthetic and driving enjoyment. It cuts a stunning figure in its flawlessly pressed sheetmetal couture-inspired outfit.
                                        <br />
                                        No matter the powertrain, the car is impressive for its athletic chassis, snappy handling, and quick acceleration—not to mention some of the most beautiful exhaust notes currently on the market.
                                        <br />
                                        The inside is compact and offers a number of luxurious customization choices. The sedan is a highly sought-after driver's automobile with an illustrious history because to its sleek design and thrilling motions.
                                    </p>
                                </div>
                                <div className='col-md-6'>
                                    <div className='introcar'>
                                        <img src="" alt="cars" id="introMain" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='container header-box moreinfocontainer'>
                            <div className='row'>
                                <div className='col-md-12 introcardiv'>
                                    <div className='col-md-4 floatleft borderright'>
                                        <h3>Age Limit</h3>
                                        <h3 id="age">28+ Years</h3>
                                    </div>
                                    <div className='col-md-4 floatleft borderright'>
                                        <h3>Mileage Limit</h3>
                                        <h3 id="mileage">100 per day</h3>
                                    </div>
                                    <div className='col-md-4 floatleft'>
                                        <h3>Enquiry</h3>
                                        {/* <h3 id="rental">£3,000</h3> */}
                                        <h3 id="">Request a quote</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='container moreinfocontainer'>
                            <div className='row'>
                                <div className='col-md-12 introcardiv'>
                                    <div className="car__title-cover">02</div>
                                    <h1>Exterior</h1>
                                    <p>A unique combination of power, craftsmanship and stunning automotive design. Built with the finest material, this car is elegantly shaped to redefine class, comfort, convenience and luxury.</p>
                                </div>
                                <div className='col-md-12 testcar'>
                                    <div className='introcar'>
                                        <img src="" alt="cars" className='testcarchild' id="exteriorImage" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='container moreinfocontainer'>
                            <div className='row mbbottom'>
                                <div className='col-md-6 introcardiv'>
                                    <div className="car__title-cover">03</div>
                                    <h1 className='headingtest' id="headingtest">Interior</h1>
                                    <br /><br />
                                    <p>This finely designed masterpiece comes with a host of luxurious options, including a complete leather interior, heated and ventilated seats, a carbon fiber steering wheel, embroidered headrests, and a range of interior trim options.
                                        <br />
                                        Overall, the cockpit is wonderfully designed and has controls that are simple to use. Sports seats with power alterations and memory settings provide further convenience. The interior provides an unmatched feel of luxury that can be felt by experiencing a drive in this amazing design marvel!
                                    </p>
                                </div>
                                <div className='col-md-6'>
                                    <div className='introcar'>
                                        <img src="" alt="cars" id="interiorImage" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </motion.div>
        </>
    )
}

export default Allcars