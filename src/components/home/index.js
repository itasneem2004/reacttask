import React from 'react'
import Header from '../layout/header.js';
import Logo1 from '../../assets/1.webp';
import Logo from '../../assets/2.jpg';
import Logo2 from '../../assets/3.jpg';
import Logo3 from '../../assets/5.jpg';
import Footer from '../layout/footer.js';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img1 from '../../assets/Img.jpg';
import Photo1 from '../../assets/photo1.jpg';
import Photo2 from '../../assets/photo2.jpg';
import Photo3 from '../../assets/photo3.jpg';
import Photo4 from '../../assets/photo4.jpg';





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
      <Container>
        <Row className="align-item-start">
          <Col xs={12} md={6}>
            <img src={Img1} height={450} width={450} />
          </Col>
          <Col xs={12} md={6} className="text-start">
          <h1>WHAT IS NDA</h1>
          <h2>(NATIONAL DEFENCE ACADEMY)</h2>
          <p>The National Defence Academy (NDA) stands as a beacon of excellence, where future leaders of India are forged through rigorous training and unwavering discipline. Here, young minds and bodies are sculpted to become the defenders of our nation's values and sovereignty. Embracing the challenges of the NDA is not merely a step towards a career in the armed forces; it is a commitment to a lifetime of honor, courage, and service. As cadets rise through the ranks, they embody the spirit of resilience and patriotism, ready to face any adversities with integrity and determination. The NDA instills in its cadets the belief that through hard work and dedication, they can achieve greatness and contribute significantly to the security and progress of their country.The National Defence Academy is a cornerstone institution for the Indian Armed Forces, providing rigorous training and education to future military leaders. Its comprehensive approach to training ensures that cadets are well-prepared for the challenges of military service and leadership.</p>
          </Col>
          </Row>
      </Container>

      <Container>
        <Row>
          <Col xs={12} md={3} className="mb-3">
          <img src={Photo1} height={300} width={300}/>
          </Col>
          <Col xs={12} md={3} className="mb-3">
          <img src={Photo2}height={300} width={300}/>
          </Col>
          <Col xs={12} md={3} className="mb-3">
          <img src={Photo3}height={300} width={300}/>
          </Col>
          <Col xs={12} md={3} className="mb-3">
          <img src={Photo4}height={300} width={300}/>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}



export default index