import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Issues from './Issues';
import About from './About';
import IssueDetails from './IssueDetails';
import AddIssue from './AddIssue';
import EditIssue from './EditIssue';


const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Issues}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/issues/add" component={AddIssue}/>
      <Route exact path="/issues/edit/:id" component={EditIssue}/>
      <Route exact path="/issues/:id" component={IssueDetails}/>
      
    </Switch>
  </main>
);

export default Main;
