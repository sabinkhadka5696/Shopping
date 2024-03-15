import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState,useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './slick.css'
import { NavLink, useParams } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
function Slick() {
    let [post, setPost] = useState([])
    let {id}=useParams()

    useEffect(()=>{
    fetch('https://fakestoreapi.com/products').then(response=>response.json()).then(data=>setPost(data))
},[])
console.log()

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <div className="slider-container ">
         <h2 className='mx-5'>Top Savers Today</h2>
    <Slider className='mx-5 py-5' {...settings}>
      {post.slice(9,16).map((a)=>(
        <div className='card'>
            <LinkContainer to={`/details/${a.id}`}><img src={a.image} className='slick-img'></img></LinkContainer>
            <div className='card-body'>
                
                <p>{a.title}</p>
               <p className="text-danger">${a.price} <del className="text-muted">$1000</del> </p>
                <p>{a.category}</p>
                <Button className='btn btn-secondary'>Add to cart</Button>
            </div>
        </div>
      ))}
        
    </Slider>
  </div>
  )
}

export default Slick