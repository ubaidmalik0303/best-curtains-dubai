import React from 'react'
import Layout from '../../components/Layout/Layout'
import ServicesPageTopBar from '../../components/ServicesPageTopBar/ServicesPageTopBar'
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import BigImageBox from '../../components/BigImageBox/BigImageBox'

const BlackoutCurtains = () => {

  const images = [
    {
      thumbnail: <StaticImage
        src="../../images/blackout-curtains/blackout-curtains.jpg"
        height={300}
        width={300}
        quality={30}
      />,
      fullImage: <StaticImage
        src="../../images/blackout-curtains/blackout-curtains.jpg"
        height={600}
      />
    },
    {
      thumbnail: <StaticImage
        src="../../images/blackout-curtains/blackout-curtains1.jpg"
        height={300}
        width={300}
        quality={30}
      />,
      fullImage: <StaticImage
        src="../../images/blackout-curtains/blackout-curtains1.jpg"
        height={600}
      />
    },
    {
      thumbnail: <StaticImage
        src="../../images/blackout-curtains/blackout-curtains2.jpg"
        height={300}
        width={300}
        quality={30}
      />,
      fullImage: <StaticImage
        src="../../images/blackout-curtains/blackout-curtains2.jpg"
        height={600}
      />
    },
    {
      thumbnail: <StaticImage
        src="../../images/blackout-curtains/blackout-curtains3.jpg"
        height={300}
        width={300}
        quality={30}
      />,
      fullImage: <StaticImage
        src="../../images/blackout-curtains/blackout-curtains3.jpg"
        height={600}
      />
    },
    {
      thumbnail: <StaticImage
        src="../../images/blackout-curtains/blackout-curtains4.jpg"
        height={300}
        width={300}
        quality={30}
      />,
      fullImage: <StaticImage
        src="../../images/blackout-curtains/blackout-curtains4.jpg"
        height={600}
      />
    },
    {
      thumbnail: <StaticImage
        src="../../images/blackout-curtains/blackout-curtains5.jpg"
        height={300}
        width={300}
        quality={30}
      />,
      fullImage: <StaticImage
        src="../../images/blackout-curtains/blackout-curtains5.jpg"
        height={600}
      />
    },
  ]

  return (
    <Layout title="Blackout Curtains Dubai">
      <ServicesPageTopBar topbarHeading="Blackout Curtians Heading" pageName="Blackout Curtains" />

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5">
              <StaticImage
                src='../../images/blackout-curtains/blackout-curtains.jpg'
                quality={40}
              />
            </div>
            <div className="col-md-7 px-md-3 px-0 py-2a">
              <h2 className='heading-font heading-size-lg heading-color'>Heading Here!!!</h2>
              <p className='heading-size-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eveniet inventore recusandae voluptatem cupiditate dolor doloremque sed magnam consequuntur aut dolorum, ipsum et. Id quo, iure vero sed praesentium amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eveniet inventore recusandae voluptatem cupiditate dolor doloremque sed magnam consequuntur aut dolorum, ipsum et. Id quo, iure vero sed praesentium amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eveniet inventore recusandae voluptatem cupiditate dolor doloremque sed magnam consequuntur aut dolorum, ipsum et. Id quo, iure vero sed praesentium amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eveniet inventore recusandae voluptatem cupiditate dolor doloremque sed magnam consequuntur aut dolorum, ipsum et. Id quo, iure vero sed praesentium amet.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <p className='heading-font heading-size-lg text-center'>Our Gallery</p>
          <div className="row">
            <div className="col-md-4 py-2">
              <BigImageBox image={images[0]} />
            </div>
            <div className="col-md-4 py-2">
              <BigImageBox image={images[1]} />
            </div>
            <div className="col-md-4 py-2">
              <BigImageBox image={images[2]} />
            </div>
            <div className="col-md-4 py-2">
              <BigImageBox image={images[3]} />
            </div>
            <div className="col-md-4 py-2">
              <BigImageBox image={images[4]} />
            </div>
            <div className="col-md-4 py-2">
              <BigImageBox image={images[5]} />
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default BlackoutCurtains