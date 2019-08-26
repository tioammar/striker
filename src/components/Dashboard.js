import React from 'react';
import { Component } from "react";
import Main from './pages/Main';
import Korter from './pages/Korter';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    margin: 20,
  }
});

class Dashboard extends Component {

  checkUser() {
    return true; // return nilai apakah Korter atau User Regional
  }

  render() {
    const {classes} = this.props;
    if(this.checkUser){
      return (
        <div className={classes.root}>
          <Main />
        </div>
      )
    } else {
      return (
        <Korter />
      )
    }
  }
}

export default withStyles(styles)(Dashboard);