import React from 'react'
import './Details.css'
import { useParams } from 'react-router-dom'
import PData from '../PData'
import { Button } from 'react-bootstrap'
export default function Details() {
    let {id}= useParams()
    let dataDisplay=PData.find((a)=>a.id==id)

  return (
    <>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-4'>
                <img className='w-100' src={dataDisplay.image}></img>
            </div>
            <div className='col-lg-8 px-5'>
                <h3>{dataDisplay.title}</h3>
                <p>{dataDisplay.description}</p>
                <p>{dataDisplay.category}</p>
                <p>Price:{dataDisplay.price}</p>
                <Button className='btn btn-secondary'>Add to cart</Button>
            </div>

        </div>
      </div>
    </>
  )
}
