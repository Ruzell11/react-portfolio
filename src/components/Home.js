import React from 'react'
import Blank from '../assets/blank.jpg'
import { AiOutlineRight } from 'react-icons/ai';
class Home extends React.Component {
    
    render() {
        return (
            <div name='home' id='home' className='home px-5 align-items-center justify-content-center'>
                <div className="container d-flex justify-content-center align-items-center" style={{height:'80vh'}}>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 d-flex align-items-center justify-content-center">
                            <div>
                                <h1 className='fw-bolder text-white mt-5'>
                                    I'm a Full Stack Developer
                                </h1>
                                <p className='text-secondary fs-4 my-3'>
                                    I like coding things from scratch! I enjoy bringing my ideas to life. Languages I Speak HTML, CSS, Javascript , React Dev Tools VSCode Bootstrap GitHub
                                </p>
                                <button className='btn btnPortfolio rounded text-white fs-5 fw-light mb-3' style={{ width: '15rem' }}>Portfolio</button>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 d-flex justify-content-center align-items-center'>
                            <img src={Blank} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;