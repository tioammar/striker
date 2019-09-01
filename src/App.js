import React, { Component } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Page from './components/pages/Page';
import DetailKorter from './components/pages/DetailKorter';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  paper: {
    padding: 30,
    margin: 'auto',
    width: '80%',
    marginTop: 20,
  }
});

class App extends Component {

  render() {
    const {classes} = this.props;

    return (
      <div>
      <Router>
        <TopBar
          image={'/' + process.env.PUBLIC_URL + '920153_TIO.jpg'}
          username='Aditya'
          fullname='Aditya Amirullah'
          nik='920153'
          unit='BPP'
        />
        <Route path='/' exact component={Dashboard}/>
        <Route path='/korter' component={DetailKorter}/>
        <Route path='/perf/:type' component={Page}/>
        {/* for setting param just add /:param. 
        and get param on component by using props.match.params.param */}
      </Router>
      </div>
    )
  }
}

export default withStyles(styles)(App);
