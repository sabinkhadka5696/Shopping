import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './Items.css'
import { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {addToCart } from '../redux/cartSlice'

function Items({id, image,title,price}) {
    let [post, setPost] = useState([])
        useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then(response=>response.json()).then(data=>setPost(data))
    },[])
console.log()
const dispatch = useDispatch()
  return (
    <>
    <Container fluid className=' items'>
        <Row>
            <Col>
            <h2 className='py-5 px-5'>Best Selling Items</h2>
            </Col>
            <Col>
            <h3  className='py-5 items-con'>
                <NavLink to='/productlist'>View all items</NavLink></h3>
            </Col>
        </Row>
        <Row>
        {post.slice(0,9).map((a)=>(
            <div className='col-lg-4'>
                <div className='card'>
                <NavLink to={`/details/${a.id}`}> <img src={a.image} alt={a.title} className='items-ig'></img></NavLink>
                <div className='card-body'>
                <h5>{a.title}</h5>
                <p>{a.category}</p>
                <p>${a.price}</p>
                <Button className='btn btn-secondary'onClick={() => dispatch(addToCart({id, image,title,price}))}>Add to cart</Button>
                
                </div>
            </div>
            </div>
    ))}
    </Row>
    </Container>
    

    </>
  )
}

export default Items