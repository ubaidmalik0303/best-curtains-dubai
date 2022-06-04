import React, { useState } from 'react';
import "../../styles/floatingButton.css"
import { FaPlus, FaPhone, FaWhatsapp, FaMailBulk, FaFacebook } from "react-icons/fa";

const FloatingButton = () => {

    const [open, setOpen] = useState(false);

    return (
        <menu className={`${open && "open"}`}>
            <a href="#" class="action"><FaPhone /></a>
            <a href="#" class="action"><FaWhatsapp /></a>
            <a href="#" class="action"><FaFacebook /></a>
            <a href="#" class="action"><FaMailBulk /></a>
            <a class="trigger" onClick={() => open ? setOpen(false) : setOpen(true)}><FaPlus /></a>
        </menu>
    )
}

export default FloatingButton;