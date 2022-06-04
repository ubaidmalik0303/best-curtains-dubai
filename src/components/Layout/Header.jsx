import React, { useEffect, useState } from "react"
import "../../styles/header.css"
import { Link } from "gatsby"
import { FaFacebook, FaInstagram, FaTwitter, FaBars, FaArrowDown } from "react-icons/fa";
import { StaticImage } from "gatsby-plugin-image";
import { curtains } from "../../Services/curtains";

const Header = () => {

  const currentPath = typeof window !== "undefined" && window.location.pathname;


  return (
    <>
      <header className="headerContainer">
        <input type="checkbox" id="checkMenu" />
        <div className="logo">
          <StaticImage
            src="../../images/logo.png"
            className="logoImg"
          />
        </div>
        <div className="navLinks">
          <ul>
            <li>
              <Link activeClassName="activeLink" to="/">Home</Link>
            </li>
            <li>
              <Link activeClassName="activeLink" to="/about-us">About Us</Link>
            </li>
            <li>
              <Link activeClassName="activeLink" className={currentPath && currentPath.includes("/curtains/") && "activeLink"} >Curtains <FaArrowDown /></Link>
              <ul className="dropdown">
                {curtains.map((curt, i) => {
                  return <li><Link key={i} activeClassName="activeLink" to={curt.link}>{curt.name}</Link></li>
                })}
              </ul>
            </li>
            <li>
              <Link activeClassName="activeLink" to="/made-to-measure-curtains">Made To Measure Curtains</Link>
            </li>
            <li>
              <Link activeClassName="activeLink" to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="socialIcons">
          <Link><FaFacebook size={20} /></Link>
          <Link><FaInstagram size={20} /></Link>
          <Link><FaTwitter size={20} /></Link>
        </div>
        <div className="three-bars">
          <label htmlFor="checkMenu">
            <FaBars size={30} color="black" />
          </label>
        </div>
      </header>
    </>
  )
}

export default Header
