import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class EditIssue extends Component {

  constructor(props){
    super(props);
    this.state = {
      id:'',
      name:'',
      location:''
    }
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount(){
    this.getIssueDetails();
  }

  onChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  getIssueDetails(){
    let issueId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/issues/${issueId}`)
    .then(res => {
      this.setState({
        id: res.data.id,
        name: res.data.name,
        location: res.data.location
      });
    })
    .catch(err => console.log(err));
  }

  editIssue(newIssue){
    axios.request({
      method: 'put',
      url:`http://localhost:3000/api/issues/${this.state.id}`,
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

    this.editIssue(newIssue);

  }

  render() {
    return (
      <div>
        <Link className="btn btn-sm btn-outline-primary" to="/">Back</Link>
        <h1>Edit Issue</h1>

        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" className="form-control" ref="name" value={this.state.name} onChange={this.onChange}/>
            <label htmlFor="location">Location</label>
            <input type="text" name="location" className="form-control" ref="location" value={this.state.location} onChange={this.onChange}/>
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default EditIssue;