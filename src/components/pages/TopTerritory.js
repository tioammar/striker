import React from 'react';
import { Component } from "react";
import TopPage from './common/TopPage';
import { withStyles, Grid, Typography } from '@material-ui/core';

const styles = theme => ({
  heading: {
    width: '80%',
    margin: 'auto',
    marginTop: 20,
  }
});

class TopTerritory extends Component {

  state = {
    class: 'D'
  }

  onClassChange = (value) => {
    this.setState({
      class: value
    })
  }

  render() {
    const {classes} = this.props;
    const group = this.state.class === "D" ? "Ubis/Datel" : "Kelas "+this.state.class;
    return (
      <div>
      <Grid container xs={12} sm={12} md={12} className={classes.heading}>
        <Grid item xs={12} sm={6} md={8}>
          <Typography variant='h5'>Total Skor</Typography>
          <Typography variant='body1' color='textSecondary'>Group: {group}</Typography>
        </Grid>
      </Grid>
      <TopPage function={this.onClassChange}/>
      </div>
    )
  }
}

export default withStyles(styles)(TopTerritory);