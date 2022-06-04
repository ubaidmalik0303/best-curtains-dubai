import React from 'react'
import "./serviceCard.css"
import { Link } from "gatsby"
import { FaArrowRight } from "react-icons/fa"

const ServicesCard = ({ data }) => {
    return (
        <Link to={data.link}>
            <div className="services-card my-4 mx-auto">
                {data.image}
                <div className='aqua-bg-color'>
                    <h3 className='text-white text-center heading-font heading-size-sm'><span><FaArrowRight /></span> {data.name}</h3>
                </div>
            </div>
        </Link>
    )
}

export default ServicesCard