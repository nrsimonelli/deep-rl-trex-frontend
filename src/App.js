import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <div className='title'>
          <div>deep rl chrome</div>
          <div></div>
          <div>something</div>
          <div>/</div>
          <div>icons</div>
        </div>
        <div className='row-container'>
          <div className='recent-runs'>
            recent runs here
          </div>
          <div className='model-list'>
            <div className='list'>
            list
            </div>
            <div className='graph'>
            graph / chart here
            </div>
          </div>
          
          
        </div>
        <div className='footer'>
            footer here
        </div>
        
      </div>
    ); // end return
  } // end render
} // end class

export default App;
