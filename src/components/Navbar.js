import React from 'react';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa'
import OutsideClickHandler from 'react-outside-click-handler';
import Home from '../components/Home';
import PropTypes from 'prop-types'


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef(null);
        this.state = {
            navbar: false,
        }
    }
    // setting previous state
    handleClick = (props) => {
        this.setState(prevState => ({
            navbar: !prevState.navbar,
            
        }));  
    }
    handleClose = () =>{
        this.setState({
            navbar:false
        })
    }  
    links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 5,
            link: 'About'
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
    render(props) {
        return (
            <div>
            <div className='d-flex justify-content-between align-items-center p-4 nav' style={{ backgroundColor: 'black' }}>
                <div className="logo mt-2">
                    <h2 className='name'>JRUZEll</h2>
                </div>
                <div className=' d-none d-md-none d-sm-none d-lg-flex d-xxl-flex d-xl-flex mt-2 '>
                    <ul className='  nav-link d-flex px-4 justify-content-center align-items-center '>
                        {this.links.map(({ id, link }) => {
                            return (
                                <>
                                    <li key={id} className='nav-link text-secondary fw-bolder fs-5 pe-auto' style={{ cursor: 'pointer' }}>{link} </li>
                                </>
                            )
                        })}
                    </ul>
                </div>
                {/* mobile */}
                <div onClick={this.handleClick} className='d-flex d-md-flex d-sm-flex d-lg-none d-xxl-none d-xl-none bars' >
                    {!this.state.navbar ? <FaBars style={{ color: 'whitesmoke', fontSize: '2rem' }} /> : <FaTimes style={{ color: 'whitesmoke', fontSize: '2rem' }} />}
                </div>
                        <ul className={!this.state.navbar ? 'd-none' :
                            'position-absolute top-0 start-0  d-flex justify-content-center align-items-center flex-column d-md-flex d-sm-flex d-lg-none d-xxl-none d-xl-none w-100 navMobile'
                        } style={{ marginTop: '5rem' }}>
                            {this.links.map(({ id, link }) => {
                                return (
                                    <>
                                        <li key={id} className='fs-3 py-2 nav-link text-secondary' onClick={this.handleClick} style={{cursor:'pointer'}}>{link}</li>
                                    </>
                                )
                            })}
                        </ul>
                        </div>  
                        <Home deleteHandler={this.handleClose}/>   
            </div>
        )
    }
}

export default Navbar;