import React from 'react';
import { Component } from "react";
import Page from './common/Page';
import { withStyles, Grid, Typography } from '@material-ui/core';

const styles = theme => ({
  heading: {
    width: '80%',
    margin: 'auto',
    marginTop: 20,
  }
});

class TTR extends Component {

  render() {
    const {classes} = this.props;
    return (
      <div>
      <Grid container xs={12} sm={12} md={12} className={classes.heading}>
        <Grid item xs={12} sm={6} md={8}>
          <Typography variant='h5'>Ach. TTR 3 Jam</Typography>
          <Typography variant='body1' color='textSecondary'>Regional Operation Center Treg VII</Typography>
        </Grid>
      </Grid>
      <Page url="ttr"/>
      </div>
    )
  }
}

export default withStyles(styles)(TTR);