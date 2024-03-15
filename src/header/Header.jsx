import React, { useState } from 'react'
import './header.css'
import { Badge, Container, Form, Nav, NavDropdown, NavLink, Navbar, Offcanvas } from 'react-bootstrap'
import { Routes, Route, Link } from "react-router-dom";
import App from '../App';
import Home from '../Home';
import Productlist from '../Product/Productlist';
import Details from '../Productdetails/Details';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import Cart from '../redux/Cart';

function Header() {
 
    const {quantity} = useSelector((state) => state.Cart)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='text-center top'>
        <p>40% CASHBACK FOR NEW USERS | CODE:Sabinkhadka404</p>
      </div>

      <Navbar className='nav-second'>
        <Container>
          <p>FREE CASH ON DELIVERY & SHIPPING AVAILABLE OVER<p className='red'>$499</p></p>
          <Nav className="justify-content-end head" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/home"><i class="fa-solid fa-mobile mobile"></i>+977-9761664950</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1"><i class="fa-solid fa-headset contact"></i>Contact us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Download App<i class="fa-brands fa-windows windows"></i><i class="fa-brands fa-apple avb"></i><i class="fa-brands fa-android android"></i></Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>


      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary nav-third">
        <Container>
          <LinkContainer to="/">
          <Navbar.Brand>chpoee</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Women" id="collapsible-nav-dropdown">
                <div className='navdrop'>
                  <div class="row">
                      <div className="col-lg-4 column">
                        <h5>Bottom Wear</h5>
                        <NavLink href="#">Jeans</NavLink>
                        <NavLink href="#">Casual Trousers </NavLink>
                        <NavLink href="#">Formal Trousers</NavLink>
                        <NavLink href="#">Shorts </NavLink>
                        <NavLink href="#"> T-Shirts</NavLink>
                        <NavLink href="#"> Sweat Shirts</NavLink>
                      </div>
                      <div className="col-lg-4 column">
                        <h5>Western Wear</h5>
                        <NavLink href="#">Sweaters </NavLink>
                        <NavLink href="#">Jackets</NavLink>
                        <NavLink href="#">Blazers & Coat</NavLink>
                        <NavLink href="#">Suits</NavLink>
                        <NavLink href="#">Rain Jackets</NavLink>
                        <NavLink href="#">Formal Shirts</NavLink>
                      </div>
                      <div className="col-lg-4 column">
                        <h5>Footwear</h5>
                        <NavLink href="#">Causal Shoes </NavLink>
                        <NavLink href="#">Sports shoes </NavLink>
                        <NavLink href="#">Formal Shoes </NavLink>
                        <NavLink href="#">Flip Flops </NavLink>
                        <NavLink href="#">Socks </NavLink>
                        <NavLink href="#">Sandals & Floaters </NavLink>
                      </div>
                    </div>
                    </div>
              </NavDropdown>
              <NavDropdown title="Men" id="collapsible-nav-dropdown">
              <div className='navdrop'>
                  <div class="row">
                      <div className="col-lg-4 column">
                        <h5 className='text-Bold'>Bottom Wear</h5>
                        <NavLink href="#">Jeans</NavLink>
                        <NavLink href="#">Casual Trousers </NavLink>
                        <NavLink href="#">Formal Trousers</NavLink>
                        <NavLink href="#">Shorts </NavLink>
                        <NavLink href="#"> T-Shirts</NavLink>
                        <NavLink href="#"> Sweat Shirts</NavLink>
                      </div>
                      <div className="col-lg-4 column">
                        <h5>Western Wear</h5>
                        <NavLink href="#">Sweaters </NavLink>
                        <NavLink href="#">Jackets</NavLink>
                        <NavLink href="#">Blazers & Coat</NavLink>
                        <NavLink href="#">Suits</NavLink>
                        <NavLink href="#">Rain Jackets</NavLink>
                        <NavLink href="#">Formal Shirts</NavLink>
                      </div>
                      <div className="col-lg-4 column">
                        <h5>Footwear</h5>
                        <NavLink href="#">Causal Shoes </NavLink>
                        <NavLink href="#">Sports shoes </NavLink>
                        <NavLink href="#">Formal Shoes </NavLink>
                        <NavLink href="#">Flip Flops </NavLink>
                        <NavLink href="#">Socks </NavLink>
                        <NavLink href="#">Sandals & Floaters </NavLink>
                      </div>
                    </div>
                    </div>
              </NavDropdown>
              <Nav.Link href="#features">Sales</Nav.Link>
              <NavDropdown title="Pages" id="collapsible-nav-dropdown">
              <div className="col-lg-12 column">
                        <NavLink href="#">Product List  </NavLink>
                        <NavLink href="#">Product Details  </NavLink>
                        <NavLink href="#">Check Out  </NavLink>
                        <NavLink href="#">My Account  </NavLink>
                        <NavLink href="#">FAQ </NavLink>
                        <NavLink href="#">Contact Us </NavLink>
                      </div>

              </NavDropdown>
            </Nav>

            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
            <Nav className='login'>
              <Nav.Link href="#deets"><i class="fa-solid fa-user"></i>Log-in / Sign-up</Nav.Link>
              <Nav.Link eventKey={2} href="/cart">
                <i class="fa-solid fa-cart-shopping"></i> <Badge onClick={handleShow}>{quantity}</Badge>Cart  
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<Productlist />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default Header