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
          <div className='model-container'>
            <div>
            model names listed here
            </div>
            <div>
              table summary of models
            </div>
            <div>
              chart with model run stats
            </div>
          </div>
          <div className='run-container'>
            <div className='list'>
              <div>
              list of recent runs

              </div>
            <ul>
              <li>run a</li>
              <li>run b</li>
              <li>run c</li>
              <li>run d</li>
            </ul>
            </div>
            <div className='graph'>
              <div>
              selected run details...

              </div>
              <div>
                table / chart
              </div>
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
