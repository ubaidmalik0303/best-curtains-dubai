import React from 'react'
import Layout from '../components/Layout/Layout'
import "../styles/contactus.css"
import { FaPhone, FaLocationArrow, FaEnvelope } from "react-icons/fa"
import { Zoom } from "react-reveal";
import ContactUsCard from "../components/ContactUsCard/ContactUsCard";

const ContactUs = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1300.5786907939014!2d55.236443112974754!3d25.13473767208773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69077d5547d9%3A0x7f88c98dd45c851f!2sFix%20it%20Design%20Upholstery%20services!5e0!3m2!1sen!2s!4v1647864760277!5m2!1sen!2s"
          allowfullscreen=""
          height={350}
          style={{ width: "100%" }}
          title='Our Location'
          loading="lazy"></iframe>
      </div>

      <ContactUsCard formContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime harum eius architecto consequuntur doloremque maiores rem quos, suscipit perferendis nobis aliquid molestias, veniam deleniti vitae in mollitia nihil repellat dolorem!" />

    </Layout>
  )
}

export default ContactUs