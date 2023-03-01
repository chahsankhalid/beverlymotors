import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import { Pagetitle } from './Pagetitle';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import emailjs from 'emailjs-com';
import { IoIosArrowForward } from 'react-icons/io';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    Pagetitle('Contact')
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_y5swqlr', 'template_1ah3fqj', e.target, 'KOGt_jfGyDsNtazBT')
            .then((result) => {
                console.log(result.text);
                toast.success(`Thank you for your filling out the form. We'll get back to you soon!`, {
                    position: "top-center"
                });
            }, (error) => {
                console.log(error.text);
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
                <div className="container-fluid contactuscontainer px-0">
                    <div className='row contactmobview'>
                        <div className='col-md-5 parentimg'>
                            <div className="aboutimages">
                                <img src={process.env.PUBLIC_URL + '/images/contact.jpg'} alt="cars" className='landingcars contactimg' />
                            </div>
                        </div>
                        <div className='col-md-5' id="contactuscontent">
                            <div className='formdiv'>
                                <h2>Contact us</h2>
                                <br /><br />
                                <p>Have a question? Tell us how to reach you and we'll get back to you shortly.</p>
                                <form onSubmit={sendEmail}>
                                    {/* <input type="hidden" name="carname" value={carName} /> */}
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
                    </div>
                </div>
            </motion.div>
            <ToastContainer />
        </>
    )
}

export default Contact