import React, { Component } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import C3MR from './components/pages/C3MR';
import TTR from './components/pages/TTR';
import Gaul from './components/pages/Gaul';
import Sales from './components/pages/Sales';
import Detail from './components/pages/Detail';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Korter from './components/pages/Korter';

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
        <Route path='/korter' component={Korter}/>   
        <Route path='/sales' component={Sales}/>
        <Route path='/gaul' component={Gaul}/>
        <Route path='/ttr' component={TTR}/>
        <Route path='/c3mr' component={C3MR}/>
        <Route path='/detail/:id' component={Detail}/>
        {/* for setting param just add /:param. 
        and get param on component by using props.match.params.param */}
      </Router>
      </div>
    )
  }
}

export default withStyles(styles)(App);
