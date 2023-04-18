import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { TbGridDots } from 'react-icons/tb';
import { ImCross } from 'react-icons/im';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';

const Mainnav = () => {

  const [Bgimg, setBgimg] = useState("/images/home.jpeg");
  const [sidetitle, setSidetitle] = useState('')

  const params = useParams();
  const location = useLocation()
  const uri = location.pathname;
  const mainuri = uri.slice(1);

  
  useEffect(() => {
    const grid = document.getElementsByClassName('grid_container')[0];
    const div = document.querySelectorAll('.icon-bar');
    const collectionicon = document.getElementsByClassName('collectionicon')[0];
    const collectionbtntext = document.getElementsByClassName('collectiontext')[0];
    const pagetitle = document.getElementsByClassName('pagetitle')[0];
    console.log(mainuri);
    if (mainuri === '') {
      setSidetitle('HOME')
      grid.style.backgroundColor = 'transparent'
      grid.style.borderLeft = '1px solid white';
      div[3].style.backgroundColor = 'white';
      div[4].style.backgroundColor = 'white';
      div[5].style.backgroundColor = 'white';
      pagetitle.style.color = 'white';
      collectionbtntext.style.color = 'white';
      collectionicon.style.color = 'white';
      grid.addEventListener('mouseover', function () {
        grid.style.backgroundColor = 'black'
        div[3].style.backgroundColor = 'white';
        div[4].style.backgroundColor = 'white';
        div[5].style.backgroundColor = 'white';
        collectionicon.style.color = 'white';
        collectionbtntext.style.color = 'white';
        pagetitle.style.color = 'white';
      })
      grid.addEventListener('mouseleave', function () {
        grid.style.backgroundColor = 'transparent'
        div[3].style.backgroundColor = 'white';
        div[4].style.backgroundColor = 'white';
        div[5].style.backgroundColor = 'white';
        collectionicon.style.color = 'white';
        collectionbtntext.style.color = 'white';
        pagetitle.style.color = 'white';
      })
    }
    if (mainuri === 'about') {
      setSidetitle('ABOUT US')
      grid.style.borderLeft = '1px solid white';
      div[3].style.backgroundColor = 'black';
      div[4].style.backgroundColor = 'black';
      div[5].style.backgroundColor = 'black';
      pagetitle.style.color = 'black';
      collectionbtntext.style.color = 'black';
      collectionicon.style.color = 'black';
      grid.addEventListener('mouseover', function () {
        div[3].style.backgroundColor = 'white';
        div[4].style.backgroundColor = 'white';
        div[5].style.backgroundColor = 'white';
        collectionicon.style.color = 'white';
        collectionbtntext.style.color = 'white';
        pagetitle.style.color = 'white';
      })
      grid.addEventListener('mouseleave', function () {
        div[3].style.backgroundColor = 'black';
        div[4].style.backgroundColor = 'black';
        div[5].style.backgroundColor = 'black';
        collectionicon.style.color = 'black';
        collectionbtntext.style.color = 'black';
        pagetitle.style.color = 'black';
      })
    }
    if (mainuri === 'cars') {
      setSidetitle('CARS COLLECTION')
      grid.style.backgroundColor = 'white'
      div[3].style.backgroundColor = 'black';
      div[4].style.backgroundColor = 'black';
      div[5].style.backgroundColor = 'black';
      pagetitle.style.color = 'black';
      collectionbtntext.style.color = 'black';
      collectionicon.style.color = 'black';
      grid.addEventListener('mouseover', function () {
        grid.style.backgroundColor = 'black'
        div[3].style.backgroundColor = 'white';
        div[4].style.backgroundColor = 'white';
        div[5].style.backgroundColor = 'white';
        collectionicon.style.color = 'white';
        collectionbtntext.style.color = 'white';
        pagetitle.style.color = 'white';
      })
      grid.addEventListener('mouseleave', function () {
        grid.style.backgroundColor = 'white'
        div[3].style.backgroundColor = 'black';
        div[4].style.backgroundColor = 'black';
        div[5].style.backgroundColor = 'black';
        collectionicon.style.color = 'black';
        collectionbtntext.style.color = 'black';
        pagetitle.style.color = 'black';
      })
    }
    if (mainuri === 'contact') {
      setSidetitle('CONTACT US')
      div[3].style.backgroundColor = 'black';
      div[4].style.backgroundColor = 'black';
      div[5].style.backgroundColor = 'black';
      pagetitle.style.color = 'black';
      collectionbtntext.style.color = 'black';
      collectionicon.style.color = 'black';
      grid.style.borderLeft = 'none'
      grid.addEventListener('mouseover', function () {
        div[3].style.backgroundColor = 'white';
        div[4].style.backgroundColor = 'white';
        div[5].style.backgroundColor = 'white';
        collectionicon.style.color = 'white';
        collectionbtntext.style.color = 'white';
        pagetitle.style.color = 'white';
      })
      grid.addEventListener('mouseleave', function () {
        div[3].style.backgroundColor = 'black';
        div[4].style.backgroundColor = 'black';
        div[5].style.backgroundColor = 'black';
        collectionicon.style.color = 'black';
        collectionbtntext.style.color = 'black';
        pagetitle.style.color = 'black';
      })
    }
    if (mainuri.includes("rentalinquiry")) {
      if (mainuri.includes('rentalinquiry + ""')) {
        setSidetitle('')
      }
      else {
        setSidetitle('RENTAL INQUIRY')
        div[3].style.backgroundColor = 'black';
        div[4].style.backgroundColor = 'black';
        div[5].style.backgroundColor = 'black';
        pagetitle.style.color = 'black';
        collectionbtntext.style.color = 'black';
        collectionicon.style.color = 'black';
        grid.style.borderLeft = 'black'
        grid.addEventListener('mouseover', function () {
          div[3].style.backgroundColor = 'white';
          div[4].style.backgroundColor = 'white';
          div[5].style.backgroundColor = 'white';
          collectionicon.style.color = 'white';
          collectionbtntext.style.color = 'white';
          pagetitle.style.color = 'white';
        })
        grid.addEventListener('mouseleave', function () {
          div[3].style.backgroundColor = 'black';
          div[4].style.backgroundColor = 'black';
          div[5].style.backgroundColor = 'black';
          collectionicon.style.color = 'black';
          collectionbtntext.style.color = 'black';
          pagetitle.style.color = 'black';
        })
      }
    }
    if (mainuri.includes("aston-martin")){
      setSidetitle('ASTON MARTIN')
      grid.style.borderLeft = '1px solid white';
    }
    if (mainuri.includes("audi")){
      setSidetitle('AUDI')
      grid.style.borderLeft = '1px solid white';
    }
    if (mainuri.includes("bentley")){
      setSidetitle('BENTLEY')
      grid.style.borderLeft = '1px solid white';
    }
    if (mainuri.includes("land-rover")){
      setSidetitle('LAND ROVER')
      grid.style.borderLeft = '1px solid white';
    }
    if (mainuri.includes("ferrari")){
      setSidetitle('FERRARI')
      grid.style.borderLeft = '1px solid white';
    }
    if (mainuri.includes("jaguar")){
      setSidetitle('JAGUAR')
      grid.style.borderLeft = '1px solid white';
    }
    if (mainuri.includes("mclaren")){
      setSidetitle('MCLAREN')
      grid.style.borderLeft = '1px solid white';
    }
    if (mainuri.includes("mercedes")){
      setSidetitle('MERCEDES')
      grid.style.borderLeft = '1px solid white';
    }
    if (mainuri.includes("porsche")){
      setSidetitle('PORSCHE')
      grid.style.borderLeft = '1px solid white';
    }
    if (mainuri.includes("rollsroyce")){
      setSidetitle('ROLLS ROYCE')
      grid.style.borderLeft = '1px solid white';
    }
   
    // try {
    else {

    }

  })
  const openSidebar = () => {
    document.querySelector('#side_nav').classList.toggle('active');
  }

  const closesidebar = () => {
    document.querySelector('#side_nav').classList.remove('active');
  }

  const opencollectionnav = () => {
    document.querySelector('#collection_nav').classList.toggle('active');
  }

  const closecollectionnav = () => {
    document.querySelector('#collection_nav').classList.remove('active');
  }
  const openCollection = () => {
    document.querySelector('#collection_nav').classList.toggle('active');
  }

  const bgimages = {
    backgroundImage: `url(${Bgimg})`
  }

  return (
    <>
      <Navbar>
        <Navbar.Brand href="/">
          <img src={process.env.PUBLIC_URL + '/images/Logo.png'} alt="img" className='logo' />
        </Navbar.Brand>
        <Navbar.Toggle />
        <div className='headeleftmobile'>
          <button className="btn px-1 p-0 open-btn" type="button" onClick={openSidebar}>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
      </Navbar>
      <div className="grid_container">
        <div className="card">
          <div className='headeleft'>
            <button className="btn px-1 p-0 open-btn" type="button" onClick={openSidebar}>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
        </div>

        <div className="card">
          <p className='pagetitle'>
            {sidetitle}
          </p>
        </div>

        <div className="card" >
          <div className="calllog">
            <span className="callnow">
              <button className='btn opencollection' onClick={openCollection}><TbGridDots className='collectionicon' /><span className="collectiontext">Our Collection</span></button>
            </span>
          </div>
        </div>
      </div>
      <div className='bottomgrid'>
        <div className='socialicons'>
          <a href="https://www.instagram.com/beverlymotorsltd/"><AiOutlineInstagram className='instagram' /></a>
          {/* <FiFacebook className='facebook'/> */}
        </div>
      </div>
      <div className="sidebar" id='side_nav'>
        <div className="" id='toggledivside'>
          <div className="headeleft closebtn">
            <button className="btn px-1 p-0 close-btn" type="button" onClick={openSidebar}>
              {/* <span className="icon-bar-cross"></span>
              <span className="icon-bar-cross"></span> */}
              <ImCross className='closecollection' />
            </button>
          </div>
        </div>
        <div className="Itembox">
          <div className='header-box'>
            <img src={process.env.PUBLIC_URL + '/images/Logo.png'} alt="img" />
          </div>
          <ul className="list-unstyled px-2 links">
            <li className="" onClick={closesidebar}><Link to="/" className="text-decoration-none" onMouseOver={() => setBgimg(process.env.PUBLIC_URL + '/images/home.jpeg')} onMouseOut={() => setBgimg(process.env.PUBLIC_URL + '/images/home2.jpg')}>Home</Link></li>
            <li className="" onClick={closesidebar}><Link to="/about" className="text-decoration-none" onMouseOver={() => setBgimg('/images/about-us.jpg')} onMouseOut={() => setBgimg(process.env.PUBLIC_URL + '/images/about-us.png')}>About</Link></li>
            <li className="" onClick={closesidebar}><Link to="/cars" className="text-decoration-none" onMouseOver={() => setBgimg(process.env.PUBLIC_URL + '/images/carscollection.jpg')} onMouseOut={() => setBgimg(process.env.PUBLIC_URL + '/images/collection2.jpg')}>Car Collection</Link></li>
            {/* <li className="" onClick={closesidebar}><a href="#" className="text-decoration-none" onMouseOver={() => setBgimg(process.env.PUBLIC_URL + '/images/rentalinquiry.jpg')} onMouseOut={() => setBgimg(process.env.PUBLIC_URL + '/images/rental2.jpg')}>Rental Inquiry</a></li> */}
            <li className="" onClick={closesidebar}><Link to="/contact" className="text-decoration-none" onMouseOver={() => setBgimg(process.env.PUBLIC_URL + '/images/contact.jpg')} onMouseOut={() => setBgimg(process.env.PUBLIC_URL + '/images/contact2.jpeg')}>Contact Us</Link></li>
            <hr className="h-color mx-2" />
          </ul>
          <div className='logoicon'>
          <img src={process.env.PUBLIC_URL + '/images/logoicon.png'} alt="Icon"/>
          </div>
        </div>
        <div className='overlaybox'>
          <div className="sidebaroverlay" id="side_nav_overlay" style={bgimages}></div>
        </div>
      </div>
      <div className="sidebar" id='collection_nav'>
        <div className="" id='toggledivside'>
          <div className="headeleft">
            <button className="btn px-1 p-0 close-btn" type="button" onClick={openCollection}>
              <ImCross className='closecollection' />
            </button>
          </div>
        </div>
        <div className="Itembox itemboxscroll">
          <div className='header-box'>
            <img src={process.env.PUBLIC_URL + '/images/Beverly-Logo-Black.png'} alt="img" />
          </div>
          <ul className="list-unstyled px-2 links collectionlinks">
            <li className="home" onClick={closecollectionnav}><Link to={'/allcars/aston-martin'} className="text-decoration-none" onMouseOver={() => setBgimg(process.env.PUBLIC_URL + '/images/astonmartin.jpg')} onMouseOut={() => setBgimg(process.env.PUBLIC_URL + '/images/collection2.jpg')}>ASTON MARTIN</Link></li>
            <li className="" onClick={closecollectionnav}><Link to={'/allcars/audi'} className="text-decoration-none" onMouseOver={() => setBgimg(process.env.PUBLIC_URL + '/images/audi.jpg')} onMouseOut={() => setBgimg(process.env.PUBLIC_URL + '/images/collection2.jpg')}>AUDI</Link></li>
            <li className="" onClick={closecollectionnav}><Link to={'/allcars/bentley'} className="text-decoration-none" onMouseOver={() => setBgimg(process.env.PUBLIC_URL + '/images/bentley.jpg')} onMouseOut={() => setBgimg(process.env.PUBLIC_URL + '/images/collection2.jpg')}>BENTLEY</Link></li>
            <li className="" onClick={closecollectionnav}><Link to={'/allcars/ferrari'} className="text-decoration-none" onMouseOver={() => setBgimg(process.env.PUBLIC_URL + '/images/ferrari.png')} onMouseOut={() => setBgimg(process.env.PUBLIC_URL + '/images/collection2.jpg')}>FERRARI</Link></li>
            <li className="" onClick={closecollectionnav}><Link to={'/allcars/jaguar'} className="text-decoration-none" onMouseOver={() => setBgimg(process.env.PUBLIC_URL + '/images/jaguar.jpg')} onMouseOut={() => setBgimg(process.env.PUBLIC_URL + '/images/collection2.jpg')}>JAGUAR</Link></li>
            <li className="" onClick={closecollectionnav}><Link to={'/allcars/land-rover'} className="text-decoration-none" onMouseOver={() => setBgimg(process.env.PUBLIC_URL + '/images/range-rover.jpg')} onMouseOut={() => setBgimg(process.env.PUBLIC_URL + '/images/collection2.jpg')}>LAND ROVER</Link></li>
            <li className="" onClick={closecollectionnav}><Link to={'/allcars/mclaren'} className="text-decoration-none" onMouseOver={() => setBgimg(process.env.PUBLIC_URL + '/images/mclaren.jpg')} onMouseOut={() => setBgimg(process.env.PUBLIC_URL + '/images/collection2.jpg')}>MCLAREN</Link></li>
            <li className="" onClick={closecollectionnav}><Link to={'/allcars/mercedes'} className="text-decoration-none" onMouseOver={() => setBgimg(process.env.PUBLIC_URL + '/images/mercedes.jpg')} onMouseOut={() => setBgimg(process.env.PUBLIC_URL + '/images/collection2.jpg')}>MERCEDES</Link></li>
            <li className="" onClick={closecollectionnav}><Link to={'/allcars/porsche'} className="text-decoration-none" onMouseOver={() => setBgimg(process.env.PUBLIC_URL + '/images/porsche.jpg')} onMouseOut={() => setBgimg(process.env.PUBLIC_URL + '/images/collection2.jpg')}>PORSCHE</Link></li>
            <li className="" onClick={closecollectionnav}><Link to={'/allcars/rollsroyce'} className="text-decoration-none" onMouseOver={() => setBgimg(process.env.PUBLIC_URL + '/images/rollyroyce.jpg')} onMouseOut={() => setBgimg(process.env.PUBLIC_URL + '/images/collection2.jpg')}>ROLLS ROYCE</Link></li>
            <hr className="h-color mx-2" />
          </ul>
          <div className='termsncondition'>
            <a href='#'>Terms of Use</a>
          </div>
        </div>
        <div className='overlaybox'>
          <div className="sidebaroverlay" id="side_nav_overlay" style={bgimages}></div>
        </div>
      </div>

    </>
  )
}

export default Mainnav