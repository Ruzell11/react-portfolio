import React from 'react';
import Home from './components/Home';
import SocialMedia from './components/socialMedia';
import About from './components/About';
import Skills from './components/Skills';
import ScrollToTop from "react-scroll-to-top"



class App extends React.Component {
  closeNav = () => {
    this.props.deleteHandler()
  }
  render() {
    return (

      <div onClick={this.closeNav}>
        <ScrollToTop smooth top="30" className='bg-white' />
        <Home />
        <SocialMedia />
        <About />
        <Skills />
      </div>

    )
  }
}

export default App;
