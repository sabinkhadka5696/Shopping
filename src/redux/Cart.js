import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
function Cart() {
    const {cartItems, totalAmount, quantity} =useSelector((state)=>state.Cart)
    if(quantity==0) {
        return <h2>NO items in Cart....</h2>
    }
  return (
    <>
    <Container>
        <h1>cart</h1>
            {cartItems.map((a)=>(
                <>
                id:- {a.id}  title:- {a.title}
                <hr/>
                </>
    ))}
        
        <h2>totalAmount:${totalAmount.toFixed(2)}</h2>
    </Container>
    </>
  )
}

export default Cart