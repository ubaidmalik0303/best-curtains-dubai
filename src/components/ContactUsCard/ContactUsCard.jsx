import React from 'react'
import "./contactuscard.css"
import { FaPhone, FaLocationArrow, FaEnvelope } from "react-icons/fa"
import { Zoom } from "react-reveal";
import ContactUsForm from '../ContactUsForm/ContactUsForm';

const ContactUsCard = ({ formContent }) => {
    return (
        <div className="container-fluid py-5">
            <h1 className='text-center heading-color heading-font my-3'>Contact Us</h1>
            <div className="container">
                <div className="row justify-content-center align-items-center homepageContactSection p-2 text-center">
                    <div className="col-lg-4 col-md-6">
                        <Zoom>
                            <div className="homepageContactDetails">
                                <div className="my-2">
                                    <FaLocationArrow size={40} className="heading-color" />
                                    <h5 className="heading-size-sm">Adress</h5>
                                    <p className="heading-font heading-size-sm">24 1 Street AlQuoz Dubai</p>
                                </div>
                                <div className="my-2">
                                    <FaPhone size={40} className="heading-color" />
                                    <h5 className="heading-size-sm">Phone No</h5>
                                    <a href="" className="heading-font heading-size-sm text-black">+971554722980</a>
                                </div>
                                <div className="my-2">
                                    <FaEnvelope size={40} className="heading-color" />
                                    <h5 className="heading-size-sm">Email:</h5>
                                    <a href="" className="heading-font heading-size-sm text-black">info@bestcurtainsdubai.com</a>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                    <div className="col-lg-8 col-md-6">
                        <Zoom>
                            <ContactUsForm formContent={formContent} />
                        </Zoom>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsCard