import React from 'react';
import projectsData from './Data/projectsData';


class Project extends React.Component{
    render(){
        return (
            <div name='project' className='projects d-flex justify-content-center flex-column align-items-center ' >
                <div className="container d-flex  justify-content-center align-items-center flex-column py-5 mt-5 h-100 " >
                <div className='heading mt-5 mb-4'>
                    <h1 className='fw-bolder border-bottom border-white text-white '>Projects</h1>
                </div>
                    <div className="row ">
                        <div class="col-12 col-md-12 w-100 text-center ">
                            {projectsData.map(({ id,picture , link, projectTitle  }) => {
                                return (      
                                    <a href={link} className='text-white text-decoration-none '>
                                            <img src={picture} key={id} alt=""  height={'200px'}  className='mx-5 my-2 p-4 rounded picturePict' 
                                            style={{boxShadow:'2px 2px whitesmoke' ,  cursor:'pointer'}} />
                                            </a>
                                           
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Project