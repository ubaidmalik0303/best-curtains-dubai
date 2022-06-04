import React from 'react'
import "./contactusform.css"

const ContactUsForm = ({ formContent }) => {
    return (
        <form className="homepageContactForm">
            <h5 className="heading-size-md heading-font">Get Free Quote</h5>
            {formContent && <p className="heading-size-sm">{formContent}</p>}
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Phone Number" />
            <textarea placeholder="Enter Message Here" id="" cols="30" rows="5" />
            <input type="submit" value="Send Message" />
        </form>
    )
}

export default ContactUsForm