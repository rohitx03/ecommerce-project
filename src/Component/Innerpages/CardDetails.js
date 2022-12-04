
import { useNavigate, useParams } from 'react-router-dom';
import './CardDetails.css';
 import { useEffect, useState } from 'react';
import { Dlt ,Addcart, Remove } from '../../Action/Action';
import {useSelector, useDispatch } from 'react-redux';

const CardDetails = () => {
  const [data,setData] = useState([]);
  // console.log(data);
  
  const send=(e)=>{
    // console.log(e)
    dispatch(Addcart(e))
  }
  // Remove
  const dispatch = useDispatch();
  const dlt = (id) => {
    dispatch(Dlt(id))
    history("/");
  }
  const remove =(item)=>{
    dispatch(Remove(item))
  }
  const history = useNavigate();


  const { id } = useParams();
  // console.log(id);
  // Get Data 
  const getdata = useSelector((state)=> state.reducer.cart);
  // console.log(getdata);

  const compare = ()=>{
    let comparedata = getdata.filter((e)=>{
      return e.id == id
    });
    setData(comparedata);
  }
  useEffect(()=>{
    compare();
  },[id])
  return (
    <>
      <section className='cardsdetails'>
        <div className='container mt-2'>
          <h2 style={{ textAlign: "center", textTransform: 'uppercase', fontSize: '35px', fontWeight: '500' }}>Your Item Details</h2>

          <div className='details-box d-flex m-5' style={{ boxShadow: '0 0 20px 4px #8080802b' }}>
            {
              data.map((ele)=>{
                return(
                  <>
                                       <div className='details-img' style={{width:'50%'}}>
                      <img className='img-fluid' src={ele.imgdata} style={{width:'100%',height:"100%"}} alt='details-img'></img>
                    </div>
                    <div className='details-content text-align-center p-5  ' style={{width:'50%'}}>
                      <table>
                        <tr>
                          <td className='pt-2'>
                            <p className='pb-2'><b>Restaurants</b> : {ele.rname}</p>
                            <p><b>Price</b> : ₹{ele.price} </p>
                            <p><b>Dish</b> : {ele.address}</p>
                            <p><b>Total</b> : ₹ 30.00  </p>
                            <div className='mt-5 d-flex justify-content-between align-items-center p-2' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                              <span style={{ fontSize: 24 }}>-</span>
                              <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                              <span onClick={()=>send(ele)} style={{ fontSize: 24 }}>+</span>

                            </div>
                          </td>
                          <td className='p-4 mb-2'>
                            <p><b>Rating</b> : <span style={{ backgroundColor: 'green', color: 'white', padding: '3px 5px' }}>{ele.rating} ★</span></p>
                            <p><b>Order Review</b> : {ele.somedata}</p>
                            <p><b>Remove</b> : <i class="bi bi-trash3-fill" onClick={()=>dlt(ele.id)} style={{ color: 'red', padding: '3px', fontSize: '20px', cursor: 'pointer' }}></i></p>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default CardDetails;




// import { useNavigate, useParams } from 'react-router-dom';
// import './CardDetails.css';
// import { useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { Dlt ,Addcart, Remove } from '../../Action/Action';
// import { useDispatch } from 'react-redux';

// const CardDetails = () => {
//   const [data, setData] = useState([0]);
  

//   const send=(e)=>{
//     console.log(e)
//     dispatch(Addcart(e))
//   }

//   const { id } = useParams()
//   // Get Data 
//   const getdata = useSelector((state) => state.reducer.cart);
//   // console.log(getdata)

//   // Remove
//   const dispatch = useDispatch();
//   const dlt = (id) => {
//     dispatch(Dlt(id))
//     history("/");
//   }
//   const remove =(item)=>{
//     dispatch(Remove(item))
//   }
//   const history = useNavigate();

//   const compare = () => {
//     let comparedata = getdata.filter((e) => {
//       return e.id === id
//     });
//     setData(comparedata);
//   }
//   useEffect(() => {
//     compare();
//   },[id])
//   return (
//     <>
//       <section className='cardsdetails'>
//         <div className='container mt-2'>
//           <h2 style={{ textAlign: "center", textTransform: 'uppercase', fontSize: '35px', fontWeight: '500' }}>Your Item Details</h2>

//           <div className='details-box d-flex m-5' style={{ boxShadow: '0 0 20px 4px #8080802b' }}>
//             {
//               data.map((ele) => {
//                 return (
//                   <>
//                     <div className='details-img'>
//                       <img className='img-fluid' src={ele.imgdata} alt='details-img'></img>
//                     </div>
//                     <div className='details-content'>
//                       <table>
//                         <tr>
//                           <td>
//                             <p className='pb-2'><b>Restaurants</b> : {ele.rname}</p>
//                             <p><b>Price</b> : ₹ {ele.price}</p>
//                             <p><b>Dish</b> : {ele.address}</p>
//                             <p><b>Total</b> : ₹  {ele.price}</p>
//                             <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
//                               <span style={{ fontSize: 24 }}  onClick={ele.qnty <=1 ? ()=>dlt(ele.id) : ()=>remove(ele)}>-</span>
//                               <span style={{ fontSize: 22 }}>{ele.qnty}</span>
//                               <span style={{ fontSize: 24 }} onClick={() => send(ele)}>+</span>

//                             </div>
//                           </td>
//                           <td>
//                             <p><b>Rating</b> : <span style={{ backgroundColor: 'green', color: 'white', padding: '3px 5px' }}>{ele.rating} ★</span></p>
//                             <p><b>Order Review</b> :{ele.somedata}</p>
//                             <p><b>Remove</b> : <i class="bi bi-trash3-fill" onClick={() => dlt(ele.id)} style={{ color: 'red', padding: '3px', fontSize: '20px', cursor: 'pointer' }}></i></p>
//                           </td>
//                         </tr>
//                       </table>
//                     </div>
//                   </>
//                 );
//               })
//             }
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default CardDetails;

