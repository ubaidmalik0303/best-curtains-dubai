import React from 'react'
import Layout from "../components/Layout/Layout"
import { Link } from "gatsby"
import { FaTools} from "react-icons/fa"

const PageNotFound = () => {
    return (
        <Layout>
            <div className="container-fluid my-5">
                <div className="container text-center py-5 bg-lightgrey">
                    <FaTools size={100} className="heading-color" />
                    <h1 className='heading-font heading-size-lg my-4'>404</h1>
                    <h3 className='heading-font heading-size-sm my-4'>Page Not Found!</h3>
                    <p className=''>The Page You Are Looking For Does Not Exist.</p>
                    <Link to="/" className='btn btn-outline-success'>Go To Home Page</Link>
                </div>
            </div>
        </Layout>
    )
}

export default PageNotFound