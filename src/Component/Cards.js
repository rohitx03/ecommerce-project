import React, { useState } from 'react';
import CardsData from './CardsData';
import './Cards.css';
import { useDispatch } from 'react-redux';
import { Addcart } from '../Action/Action';

const Cards=() =>{

  const dispatch = useDispatch();
  const send=(e)=>{
    console.log(e)
    dispatch(Addcart(e))
  }

  const [data] = useState(CardsData)
  return (
    <>
      <sectioin className="cards-section my-5">
        <div className='container mt-3   '>
          <h2 style={{ textAlign: "center", textTransform: 'uppercase', fontSize: '35px', fontWeight: '500' }}>Select Your Product</h2>
          <div className='row my-5'> 
            {
              data.map((element,id)=>{
                return(
                  <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12' style={{padding:'15px'}}>
                  <div className='card-data'>
                    <div class="card">
                      <div className='card-img-box' style={{overflow:'hidden'}}>
                        <a href='/'>
                      <img src={element.imgdata} class="card-img-top img-fluid" alt="card-img"
                      style={{width:'100%', height:'250px'}} /></a>
                      </div>
                        <div class="card-body">
                          <h5 class="card-title">{element.rname}</h5>
                          <p class="card-text">Price : (₹) {element.price}</p>
                          <button class="btn btn-primary cart-button" onClick={()=>send(element)}>Add to Cart</button>
                        </div>
                    </div>
                  </div>
                </div>
                );
              })
            }
            {/* <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
              <div className='card-data'>
                <div class="card">
                  <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </sectioin>
    </>
  )
}

export default Cards;
