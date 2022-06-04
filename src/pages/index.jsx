import React, { useState } from "react"
import Layout from "../components/Layout/Layout"
import "../styles/home.css"
import { StaticImage } from "gatsby-plugin-image"
import { FaPhone, FaUser, FaRuler, FaTools, FaMoneyBill } from "react-icons/fa"
import ServicesCard from "../components/ServicesCard/ServicesCard";
import WorkProcessCard from "../components/WorkProcessCard/WorkProcessCard"
import MaterialUsedCard from "../components/MaterialUsedCard/MaterialUsedCard"
import ContactUsCard from "../components/ContactUsCard/ContactUsCard"
import { Zoom, Slide } from "react-reveal";
import WhyChooseUsCard from "../components/WhyChooseUsCard/WhyChooseUsCard"
import BigBoxImage from "../components/BigImageBox/BigImageBox";

const Home = () => {

  const ImageGallery = [
    {
      thumbnail: <StaticImage
        src="../images/dubai-curtains (5).jpg"
        height={300}
        width={300}
        className="rounded"
        imgStyle={{ objectFit: "contain", objectPosition: "10% 50%" }}
      />,
      fullImage: <StaticImage
        src="../images/dubai-curtains (5).jpg"
        height={600}
      />
    },
    {
      thumbnail: <StaticImage
        src="../images/dubai-curtains (6).jpg"
        height={300}
        width={300}
        className="rounded"
      />,
      fullImage: <StaticImage
        src="../images/dubai-curtains (6).jpg"
        height={600}
      />
    },
    {
      thumbnail: <StaticImage
        src="../images/dubai-curtains (7).jpg"
        height={300}
        width={300}
        className="rounded"
      />,
      fullImage: <StaticImage
        src="../images/dubai-curtains (7).jpg"
        height={600}
      />
    },
    {
      thumbnail: <StaticImage
        src="../images/dubai-curtains (4).jpg"
        height={300}
        width={300}
        className="rounded"
      />,
      fullImage: <StaticImage
        src="../images/dubai-curtains (4).jpg"
        height={600}
      />
    },
  ]

  return (
    <Layout title="Best Curtains In Dubai" metaDiscription="here is the discription">

      <div className="conatiner-fluid homapgeHero">
        <StaticImage
          src="../images/best-curtains-dubai-featured.jpg"
          className="heroImage"
          quality="30"
          loading="eager"
        />
        <div className="container homapgeHero-inner">
          <Zoom>
            <div className="hero-content">
              <h1 className="heading-font heading-color heading-size-xlg">Buy <b className="text-black">Carpet Tiles Dubai</b> At #1 Floor Shop</h1>
              <p className="para-size">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rem obcaecati voluptatibus molestias, reiciendis ad praesentium sit, non vero voluptas velit eligendi quo laudantium accusantium quia dolore ducimus cupiditate animi!</p>
              <a href="tel:+971554722980"><button><b><FaPhone /> Call Us</b></button></a>
            </div>
          </Zoom>
        </div>
      </div>

      <div className="container-fluid homepage-section1">
        <div className="container pt-5">

          <Zoom>
            <div className="row justify-content-center align-items-center py-3">
              <h3 className="text-center heading-font heading-color heading-size-lg">Best Curtains Store In Dubai</h3>
              <p className="heading-size-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facere tempora voluptates? Harum quibusdam fuga dolor aliquid quia voluptatibus cupiditate doloremque eum quasi, corporis enim facilis eaque natus asperiores ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facere tempora voluptates? Harum quibusdam fuga dolor aliquid quia voluptatibus cupiditate doloremque eum quasi, corporis enim facilis eaque natus asperiores ullam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facere tempora voluptates? Harum quibusdam fuga dolor aliquid quia voluptatibus cupiditate doloremque eum quasi, corporis enim facilis eaque natus asperiores ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facere tempora voluptates? Harum quibusdam fuga dolor aliquid quia voluptatibus cupiditate doloremque eum quasi, corporis enim facilis eaque natus asperiores ullam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facere tempora voluptates? Harum quibusdam fuga dolor aliquid quia voluptatibus cupiditate doloremque eum quasi, corporis enim facilis eaque natus asperiores ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facere tempora voluptates? Harum quibusdam fuga dolor aliquid quia voluptatibus cupiditate doloremque eum quasi, corporis enim facilis eaque natus asperiores ullam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facere tempora voluptates? Harum quibusdam fuga dolor aliquid quia voluptatibus cupiditate doloremque eum quasi, corporis enim facilis eaque natus asperiores ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facere tempora voluptates? Harum quibusdam fuga dolor aliquid quia voluptatibus cupiditate doloremque eum quasi, corporis enim facilis eaque natus asperiores ullam?
              </p>
            </div>
          </Zoom>

          <div className="row justify-content-center align-items-center py-4">
            <div className="col-md-5 pb-5 pb-md-0 text-center">
              <Slide left>
                <StaticImage
                  src="../images/red-curtains-dubai.jpg"
                  width={500}
                  height={600}
                  alt="curtains dubai"
                  imgClassName="homepage-section1-img"
                />
              </Slide>
            </div>
            <div className="col-md-7">
              <Slide right>
                <h2 className="heading-font heading-color heading-size-lg">Heading # 2 Here</h2>
                <p className="para-size">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur explicabo tempora obcaecati voluptatem soluta repellendus dicta, ratione accusantium suscipit perspiciatis illo porro, commodi totam vero illum nemo at eos cumque.</p>
                <p className="para-size">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur explicabo tempora obcaecati voluptatem soluta repellendus dicta, ratione accusantium suscipit perspiciatis illo porro, commodi totam vero illum nemo at eos cumque.</p>
                <ul className="heading-size-sm">
                  <li>thsi is dummy text for curtains dubai website</li>
                  <li>thsi is dummy text for curtains dubai website dummy text</li>
                  <li>thsi is dummy text for curtains dubai website</li>
                  <li>thsi is dummy text for curtains dubai website</li>
                </ul>
              </Slide>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-lightgrey">
        <div className="container pt-5">
          <h3 className="heading-size-lg heading-font heading-color text-center">Our Curtains Collections</h3>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <Zoom>
                <ServicesCard
                  data={{
                    name: "Blackout Curtains",
                    link: "/curtains/blackout-curtains-dubai",
                    image: <StaticImage alt="blackout curtains dubai" height={220} src="../images/blackout-curtains/blackout-curtains.jpg" />
                  }}
                />
              </Zoom>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <Zoom>
                <ServicesCard
                  data={{
                    name: "Linen Curtains",
                    link: "/curtains/linen-curtains-dubai",
                    image: <StaticImage alt="linen curtains dubai" height={220} src="../images/linen-curtains/linen-curtains.jpg" />
                  }}
                />
              </Zoom>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <Zoom>
                <ServicesCard
                  data={{
                    name: "Sheer Curtains",
                    link: "/curtains/sheer-curtains-dubai",
                    image: <StaticImage alt="sheer curtains dubai" height={220} src="../images/sheer-curtains/sheer-curtains.jpg" />
                  }}
                />
              </Zoom>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <Zoom>
                <ServicesCard
                  data={{
                    name: "Silk Curtains",
                    link: "/curtains/silk-curtains-dubai",
                    image: <StaticImage alt="silk curtains dubai" height={220} src="../images/silk-curtains/silk-curtains.jpg" />
                  }}
                />
              </Zoom>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <Zoom>
                <ServicesCard
                  data={{
                    name: "Motorized Curtains",
                    link: "/curtains/motorized-curtains-dubai",
                    image: <StaticImage alt="motorized curtains dubai" height={220} src="../images/motorized-curtains/motorized-curtains.jpg" />
                  }}
                />
              </Zoom>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <Zoom>
                <ServicesCard
                  data={{
                    name: "Eyelet Curtains",
                    link: "/curtains/eyelet-curtains-dubai",
                    image: <StaticImage alt="eyelet curtains dubai" height={210} src="../images/eyelet-curtains/eyelet-curtains.jpg" />
                  }}
                />
              </Zoom>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <Zoom>
                <ServicesCard
                  data={{
                    name: "Velvet Curtains",
                    link: "/curtains/velvet-curtains-dubai",
                    image: <StaticImage alt="velvet curtains dubai" height={210} src="../images/velvet-curtains/velvet-curtains.jpg" />
                  }}
                />
              </Zoom>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid homepage-section2">
        <div className="container pt-5">
          <div className="row justify-content-center align-items-center py-5">
            <div className="col-md-7">
              <Slide left>
                <h1 className="heading-font heading-color heading-size">Heading # 2 Here</h1>
                <p className="para-size">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur explicabo tempora obcaecati voluptatem soluta repellendus dicta, ratione accusantium suscipit perspiciatis illo porro, commodi totam vero illum nemo at eos cumque.</p>
                <p className="para-size">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur explicabo tempora obcaecati voluptatem soluta repellendus dicta, ratione accusantium suscipit perspiciatis illo porro, commodi totam vero illum nemo at eos cumque.</p>
                <p className="para-size">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur explicabo tempora obcaecati voluptatem soluta repellendus dicta, ratione accusantium suscipit perspiciatis illo porro, commodi totam vero illum nemo at eos cumque.</p>
              </Slide>
            </div>
            <div className="col-md-5 pt-5 pt-md-0 text-center">
              <Slide right>
                <StaticImage
                  src="../images/dubai-curtains (3).jpg"
                  width={400}
                  height={500}
                  alt="curtains dubai"
                  className="homepage-section2-img"
                />
              </Slide>
            </div>
          </div>

          <Zoom>
            <div className="row py-4">
              <h4 className="heading-font heading-size-md text-center">Why Choose Us</h4>
              <WhyChooseUsCard title="Heading" discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloribus exercitationem officiis impedit temporibus voluptatem tempora odio soluta repudiandae. Libero vitae earum accusamus at repellendus itaque sed sint debitis officia?" />
              <WhyChooseUsCard title="Heading" discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloribus exercitationem officiis impedit temporibus voluptatem tempora odio soluta repudiandae. Libero vitae earum accusamus at repellendus itaque sed sint debitis officia?" />
              <WhyChooseUsCard title="Heading" discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloribus exercitationem officiis impedit temporibus voluptatem tempora odio soluta repudiandae. Libero vitae earum accusamus at repellendus itaque sed sint debitis officia?" />
              <WhyChooseUsCard title="Heading" discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloribus exercitationem officiis impedit temporibus voluptatem tempora odio soluta repudiandae. Libero vitae earum accusamus at repellendus itaque sed sint debitis officia?" />
            </div>
          </Zoom>
        </div>
      </div>

      <div className="container-fluid py-5" >
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <Slide left>
                <h4 className="heading-font heading-size-md heading-color">heading here</h4>
                <p className="heading-size-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, omnis! Id saepe, recusandae obcaecati aperiam voluptates voluptatibus laboriosam at veniam. Distinctio voluptatibus ut repellat voluptatem fuga ipsum asperiores accusantium ea!</p>
                <p className="heading-size-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, omnis! Id saepe, recusandae obcaecati aperiam voluptates voluptatibus laboriosam at veniam. Distinctio voluptatibus ut repellat voluptatem fuga ipsum asperiores accusantium ea!</p>
                <ul className="heading-size-sm">
                  <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                  <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                  <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                  <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                </ul>
              </Slide>
            </div>
            <div className="col-lg-5">
              <div className="row">
                <div className="col-6 p-2">
                  <BigBoxImage image={ImageGallery[0]} />
                </div>
                <div className="col-6 p-2">
                  <BigBoxImage image={ImageGallery[1]} />
                </div>
                <div className="col-6 p-2">
                  <BigBoxImage image={ImageGallery[2]} />
                </div>
                <div className="col-6 p-2">
                  <BigBoxImage image={ImageGallery[3]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <div className="row pb-5">
            <h4 className="heading-size-md text-center heading-font py-5">Material We Use</h4>
            <MaterialUsedCard
              side="left"
              heading="Heading"
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, distinctio. Odio, fugiat non minus porro veritatis "
              image={<StaticImage
                src="../images/curtain-image.jpg"
                height={400}
                width={400}
              />}
            />
            <div className="col-md-6"></div>
            <div className="col-md-6"></div>
            <MaterialUsedCard
              side="right"
              heading="Heading"
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, distinctio. Odio, fugiat non minus porro veritatis "
              image={<StaticImage
                src="../images/curtains.jpg"
                height={400}
                width={400}
              />}
            />
            <MaterialUsedCard
              side="left"
              heading="Heading"
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, distinctio. Odio, fugiat non minus porro veritatis "
              image={<StaticImage
                src="../images/curtains-dubai.jpg"
                height={400}
                width={400}
              />}
            />
            <div className="col-md-6"></div>
            <div className="col-md-6"></div>
            <MaterialUsedCard
              side="right"
              heading="Heading"
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, distinctio. Odio, fugiat non minus porro veritatis "
              image={<StaticImage
                src="../images/dubai-curtains (2).jpg"
                width={400}
                height={400}
              />}
            />
          </div>
        </div>
      </div>

      <div className="container-fluid aqua-bg-color py-4">
        <div className="container">
          <h5 className="text-center text-white heading-size-md my-5 heading-font">Our Work Process</h5>
          <div className="row justify-content-center text-center">
            <WorkProcessCard icon={<FaUser size={50} />} title="Free Consultation" detail="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
            <WorkProcessCard icon={<FaRuler size={50} />} title="Measurment" detail="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
            <WorkProcessCard icon={<FaTools size={50} />} title="Installation" detail="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
            <WorkProcessCard icon={<FaMoneyBill size={50} />} title="Payment" detail="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
          </div>
        </div>
      </div>

      <ContactUsCard formContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime harum eius architecto consequuntur doloremque maiores rem quos, suscipit perferendis nobis aliquid molestias, veniam deleniti vitae in mollitia nihil repellat dolorem!" />


    </Layout>
  )
}

export default Home



