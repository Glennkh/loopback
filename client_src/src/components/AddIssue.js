import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddIssue extends Component {

  addIssue(newIssue){
    axios.request({
      method: 'post',
      url:'http://localhost:3000/api/issues',
      data: newIssue
    }).then(res => {
      this.props.history.push('/');
    })
    .catch(err => console.log(err));
  }

  onSubmit(e){
    e.preventDefault();
    
    const newIssue = {
      name: this.refs.name.value,
      location: this.refs.location.value,
    }

    this.addIssue(newIssue);

  }

  render() {
    return (
      <div>
        <Link className="btn btn-sm btn-outline-primary" to="/">Back</Link>
        <h1>Add Issue</h1>

        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" ref="name"/>
            <label htmlFor="location">Location</label>
            <input type="text" className="form-control" id="location" ref="location" />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default AddIssue;