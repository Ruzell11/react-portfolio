import React from 'react';


class About extends React.Component {
    render() {
        return (
            <div name='about' id='about' className='about px-5 align-items-center justify-content-center'>
                <div className="container d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-7 col-xxl-7 d-flex align-items-center justify-content-center">
                            <div>
                                <h1 className='fw-bold text-white mt-5 border-bottom w-50'>
                                    About Me
                                </h1>
                                <p className='text-secondary'>I enjoy having a mastering a new things It boosts self-esteem.Learning is about commmitment on how passionate you are on what you are doing. Having a skills does not a power , actions with skills does. Experience on learning journey is absolutely I love the most!</p>
                                <p className='text-secondary'>My goal is to have the opportunity to work for an organization that offers me the opportunity to improve my skills or learn new things. Ideally, the experiences</p>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-5 col-xxl-5 d-flex justify-content-center align-items-center'>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default About;