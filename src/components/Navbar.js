import React from 'react';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa'


class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            navbar: false,
            show: false
        }
    }
    // setting previous state
    handleClick = () => {
        this.setState(prevState => ({
            navbar: !prevState.navbar
        }));
    }
    links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'Skills'
        },
        {
            id: 3,
            link: 'Project'
        },
        {
            id: 4,
            link: 'Contact'
        }
    ]

    render() {
        return (
            <div className='d-flex justify-content-between align-items-center p-4 nav position-fixed w-100' style={{ backgroundColor: 'black' }}>
                <div className="logo mt-2">
                    <h2 className='name'>JRUZEll</h2>
                </div>
                    <div className=' d-none d-md-none d-sm-none d-lg-flex d-xxl-flex d-xl-flex mt-2 '>
                        <ul className='  nav-link d-flex px-4 justify-content-center align-items-center '>
                            {this.links.map(({id , link}) => {
                                return (
                                    <>
                                        <li key={id}>{link}</li>
                                    </>
                                )
                            })}
                        </ul>
                </div>
                <div onClick={this.handleClick} className='d-flex d-md-flex d-sm-flex d-lg-none d-xxl-none d-xl-none bars'>
                    {!this.state.navbar ? <FaBars style={{ color: 'whitesmoke', fontSize: '2rem' }} /> : <FaTimes style={{ color: 'whitesmoke', fontSize: '2rem' }} />}
                </div>

                <ul className={!this.state.navbar ? 'd-none' :
                    'position-absolute top-0 start-0  d-flex justify-content-center align-items-center flex-column d-md-flex d-sm-flex d-lg-flex d-xxl-none d-xl-none'
                } style={{ backgroundColor: 'black', height:'100vh', width:'100vw'}}>
                    <div onClick={this.handleClick}>
                    {this.links.map(({id , link}) => {
                                return (
                                    <>
                                        <li key={id} className='fs-3 py-4'>{link}</li>
                                    </>
                                )
                            })}
                    </div>
                </ul>
            </div>
        )
    }
}
export default Navbar;