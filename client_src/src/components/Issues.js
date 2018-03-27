import React, { Component } from 'react';
import axios from 'axios';
import IssueItem from './IssueItem';

class Issues extends Component {

  constructor(){
    super();
    this.state = {
      issues: []
    }
  }
  
  getIssues(){
    axios.get('http://localhost:3000/api/issues')
    .then(res => {
      this.setState({issues: res.data}, () => {
        // console.log(this.state);
      })
    })
    .catch(err => console.log(err));
  }

  componentWillMount(){
    this.getIssues();
  }

  render() {
    const issues = this.state.issues;
    return (
      <div>
        <h1>Issues</h1>
        <ul className="list-group">
          {issues.map((issue, i)=> {
            return(
              <IssueItem key={issue.id} item={issue} />
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Issues;
