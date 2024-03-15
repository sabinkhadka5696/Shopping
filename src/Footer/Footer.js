import React from 'react'
import { Col, Container, NavLink, Row } from 'react-bootstrap'
import './footer.css'
function Footer() {
  return (
    <>
     <Container fluid className='grid '>
        <Row>
            <Col>
            <h5 className='px-5 py-5 text-white'>Top categories</h5>
            <div className='grid-content text-white px-5'>
            <ul>
            <p><NavLink to='#'>Dresses for Girls </NavLink> </p>
            <p><NavLink href='#'>Maxi dresses</NavLink> </p>
            <p><NavLink href='#'>Tops for girls</NavLink> </p>
            <p><NavLink href='#'>Women Jumpsuits</NavLink> </p>
            <p><NavLink href='#'>Dungarees dress </NavLink> </p>
            <p><NavLink href='#'>T-Shirts</NavLink> </p>
            </ul>
            </div>
            </Col>
            <Col>
            <h5 className='px-5 py-5 text-white'>About us</h5>
            <div className='grid-content text-white px-5'>
            <ul>
            <p><NavLink href='#'>History</NavLink> </p>
            <p ><NavLink href='#'>Band of trust </NavLink> </p>
            <p><NavLink href='#'>Brand Guidlines </NavLink> </p>
            <p><NavLink href='#'>TV Commercials  </NavLink> </p>
            <p><NavLink href='#'>Awards</NavLink> </p>
            <p><NavLink href='#'>Terms & Conditions</NavLink> </p>
            <p><NavLink href='#'>Privacy Policy </NavLink> </p>
            </ul>
            </div>
            </Col>
            <Col>
            <h5 className='px-5 py-5 text-white'>Download App</h5>
            <div className='border apple px-5 '>
            <i class="fa-brands fa-apple"></i>
              <p className='apple-title'>Download on the</p>
              <p className='apple-subtitle'>Apple Store</p>
            </div>

            <div className='border apple px-5'>
            <i class="fa-brands fa-google-play"></i>
              <p className='apple-title'>Get in on</p>
              <p className='apple-subtitle'>Google Play</p>
            </div>
            </Col>
        </Row>
    </Container>
    
    </>
  )
}

export default Footer