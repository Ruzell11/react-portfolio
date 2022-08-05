import React from 'react';
import skillsInfo from './Data/skillsInfo';

class Skills extends React.Component {
   constructor(){
    super();
    this.state = {
        data : []
    }
   }
    render() {
        return (
            <div name='skills' className='skills d-flex justify-content-center flex-column align-items-center ' >
                
                <div className="container d-flex  justify-content-center align-items-center flex-column py-5 mt-5 h-100 " >
                <div className='heading mt-5'>
                    <h1 className='fw-bolder border-bottom border-white'>Technologies</h1>
                </div>
                    <div className="row row-cols-3">
                        <div class="col-12 col-md-12  text-center my-1 ">
                            {skillsInfo.map(({ id, logo, boxShadow }) => {
                                return (
                                    <img src={logo} key={id} alt="" width={'200px'} height={'200px'} className='mx-5 my-5 p-4 rounded pict' style={{boxShadow:boxShadow , cursor:'pointer'}} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default Skills;