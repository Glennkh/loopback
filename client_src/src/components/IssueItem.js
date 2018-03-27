import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class IssueItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      item: props.item
    }
  }

  render() {
    return (
      <li className="list-group-item">
        <Link to={`/issues/${this.state.item.id}`}>{this.state.item.name}</Link>
      </li>
    )
  }
}

export default IssueItem;