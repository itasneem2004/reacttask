import React from 'react'
import Header from '../layout/header.js';
import Logo1 from '../../assets/1.webp';
import Logo from '../../assets/2.jpg';
import Logo2 from '../../assets/3.jpg';
import Logo3 from '../../assets/5.jpg';
import Footer from '../layout/footer.js';
import Carousel from 'react-bootstrap/Carousel';
import Logo4 from '../../assets/6.jpg';

const index = () => {
  return (
    <>
      <Header />
      <Carousel>
        <Carousel.Item>
          <img src={Logo1} height={550} width={1310} />
          <Carousel.Caption>
            <h3>NDA ACADEMY</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Logo} height={550} width={1310} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Logo3} height={550} width={1310} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Logo2} height={550} width={1310} />
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <p></p>
      <img src={Logo4} height={350} width={350}/>
      <Footer />
    </>
  )
}



export default index