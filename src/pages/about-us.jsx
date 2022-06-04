import React from 'react'
import "../styles/aboutus.css"
import Layout from '../components/Layout/Layout'
import { StaticImage } from "gatsby-plugin-image"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaPhone, FaLocationArrow, FaEnvelope } from "react-icons/fa"

const AboutUs = () => {
  return (
    <Layout>
      <div className="container-fluid py-5">
        <div className="container text-center">
          <StaticImage className='mt-3 mb-5'
            src="../images/logo.png"
            width={290}
          />
          <dv className="row justify-content-center align-items-center text-center">
            <div className="col-md-4">
              <StaticImage
                src='../images/curtains-dubai.jpg'
                height={400}
              />
            </div>
            <div className="col-md-8 py-3">
              <h1 className='heading-font heading-color heading-size-lg'>Heading Here</h1>
              <p className='heading-size-sm heading-font'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil voluptatem doloribus eaque, amet dignissimos aspernatur quae iusto doloremque est alias, dicta atque pariatur voluptatum laborum obcaecati iste, molestias cupiditate voluptate?
                Asperiores suscipit hic harum dolorum odit, consectetur quae id est esse corrupti iste similique repellendus delectus mollitia molestiae, porro nostrum illum voluptatum commodi beatae impedit consequuntur. Fuga quia incidunt corrupti.
                Dolor quaerat assumenda at beatae incidunt accusantium sequi odio, nostrum soluta corrupti aperiam nihil eum. Consectetur illo perferendis qui mollitia fugiat officia libero laudantium laboriosam labore, nemo dolore? Doloremque, nobis.</p>
            </div>
          </dv>
        </div>
      </div>

      <div className="container-fluid text-center aqua-bg-color py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-3">
              <div className="p-2 bg-white">
                <FaLocationArrow size={40}/>
                <h5 className="heading-size-sm">Adress</h5>
                <p className="heading-font heading-size-sm">24 1 Street AlQuoz Dubai</p>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="p-3 bg-white">
                <FaPhone size={40}/>
                <h5 className="heading-size-sm">Phone No</h5>
                <a href="" className="heading-font heading-size-sm text-black">+971554722980</a>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="p-3 bg-white">
                <FaEnvelope size={40}/>
                <h5 className="heading-size-sm">Email:</h5>
                <a href="" className="heading-font heading-size-sm text-black">info@bestcurtainsdubai.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-lightgrey py-5 px-2">
        <h2 className='my-5 text-center heading-font'>What Our Clients Say</h2>
        <div className="container">
          <Carousel autoPlay showArrows stopOnHover>
            <div className='d-flex flex-column text-center bg-white p-3'>
              <p className='heading-font heading-size-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eligendi cupiditate nostrum explicabo natus omnis corrupti magni voluptates, qui cum iure, maiores consequatur, libero corporis adipisci dolorum? Laboriosam, aperiam nostrum.</p>
              <b className='text-black heading-size-sm'>Martin Chris</b>
            </div>
            <div className='d-flex flex-column text-center bg-white p-3'>
              <p className='heading-font heading-size-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eligendi cupiditate nostrum explicabo natus omnis corrupti magni voluptates, qui cum iure, maiores consequatur, libero corporis adipisci dolorum? Laboriosam, aperiam nostrum.</p>
              <b className='text-black heading-size-sm'>Martin Chris</b>
            </div>
            <div className='d-flex flex-column text-center bg-white p-3'>
              <p className='heading-font heading-size-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eligendi cupiditate nostrum explicabo natus omnis corrupti magni voluptates, qui cum iure, maiores consequatur, libero corporis adipisci dolorum? Laboriosam, aperiam nostrum.</p>
              <b className='text-black heading-size-sm'>Martin Chris</b>
            </div>
          </Carousel>
        </div>
      </div>
    </Layout>
  )
}

export default AboutUs