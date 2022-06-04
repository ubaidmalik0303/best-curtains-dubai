import React from 'react'
import "./whychooseusbox.css"

const WhyChooseUsCard = ({ title, discription }) => {
    return (
        <div className="col-lg-3 col-md-6 py-3">
            <div className="whychooseusbox p-3">
                <h4 className='text-center heading-font heading-size-md'>{title}</h4>
                <p>{discription}</p>
            </div>
        </div>
    )
}

export default WhyChooseUsCard