import React from 'react';
import Html from '../assets/HTML.png';
import Css from '../assets/css.jpg';
import Js from '../assets/javascript.png';
import jquery from '../assets/jquery.png';
import bootstrap from '../assets/bootstrap.png'
import reactLogo from '../assets/react.png'
import php from '../assets/php.png'
import sql from '../assets/mysql.png'






class Skills extends React.Component {
    skills = [
        {
            id: 1,
            logo: Html,
            boxShadow:'5px 10px #ffa500'
        },
        {
            id: 2,
            logo: Css,
            boxShadow:'5px 10px #1e90ff'
        },

        {
            id: 3,
            logo: Js,
            boxShadow:'5px 10px #ffff00'
        },
        {
            id: 4,
            logo: jquery,
            boxShadow:'5px 10px #ffff00'
        },
        {
            id: 5,
            logo: bootstrap,
            boxShadow:'5px 10px #9400d3'
        },
        {
            id: 6,
            logo: reactLogo,
            boxShadow:'5px 10px #87cefa'
        },
        {
            id: 7,
            logo: php,
            boxShadow:'5px 10px #4f5b93'
        },
        {
            id: 8,
            logo: sql,
            boxShadow:'5px 10px #f29111'
        }
    ]
    render() {
        return (
            <div name='skills' className='skills d-flex justify-content-center flex-column align-items-center ' >
                
                <div className="container d-flex  justify-content-center align-items-center flex-column py-5 mt-5 h-100 " >
                <div className='heading'>
                    <h1 className='fw-bolder'>Skills</h1>
                </div>
                    <div className="row row-cols-3">
                        <div class="col-12 col-md-12  text-center my-1 ">
                            {this.skills.map(({ id, logo, boxShadow }) => {
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