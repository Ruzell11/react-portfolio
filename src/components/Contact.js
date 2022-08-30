import React, { Component } from 'react';
import axious, { Axios } from 'axios'



class Contact extends React.Component {
 
   

    render() {
        return (
            <div name='contact' className='contact d-flex justify-content-center align-items-center flex-column px-5 pt-5 text-white' style={{ minHeight: '100vh' }}>
                <form action=''
               
                    className='d-flex justify-content-center align-items-center flex-column bg-transparent d-inline-block border border-dark p-5'
                >
                    <h1 className="heading text-center mb-5 border-bottom border-secondary fw-bolder">Contact Us</h1>
                    <div className='half'>
                        <div className="item my-2">
                            <label for='name' className='my-1'>Name:</label>
                            <input type="text"
                   
                                id='name'
                                className='w-100'
                                onChange={this.handleChange}
                             
                            />
                        </div>
                        <div className="item my-2">
                            <label for='Email' className='my-1'>Email:</label>
                            <input
                                type="text"
                                id='email' 
                     
                                className='w-100'
                                onChange={this.handleChange}
                                
                            />
                        </div>
                    </div>
                    <div className="full my-2">
                        <label for="message" className='my-1'>Message:</label>
                        <textarea
                            type='text'
                
                            id="message"
                            className='w-100'
                            onChange={this.handleChange}
                          
                        >

                        </textarea>
                    </div>
                    <div className="action">
                        <button type='submit' className='btn btn-dark' >Send Message</button>
                    </div>
                </form>
            </div>

        )
    }
}

export default Contact;