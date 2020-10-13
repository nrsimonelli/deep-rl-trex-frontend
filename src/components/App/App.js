import React, { Component } from 'react';
import './App.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import ModelList from '../ModelList/ModelList';
import RunList from '../RunList/RunList';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'GET_RUN' });
    this.props.dispatch({ type: 'GET_MODEL' });
  }

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
          <ModelList />
          <RunList />
        </div>
        <div className='footer'>
            footer here
        </div>
        
      </div>
    ); // end return
  } // end render
} // end class

export default connect(mapStoreToProps)(App);
