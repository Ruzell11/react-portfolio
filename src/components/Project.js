import React from 'react';
import projectsData from './Data/projectsData';


class Project extends React.Component{
    render(){
        return (
            <div name='project' className='projects d-flex justify-content-center align-items-center h-100 flex-column' >
                <div className="container d-flex  justify-content-center align-items-center flex-column py-5 mt-5 h-100 " >
                <div className='heading mt-5 mb-4'>
                    <h1 className='fw-bolder border-bottom border-white text-white '>Projects</h1>
                </div>
                    <div className="row ">
                        <div class="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6s w-100 text-center skills-picture" >
                            {projectsData.map(({ id,picture , link, projectTitle , Technologies  }) => {
                                return (          
                                <div className='text-white bg-black px-2 rounded' style={{boxShadow:'2px 2px yellow'}} >
                                    <a href={link} className='text-white text-decoration-none '><img src={picture} key={id} alt=""  className='w-100 my-2 p-4 rounded picturePict' 
                                            style={{boxShadow:'2px 2px whitesmoke' ,  cursor:'pointer'}} /> 
                                             </a>
                                             <div className='projectInfo'>
                                             <h5 className='projectTitle'>{projectTitle}</h5> 
                                            <p className='technologies text-uppercase text-secondary fw-bol text-decoration-underline'><small className='fw-bolder'>Technologies: </small>{Technologies}</p>
                                                </div>
                                         
                                            </div> 
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