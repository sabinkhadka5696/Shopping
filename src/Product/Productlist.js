import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, NavDropdown, NavLink, Pagination, Row } from 'react-bootstrap'
import './product.css'
function Productlist() {
  let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
  const [post,setPost]=useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products?sort=desc').then(res=>res.json()).then(data=>setPost(data))
  },[])
  return (
    <>
      <div className='container-fluid bg-secondary py-5'>
        <div className='row'>
          <div className='col-lg-4 px-5'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='border-bottom'>Filter By</h5>
              <NavDropdown title='All Category'></NavDropdown>
               <Form inline className='px-4'>

                  <Col xs="lg">
                    <Form.Control
                      type="text"
                      placeholder="Search your best"
                      className=" mr-lg-2"
                    />
                  </Col>
                  <Form>
                    <Form.Check
                      type="checkbox"
                      id="checkbox"
                      label="Jackets"
                    />
                    <Form.Check
                      type="checkbox"
                      id="checkbox"
                      label="Blazer's & Coats"
                    />
                    <Form.Check
                      type="checkbox"
                      id="checkbox"
                      label="Suits"
                    />
                    <Form.Check
                      type="checkbox"
                      id="checkbox"
                      label="Rain Jackets"
                    />
                    <Form.Check
                      type="checkbox"
                      id="checkbox"
                      label="T-Shirts"
                    />
                    <Form.Check
                      type="checkbox"
                      id="checkbox"
                      label="Causal T-Shirts"
                    />
                    <Form.Check
                      type="checkbox"
                      id="checkbox"
                      label="Formal T-Shirts"
                    />
                    <Form.Check
                      type="checkbox"
                      id="checkbox"
                      label="Sweatshirts"
                    />
                  </Form>
                <p className='text-danger'><NavLink href='#'>See all</NavLink></p>


                </Form>


                <div className='border-top'>
                  <NavDropdown title='Brand '> </NavDropdown>

                  <Form className='px-4'>
                    <Form.Check
                      type="checkbox"
                      id="checkbox"
                      label="Brand 1"
                    />
                    <Form.Check
                      type="checkbox"
                      id="checkbox"
                      label="Brand 2"
                    />
                    <Form.Check
                      type="checkbox"
                      id="checkbox"
                      label="Brand 3"
                    />
                    <Form.Check
                      type="checkbox"
                      id="checkbox"
                      label="Brand 4"
                    />
                    <Form.Check
                      type="checkbox"
                      id="checkbox"
                      label="Brand 5"
                    />
<p className='text-danger'><NavLink href='#'>See all</NavLink></p>
                  </Form>
                  
                  
                </div>
                <div className='border-top'>
                  <NavDropdown title='Price '> </NavDropdown>

                  <Form className='px-4'>
                    <Form.Check
                      type="checkbox"
                      id="checkbox"
                      label="Any Price"
                    />
                    <Form.Check
                      type="checkbox"
                      id="checkbox"
                      label="$50 - $100"
                    />
                    <Form.Check
                      type="checkbox"
                      id="checkbox"
                      label="$100 - $150"
                    />
                    <Form.Check
                      type="checkbox"
                      id="checkbox"
                      label="$150 - $200"
                    />
                    <Form.Check
                      type="checkbox"
                      id="checkbox"
                      label="$200 - $1000"
                    />
 <p className='text-danger'><NavLink href='#'>See all</NavLink></p>
                  </Form>
                 
                  
                </div>

              </div>
            </div>
          </div>
          <div className='col-lg-8 wear bg-secondary'>
            <h5 className='text-danger'>Top Wear</h5>
            <div className='row'>
               <div className='col-lg-12 productwear'>
            {post.slice(0,6).map((a)=>(  
              <div className='card'>
              <img src={a.image} ></img>
              <div className='card-body'>
                <h4>{a.title}</h4>
                <p>{a.category}</p>
                <p>${a.price}</p>
                <Button className='btn-secondary'>Add to cart</Button>
              </div>
              </div>
             

            ))}
             </div>
              </div>
          </div>
        </div>
      </div>


      <div>
    <Pagination className='pagi'>{items}</Pagination>
  </div>
    </>
  )
}

export default Productlist