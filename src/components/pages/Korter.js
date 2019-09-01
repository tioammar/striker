import React from 'react';
import { Component } from "react";
import { Typography, Grid, withStyles, Table, TableHead, TableRow, TableCell, TableBody, Paper, MenuItem, Select, FormControl, InputLabel } from "@material-ui/core";
import Selector from '../Selector';
import TptTable from '../table/TptTable';

const styles = theme => ({
  paper: {
    padding: 30,
    margin: 'auto',
    width: '80%',
    marginTop: 20,
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

class Korter extends Component {

  state = {
    class: 'A',
  }

  onClassChange = (event) => {
    this.setState({class: event.target.value});
  }

  render() {
    const {classes} = this.props;

    const tptA = [
      {i: 1, tpt:'TPT 1', witel:'Witel A', datel:'Datel A', class:'A'},
      {i: 2, tpt:'TPT 2', witel:'Witel B', datel:'Datel B', class:'A'},
      {i: 3, tpt:'TPT 3', witel:'Witel C', datel:'Datel C', class:'A'},
    ];
    const tptB = [
      {i: 1, tpt:'TPT 1', witel:'Witel A', datel:'Datel A', class:'B'},
      {i: 2, tpt:'TPT 2', witel:'Witel B', datel:'Datel B', class:'B'},
      {i: 3, tpt:'TPT 3', witel:'Witel C', datel:'Datel C', class:'B'},
    ];
    const tptC = [
      {i: 1, tpt:'TPT 1', witel:'Witel A', datel:'Datel A', class:'C'},
      {i: 2, tpt:'TPT 2', witel:'Witel B', datel:'Datel B', class:'C'},
      {i: 3, tpt:'TPT 3', witel:'Witel C', datel:'Datel C', class:'C'},
    ];

    let datas = [];
    let isOnlyClass = true;

    switch(this.state.class){
      case 'A':
        datas = tptA;
        break;
      case 'B':
        datas = tptB;
        break;
      case 'C':
        datas = tptC;
        break;
      default:
        datas = tptA;
    }
    let i = 1;
    return (
      <div>
      <Paper className={classes.paper}>
      <Grid container xs={12}>
        <Grid item xs={9}>
          <Typography variant='h5'>Daftar TPT</Typography>
          {/* blank */}
        </Grid>
        <Grid item xs={3} alignItems='flex-end'>
          <FormControl>
            <InputLabel>Kelas</InputLabel>
            <Select 
              value={this.state.class}
              onChange={this.onClassChange}>
              <MenuItem value='A'>Kelas A</MenuItem>
              <MenuItem value='B'>Kelas B</MenuItem>
              <MenuItem value='C'>Kelas C</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <Table className={classes.table}>
          {/*   // Order: tpt | Target | Real | Ach. | Growth  */}
          <TableHead>
            <TableRow>
              <THead>No.</THead>
              <THead>TPT</THead>
              <THead>Witel</THead>
              <THead>Datel</THead>
              <THead>Kelas</THead>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas.map(data => (
              <TptTable index={i++} data={data}/>
            ))}
          </TableBody>
        </Table>
      </Grid>
      </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(Korter);