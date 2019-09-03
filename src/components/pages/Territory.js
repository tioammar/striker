import React, { Component } from "react";
import { TableCell, withStyles, Paper, Grid, Typography } from "@material-ui/core";

const styles = theme => ({
  main: {
    padding: 30,
    margin: 'auto',
    width: '80%',
    marginTop: 20,
    marginBottom: 20,
  },
  table: {
    width: '100%',
    marginTop: 20,
  }
});

const THead = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 15,
  }
}))(TableCell);

function TSelector(props){
  const select = [
    {n: 'Kelas A', v:'A'},
    {n: 'Kelas B', v:'B'},
    {n: 'Kelas C', v:'C'},
    {n: 'Datel/Ubis', v:'D'},
  ];
  
}

class Territory extends Component {

  state = {
    class: 'A',
  }

  render() {
    const {classes} = this.props;
    return (
      // Order: No. | Nama | Kepala | Kelas | Witel
      <Paper className={classes.main}>
        <Grid container xs={12}>
          <Grid item xs={8}>
            <Typography variant='h5'>Daftar Wilayah</Typography>
          </Grid>  
          <Grid item xs={4}>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(Territory);