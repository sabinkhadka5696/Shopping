import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './Grid.css' 
import Items from '../Selling items/Items'
import { LinkContainer } from 'react-router-bootstrap'

function Grid() {
  return (
    <>
    <Container>
    <Row>
        <Col className='bnm'>
        <img src='image4.jpg' className='img4'></img>
        <h3 className='img4-con'>NEW MEN COLLECTION</h3>
        <LinkContainer to='/productlist'>
        <Button className='btn-secondary btn-img4'>Shop Now</Button>
        </LinkContainer>
        </Col>
        <Col className='bnm'><img src='image7.jpg' className='img7'></img>
        <h2 className='img7-con'>OUR NEW ARRIVAL</h2>
        <LinkContainer to='/productlist'>
        <Button className='btn-secondary btn-img7'>Shop Now</Button>
        </LinkContainer>
        </Col>
        <Col className='bnm'><img src='image6.jpg' className='img6'></img>
        <h3 className='img6-con'>NEW KIDS COLLECTION</h3>
        <LinkContainer to='/productlist'>
        <Button className='btn-secondary btn-img6'>Shop Now</Button>
        </LinkContainer>
        </Col>
      </Row>
      <Row >
        <Col className='grid1'><img src='image8.jpg'></img>
        <h3  className='img8-con'>Best Sellers</h3>
        <LinkContainer to='/productlist'>
        <Button className='btn-secondary btn-img8'>Shop Now</Button>
        </LinkContainer>
        </Col>
      </Row>

    </Container>
    <Items/>
    </>
  )
}

export default Grid