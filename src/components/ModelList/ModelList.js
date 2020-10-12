import React, { Component } from 'react';
import { connect } from 'react-redux';

class ModelList extends Component {

  render() {
    return (
      <div className='model-container'>
        <div className='model-title'>
        model title
        </div>
        <div className='model-table'>
        table summary of models
          <table>
            <thead>
              <tr>
                <th>model h1</th>
                <th>mH2</th>
                <th>mH3</th>
              </tr>
            </thead>
            <tbody>
              {this.props.model.map(item => 
                <tr key={item.id}>
                  <td>{item.col_name}</td>
                  <td>{item.col_name}</td>
                  <td>{item.col_name}</td>
                </tr>  
              )}
            </tbody>
          </table>
          
        </div>
        <div className='model-chart'>
          chart with model run stats
        </div>
      </div>
    )
  }
}

const mapStoreToProps = (reduxStore) => ({
  model: reduxStore.getModel
})

export default connect(mapStoreToProps)(ModelList);