import React from 'react'
import "./MaterialUsedCard.css";
import { StaticImage } from "gatsby-plugin-image";
import { Zoom } from "react-reveal";

const MaterialUsedCard = ({ heading, paragraph, image, side }) => {
    return (
        <div className="col-md-6 my-2">
            <Zoom>
                {side === "right" ? <div className="materialUsedCard border-left">
                    {image}
                    <div className='p-2'>
                        <h5>{heading}</h5>
                        <p>{paragraph}</p>
                    </div>
                </div> : <div className="materialUsedCard border-right">
                    <div className='p-2'>
                        <h5>{heading}</h5>
                        <p>{paragraph}</p>
                    </div>
                    {image}
                </div>}
            </Zoom>
        </div>
    )
}

export default MaterialUsedCard