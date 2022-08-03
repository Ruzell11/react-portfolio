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
                    {this.Icons.map(({id , icon , text , background}) =>{
                        return(
                            <>
                            <li key={id} className='icons text-white fs-5 my-1 d-flex justify-content-end py-1 rounded-pill bg-dark' style={{listStyle:"none" , cursor:'pointer' }}>{text}<span className='fs-3 d-flex align-items-center px-3'>{icon}</span></li>
                            </>
                        )
                    })}
                </div>
            </>
        )
    }
}
export default SocialMedia;