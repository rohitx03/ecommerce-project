import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <>
            {/* <section className='contact-banner'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1> Contact Us</h1>

                        </div>
                    </div>
                </div>
            </section> */}

            <section className='contact-from my-5'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-lg-6 col-md-12 col-xs-12 col-sm-12'>
                            <div className='form-box'>
                                <div className='row'>
                                    <div className='col-lg-12 col-md-12 col-xs-12'>
                                        <h2 className='form-heading'>Get In Touch</h2>
                                        <p className='heading-para'>Let's know more about you !</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12 col-md-12 col-12'>
                                        <div className='input-box'>
                                            <input className='text me-4' type='text' placeholder='First Name' required></input>
                                            <input className='text' type='text' placeholder='Last Name'></input>
                                            <input className='text me-4' type='email' placeholder='Email'></input>
                                            <input className='text' type='tel' placeholder='Phone'></input>
                                            <textarea className='text-area' placeholder='Message' color='4' rows='4' ></textarea>

                                            <button className='btn' herf=''>Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-xs-12 col-sm-12 p-5 contact-content-box' style={{    backgroundColor:'#00b5ff38'}}>
                            <div className='contact-information'>
                                <h2 className='info-heading'>Contact Information</h2>
                                <ul>
                                    <li>Xyz Street, Xys City, Xyz State,<br></br> India, Pincode-000000</li>
                                    <li><a href='tel:9779026425'>Phone:- (123) 456 7890</a></li>
                                    <li><a href='mailto:rohit.sagar.x03@gmail.com'>Email:- rohit.sagar.x03@gmail.com</a></li>
                                </ul>
                            </div>
                            <div className='social-info'>
                                <h2 className='social-heading'>Follow Us</h2>
                                <ul className='d-flex ' style={{justifyContent:'space-between'}}> 
                                    <li>
                                    <a target="blank" href='https://twitter.com/'>Twitter</a>
                                    </li>
                                    <li>
                                    <a target="blank" href='https://www.facebook.com/'>Facebook</a>
                                    </li>
                                    <li>
                                    <a target="blank" href='https://www.linkedin.com/'>Linkedin</a>
                                    </li>
                                    <li>
                                    <a target="blank" href='https://www.instagram.com/'>Instagram</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='row my-5'>
                        <div className='col-12'>
                            <div className='contact-map'>
                            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12536644.713138236!2d73.42978826712684!3d24.178349708151615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1666803645089!5m2!1sen!2sin" style={{border:'0', width:'100%',height:'450px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Contact;
