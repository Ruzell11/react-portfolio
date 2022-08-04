import React from 'react';
import Home from './components/Home';
import SocialMedia from './components/socialMedia';
import About from './components/About';



class App extends React.Component {
  closeNav = () =>{
    this.props.deleteHandler()
}
  render() {
    return (
      <div  onClick={this.closeNav}>
        <Home />
        <SocialMedia />
        <About />
        </div>
        
    )
  }
}

export default App;
