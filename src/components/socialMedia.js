import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'


class SocialMedia extends React.Component {
    handleColor = () => {
        console.log(this.Icons)
    }

    Icons = [
        {
            id: 1,
            icon: <BsFacebook />,
            text: 'Facebook',
            background: 'blue'
        },
        {
            id: 2,
            icon: <BsGithub />,
            text: 'Github',
            background: 'black'
        },
        {
            id: 3,
            icon: <BsLinkedin />,
            text: 'Linkedin',
            background: '#4267B2'
        }
    ]



    render() {
        return (
            <>
                <div className='position-fixed iconsDiv d-flex flex-column ' style={{ width: '10rem' }} >
                    {/* {this.Icons.map(({id , icon , text , background}) =>{
                        return(
                            <>
                            <li key={id} className='icons text-white' style={{listStyle:"none" , cursor:'pointer' }}>{text}{icon}</li>
                            </>
                        )
                    })} */}
                    <li className='icons text-right text-white fs-5 my-1  d-flex justify-content-end py-1 rounded-pill' 
                    style={{listStyle:'none', backgroundColor: '#1877f2'}}>
                        Facebook  <span className='fs-3 d-flex align-items-center px-3'><BsFacebook /></span>
                        </li>
                    <li className='icons text-right text-dark fs-5 my-1  d-flex justify-content-end py-1 rounded-pill' 
                    style={{listStyle:'none' , backgroundColor: 'whitesmoke'}}>
                        Github  <span className='fs-3 d-flex align-items-center px-3'><BsGithub /></span>
                        </li>
                    <li className='icons text-right text-white fs-5 my-1  d-flex justify-content-end py-1 rounded-pill' 
                    style={{listStyle:'none' , backgroundColor:'#0077B5'}}>
                        Linkedin <span className='fs-3 d-flex align-items-center px-3'><BsLinkedin /></span>
                        </li>

                </div>
            </>
        )
    }
}
export default SocialMedia;