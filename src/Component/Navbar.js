import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import { Dlt } from '../Action/Action';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
    const [price, setPrice ]=useState(0)
    const getdata = useSelector((state) => state.reducer.cart);
    // console.log(getdata)

    const dispatch =useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const dlt =(id)=>{
        dispatch(Dlt(id))
    }
    // Total Price 
    const total=()=>{
        let price = 0;
        getdata.map((ele)=>{
        price = ele.price+ price;
        })
        setPrice(price);
    }
    useEffect(()=>{
        total();
    },[total])
    return (
        <>
            <header className='bg-dark'>
                <div className='container'>
                    <nav class="navbar navbar-expand-lg p-0">
                        <NavLink class="navbar-brand text-white" to="/">E-Commers</NavLink>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 p-3">
                                <li class="nav-item">
                                    <NavLink class="nav-link" to="/">Shopping</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link" to="/about">About</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                            <div className='header-cart'>

                                <Badge badgeContent={getdata.length} color="primary"
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <i class="bi bi-cart-fill text-white" style={{ cursor: "pointer", fontSize: '20px' }}></i>
                                </Badge>
                                <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button', }}>
                                    {
                                        getdata.length ?
                                            <div className='menu-content' style={{ width: "24rem", padding: '10px' }}>
                                                <table className='w-100'>
                                                    <thead className='d-flex p-1 mb-2' style={{ borderBottom: '2px solid black' }}>
                                                        <tr style={{ width: '50%' }}><td>Photos</td></tr>
                                                        <tr style={{ width: '50%' }}><td>Restaurants</td></tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            getdata.map((e) => {
                                                                return (
                                                                    <>
                                                                        <tr style={{ borderBottom: '1px solid black' }}>
                                                                            <td>
                                                                                <NavLink to={`/carts/${e.id}`} onClick={handleClose}>
                                                                                    <img src={e.imgdata} alt='menu-img' className='img-fluid' style={{ width: '100px', height: '100px' }}></img>
                                                                                </NavLink>

                                                                            </td>
                                                                            <td>
                                                                                <p>{e.rname}</p>
                                                                                <p>Price :(₹) {e.price}</p>
                                                                                <p>Quantity : {e.qnty}</p>
                                                                                <p onClick={()=>dlt(e.id)}><i class="bi bi-trash3-fill"  style={{ color: 'red', padding: '3px', fontSize: '20px', cursor: 'pointer' }}></i></p>
                                                                            </td>
                                                                        </tr>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                        <p className='text-center w-100'>Total : (₹) {price}</p>
                                                    </tbody>
                                                </table>
                                            </div> :
                                            <div className='card-details p-1'>
                                                <i class="bi bi-x-lg cardclose" style={{ position: 'absolute', top: '2px', right: '20px', fontSize: '18px', padding: '5px', cursor: 'pointer', fontWeight: '700' }}
                                                    onClick={handleClose}></i>
                                                <p style={{ fontSize: '17px', padding: '10px', margin: '15px 0 0 0 ', fontWeight: '500' }}>Your Card is Empty Now..!</p>
                                            </div>
                                    }

                                </Menu>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

        </>
    )
}

export default Navbar;
