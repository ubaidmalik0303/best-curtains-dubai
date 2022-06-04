import React from 'react'
import { Helmet } from "react-helmet"

const SEO = ({ title, metaDiscription }) => {
    return (
        <Helmet
            htmlAttributes={{
                lang: 'en',
            }}
            title={title}
            meta={[
                {
                    name: "discription",
                    content: metaDiscription
                },
            ]}
        />
    )
}

export default SEO