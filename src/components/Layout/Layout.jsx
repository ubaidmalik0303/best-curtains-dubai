import React, { useState } from "react"
import "../../styles/global.css"
import Header from "./Header"
import FloatingButton from "./FloatingButton"
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./Footer"
import SEO from "../SEO/SEO"
import { FaArrowUp } from "react-icons/fa"

const Layout = ({ children, title, metaDiscription }) => {

  const [showScrollBtn, setSowScrollBtn] = useState(false)

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      if (window.scrollY > 200) {
        setSowScrollBtn(true);
      } else {
        setSowScrollBtn(false)
      }
    }
  }

  return (
    <>
      <SEO title={title} metaDiscription={metaDiscription} />
      <Header />
      {children}
      <FloatingButton />
      <Footer />
      <FaArrowUp onClick={() => typeof window !== "undefined" && window.scrollTo(0, 0)} className={`scrolltoTop ${showScrollBtn ? "scrolltoTopShow" : "scrolltoTopHide"}`} color="rgb(36, 190, 165)" size={50} />
    </>
  )
}

export default Layout
