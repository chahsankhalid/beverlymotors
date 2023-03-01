import React, { useState, useEffect, useRef } from 'react'
import { Pagetitle } from './Pagetitle';
import { useLocation, useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { IoIosArrowForward } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Inquiry = () => {

    Pagetitle('Rental Inquiry')

    const [imgPath, setImgPath] = useState('')
    const [carName, setCarName] = useState('')
    const params = useParams();
    const location = useLocation()
    const uri = location.pathname;
    var filename = uri.replace(/^.*[\\\/]/, '')
    useEffect(() => {
        setImgPath(filename)
        setCarName(params.name)
        // if(filename === 'contact'){
        //     document.getElementById('bookedcar').style.display = 'none';
        // }
    }, [])

    // const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_y5swqlr', 'template_1ah3fqj', e.target, 'KOGt_jfGyDsNtazBT')
            .then((result) => {
                console.log(result.text);
                toast.success(`Thank you for your filling out the form. We'll get back to you soon!`, {
                    position: "top-center"
                });

            }, (error) => {
                toast.error(`Please review the details.`, {
                    position: "top-center"
                });
            });
        e.target.reset()
    };

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
                            <div className="aboutimages">
                                <div className='bookedcar' id="bookedcar"><img src={process.env.PUBLIC_URL + '/images/' + imgPath} alt="bookedcar" /></div>
                            </div>
                        </div>
                        <div className='col-md-5' id="contactuscontent">
                            <div className='formdiv'>
                                <h2>{carName}</h2>
                                <form onSubmit={sendEmail}>
                                    <input type="hidden" name="carname" value={carName} />
                                    <FloatingLabel controlId="floatingInputGrid" label="Full Name">
                                        <Form.Control type="text" placeholder="0332 3221233" name="name" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingInputGrid" label="Contact number">
                                        <Form.Control type="phone" placeholder="xxx xxxx" name="contact" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingInputGrid" label="Email Address">
                                        <Form.Control type="email" placeholder="name@example.com" name="email" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingInputGrid" label="Subject">
                                        <Form.Control type="text" placeholder="Subject" name="subject" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingInputGrid" label="Message">
                                        <Form.Control as="textarea" rows={4} placeholder="Message" name="message" />
                                    </FloatingLabel>
                                    <Button variant="outline-secondary" className="submitbtn floatleft" type="submit">SUBMIT<span className='submit'><IoIosArrowForward /></span></Button>
                                </form>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <div className="aboutimagesmobileview">

                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <ToastContainer />
        </>
    )
}

export default Inquiry