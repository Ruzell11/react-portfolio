import React from 'react';
import Home from './components/Home';
import NavBar from './components/Navbar';
import SocialMedia from './components/socialMedia';



class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Home />
        <SocialMedia />
        </div>
    )
  }
}

export default App;
