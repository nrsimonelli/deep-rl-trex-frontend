import React, { Component } from 'react';
import { connect } from 'react-redux';





class RunList extends Component {

  render() {
    return (
      <div className='run-container'>
        <div className='list'>
          <div>
          list of recent runs
          </div>
        <tbody>
          {this.props.run.map(item => 
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.note}</td>
            </tr>
          )}
        </tbody>
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
    )
  }
}

const mapStoreToProps = (reduxStore) => ({
  run: reduxStore.getRun
})

export default connect(mapStoreToProps)(RunList);