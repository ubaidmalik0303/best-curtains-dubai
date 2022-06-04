import React from 'react'
import "../../styles/footer.css"
import { Link } from "gatsby"
import { FaFacebook, FaInstagram, FaTwitter, FaArrowRight } from "react-icons/fa"
import { StaticImage } from 'gatsby-plugin-image'
import { curtains } from "../../Services/curtains"

const Footer = () => {
  return (
    <footer className="container-fluid aqua-bg-color py-4">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <StaticImage
              src="../../images/logo.png"
              width={200}
              className="bg-white my-3"
            />
            <p className='text-white heading-size-sm heading-font'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non facilis ullam quia doloribus soluta eaque at vitae, consequuntur tempore deleniti debitis dicta distinctio ipsam voluptatem vel dolorum deserunt? Ratione, aliquam.</p>
            <div className="d-flex justify-content-center py-4">
              <a href=''><FaFacebook className='footer-social-icons' color='white' size={40} /></a>
              <a href=''><FaInstagram className='footer-social-icons mx-4' color='white' size={40} /></a>
              <a href=''><FaTwitter className='footer-social-icons' color='white' size={40} /></a>
            </div>
          </div>
          <div className="col-md-4 px-md-5 py-5 py-md-0">
            <h4 className='text-white heading-size-md heading-font'>Our Serivces: </h4>
            <ul className='footer-services p-0 heading-font mx-auto'>
              {curtains.map((data, i) => {
                return <li key={i}><FaArrowRight color='white' /><Link className='text-white heading-size-sm' to={data.link}> {data.name}</Link></li>
              })}
            </ul>
          </div>
          <div className="col-md-4 text-center">
            <h4 className='text-white heading-size-md heading-font'>Our Location:</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1300.5786907939014!2d55.236443112974754!3d25.13473767208773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69077d5547d9%3A0x7f88c98dd45c851f!2sFix%20it%20Design%20Upholstery%20services!5e0!3m2!1sen!2s!4v1647864760277!5m2!1sen!2s"
              allowfullscreen=""
              height={200}
              title='Our Location'
              loading="lazy"></iframe>
          </div>
        </div>
        <hr className='text-white' />
        <p className='text-center text-white heading-font'>All Rights Reserved Copyright 2022. Designed By Ubaid Malik.</p>
      </div>
    </footer>
  )
}

export default Footer