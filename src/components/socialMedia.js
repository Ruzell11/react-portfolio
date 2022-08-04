import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin , BsFileEarmarkPersonFill } from 'react-icons/bs'


class SocialMedia extends React.Component {
    handleColor = () => {
        console.log(this.Icons)
    }
    Icons = [
        {
            id: 1,
            icon: <BsFacebook />,
            text: 'Facebook',
            link:'https://web.facebook.com/john.ruzell.ri/'
        },
        {
            id: 2,
            icon: <BsGithub />,
            text: 'Github',
            link:'https://github.com/Ruzell11'
        },
        {
            id: 3,
            icon: <BsLinkedin />,
            text: 'Linkedin',
            link:'https://www.linkedin.com/in/john-ruzell-rivera-1026b0247/'
        },
        {
            id: 4,
            icon: <BsFileEarmarkPersonFill />,
            text: 'Resume',
            link:'https://docs.google.com/uc?export=download&id=1dy3Km2HyW4cAGtfheQmn4cGeJBPGVNf2'
        }
    ]
    render() {
        return (
            <>
                <div className='position-fixed iconsDiv d-flex flex-column' style={{ width: '10rem' }} >
                    {this.Icons.map(({id , icon , text , link}) =>{
                        return(
                            <>
                            <a href={link} className='text-decoration-none'><li key={id} className='icons text-white fs-5 my-1 d-flex justify-content-end py-1 rounded-pill bg-dark' style={{listStyle:"none" , cursor:'pointer' }}>{text}<span className='fs-3 d-flex align-items-center px-3'>{icon}</span></li></a>
                            </>
                        )
                    })}
                </div>
            </>
        )
    }
}
export default SocialMedia;