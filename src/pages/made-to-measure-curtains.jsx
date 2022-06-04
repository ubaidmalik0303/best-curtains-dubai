import React from 'react'
import Layout from '../components/Layout/Layout'
import "../styles/made-to-measure-curtains.css"
import { StaticImage } from 'gatsby-plugin-image'
import { FaPhone, FaWhatsapp } from "react-icons/fa"
import ContactUsForm from '../components/ContactUsForm/ContactUsForm'

const MadeToMeasureCurtains = () => {
    return (
        <Layout title="Made To Measure Curtains" metaDiscription="here is the discription">
            <div className="conatiner-fluid mtmc-hero">
                <StaticImage
                    src='../images/curtains.jpg'
                    className='mtmc-hero-img'
                />
                <div className="container">
                    <div className='d-flex flex-column justify-content-center align-items-center mt-auto'>
                        <div className="mtmc-hero-content p-5 text-center">
                            <h1 className='heading-font heading-color heading-size-lg'>Made To Measure Curtain Heading</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-md-4 text-center">
                            <StaticImage
                                src="../images/curtains-dubai.jpg"
                                className='rounded'
                            />
                        </div>
                        <div className="col-md-8 p-3 p-md-0 px-md-5">
                            <h1 className='heading-font heading-color heading-size-md'>Heading Here</h1>
                            <p className='heading-size-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius voluptatibus aliquid at. Aut quas laborum nulla porro aspernatur dolorum quod culpa. Saepe quasi incidunt sapiente, vero debitis nesciunt cum?</p>
                            <p className='heading-size-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius voluptatibus aliquid at. Aut quas laborum nulla porro aspernatur dolorum quod culpa. Saepe quasi incidunt sapiente, vero debitis nesciunt cum?</p>
                            <p className='heading-size-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius voluptatibus aliquid at. Aut quas laborum nulla porro aspernatur dolorum quod culpa. Saepe quasi incidunt sapiente, vero debitis nesciunt cum?</p>
                            <div className='d-flex flex-column flex-sm-row justify-content-center align-items-center py-3'>
                                <button className='btn btn-outline-primary btn-lg mx-3 my-3'><FaPhone /> Call Now</button>
                                <button className='btn btn-success btn-lg mx-3 my-3'><FaWhatsapp /> Whatsapp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid aqua-bg-color">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-md-8 p-3 p-md-0 px-md-5">
                            <h1 className='heading-font text-white heading-size-md'>Heading Here</h1>
                            <p className='heading-size-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius voluptatibus aliquid at. Aut quas laborum nulla porro aspernatur dolorum quod culpa. Saepe quasi incidunt sapiente, vero debitis nesciunt cum?</p>
                            <p className='heading-size-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius voluptatibus aliquid at. Aut quas laborum nulla porro aspernatur dolorum quod culpa. Saepe quasi incidunt sapiente, vero debitis nesciunt cum?</p>
                            <p className='heading-size-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius voluptatibus aliquid at. Aut quas laborum nulla porro aspernatur dolorum quod culpa. Saepe quasi incidunt sapiente, vero debitis nesciunt cum?</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <StaticImage
                                src="../images/curtains-dubai.jpg"
                                className='rounded border border-white'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-lightgrey">
                <div className="container">
                    <div className="row py-5 justify-content-center align-items-center">
                        <div className="col-md-4 text-center">
                            <ContactUsForm />
                        </div>
                        <div className="col-md-8 p-3 p-md-0 px-md-5">
                            <h1 className='heading-font heading-color heading-size-md'>Heading Here</h1>
                            <p className='heading-size-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius voluptatibus aliquid at. Aut quas laborum nulla porro aspernatur dolorum quod culpa. Saepe quasi incidunt sapiente, vero debitis nesciunt cum?</p>
                            <p className='heading-size-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius voluptatibus aliquid at. Aut quas laborum nulla porro aspernatur dolorum quod culpa. Saepe quasi incidunt sapiente, vero debitis nesciunt cum?</p>
                            <p className='heading-size-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius voluptatibus aliquid at. Aut quas laborum nulla porro aspernatur dolorum quod culpa. Saepe quasi incidunt sapiente, vero debitis nesciunt cum?</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container">
                    <h5 className='text-center heading-font heading-size-md'><b>Gallery</b></h5>
                    <div className="row"></div>
                </div>
            </div>

        </Layout>
    )
}

export default MadeToMeasureCurtains