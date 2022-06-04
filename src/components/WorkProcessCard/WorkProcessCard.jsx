import React from 'react'
import { Zoom } from 'react-reveal'
import "./WorkProcessCard.css"

const WorkProcessCard = (props) => {
    return (
        <Zoom>
            <div className="col-md-3 col-sm-6 p-3">
                <div className="freeServiceCard bg-white py-4 px-3">
                    {props.icon}
                    <h5>{props.title}</h5>
                    <p>{props.detail}</p>
                </div>
            </div>
        </Zoom>
    )
}

export default WorkProcessCard