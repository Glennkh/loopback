import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class IssueDetails extends Component {

  constructor(props){
    super(props);
    this.state = {
      details: ''
    }
  }

  componentWillMount(){
    this.getIssue();
  }

  getIssue(){
    let issueId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/issues/${issueId}`)
    .then(res => {
      this.setState({details: res.data}, () => {
        // console.log(this.state);
      })
    })
    .catch(err => console.log(err));
  }

  onDelete(){
    let issueId = this.state.details.id;
    axios.delete(`http://localhost:3000/api/issues/${issueId}`)
    .then(res => {
      this.props.history.push('/');
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Link className="btn btn-sm btn-outline-primary" to="/">Back</Link>
        <h1>{this.state.details.name}</h1>
        <ul className="list-group">
          <li className="list-group-item">
            Location: 
            {this.state.details.location}
            <div className="float-right">
              <Link className="btn btn-sm btn-outline-primary" to={`/issues/edit/${this.state.details.id}`}>Edit</Link>
              <button onClick={this.onDelete.bind(this)} className="btn btn-sm btn-outline-danger">Delete</button>
            </div>
          </li>
        </ul>
        
      </div>
    )
  }
}

export default IssueDetails;