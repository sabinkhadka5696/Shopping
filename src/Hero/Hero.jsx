import React from 'react'
import './Hero.css'
import { Button, Carousel } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
function Hero() {
    
  return (
    <>
      <Carousel className='caro'>
      <Carousel.Item>
        <img src='image1.jpg' className='pic' text="First slide" />
        <Carousel.Caption className='caro-body'>
          <h2 className='first'>Browse the Latest</h2>
          <h1 className='second'>Range of Designer</h1>
          <h2 className='third'>Women Clothing</h2>
          <LinkContainer to='/productlist'>
          <Button>SHOP NOW</Button>
          </LinkContainer>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='image2.jpg' className='pic' text="Second slide" />
        <Carousel.Caption className='caro-body'>
        <h2 className='first'>Browse the Latest</h2>
        <h1 className='second'>Range of Designer</h1>
        <h2 className='third'>Women Clothing</h2>
        <LinkContainer to='/productlist'>
        <Button>SHOP NOW</Button>
        </LinkContainer>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='image3.jpg' className='pic' text="Third slide" />
        <Carousel.Caption className='caro-body'>
        <h2 className='first'>Browse the Latest</h2>
        <h1  className='second'>Range of Designer</h1>
        <h2 className='third'>Women Clothing</h2>
        <LinkContainer to='/productlist'>
        <Button>SHOP NOW</Button>
        </LinkContainer>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Hero