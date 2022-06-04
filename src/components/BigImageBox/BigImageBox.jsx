import React, { useState } from 'react'
import "./big-image-box.css"
import { FaWindowClose } from "react-icons/fa"
import { Slide } from "react-reveal"


const BigImageBox = ({ image }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Slide right>
                <div className='thumbnail-image justify-content-center' onClick={() => setIsOpen(true)}>
                    {image.thumbnail}
                </div>
            </Slide>
            {isOpen && <div className="large-image-box">
                <div className="large-image d-flex justify-content-center align-items-center">
                    <FaWindowClose onClick={() => setIsOpen(false)} size={40} color="white" className='closeIcon' />
                    {image.fullImage}
                </div>
            </div>}
        </>
    )
}

export default BigImageBox