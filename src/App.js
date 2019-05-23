import React from 'react';

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Stats from "./components/Stats";
import Activity from "./components/Activity";

import './App.css';

class App extends React.Component {
  render() {
    return(
        <div className="body">
          <Sidebar/>
          <div className='main'>
          <Header/>
          <Profile/>
          <Stats/>
          <Activity/>
          </div>
        </div>
    );
  }
}

export default App;