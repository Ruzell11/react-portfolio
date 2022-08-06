import React from 'react';
import emailjs from 'emailjs-com'



class Contact extends React.Component {
        sendEmail = (e) => {
            e.preventDefault()
            emailjs.sendForm('service_wx7r3dd' , 'template_rflflos' , e.target , 'gu8EcL90zs64UvE3g')
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
        }


    
    render() {
        return (
            <div name='contact' className='contact d-flex justify-content-center align-items-center flex-column px-5 pt-5 text-white' style={{ minHeight: '100vh' }}>
                <form action='' 
                className='d-flex justify-content-center align-items-center flex-column bg-transparent d-inline-block border border-dark p-5'
                onSubmit={this.sendEmail}>
                    <h1 className="heading text-center mb-5 border-bottom border-secondary fw-bolder">Contact Us</h1>
                    <div className='half'>
                        <div className="item my-2">
                            <label for='name' className='my-1'>Name:</label>
                            <input type="text" name='name' id='name' className='w-100' />
                        </div>
                        <div className="item my-2">
                            <label for='Email' className='my-1'>Email:</label>
                            <input type="text" id='email' name='email' className='w-100' />
                        </div>
                    </div>
                    <div className="full my-2">
                        <label for="message" className='my-1'>Message:</label>
                        <textarea name="message" id="message"  className='w-100'></textarea>
                    </div>
                    <div className="action">
                        <button  type='submit' className='btn btn-dark'>Send Message</button>
                    </div>
                    </form>
                </div>
            
        )
    }
}

export default Contact;