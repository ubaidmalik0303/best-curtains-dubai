import React from 'react'
import "./servicespagetopbar.css"
import {FaBlind} from "react-icons/fa"

const ServicesPageTopBar = ({ topbarHeading, pageName }) => {
    return (
        <div className="container-fluid aqua-bg-color py-5 services-topbar">
            <div className="container py-5">
                <p className='text-white text-center heading-font'>Curtains {" > "} {pageName && pageName}</p>
                <h1 className='text-white heading-font text-center'>{topbarHeading && topbarHeading}</h1>
            </div>
        </div>
    )
}

export default ServicesPageTopBar