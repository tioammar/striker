import React from 'react';
import { Component } from "react";
import { Typography, Grid, withStyles, Table, TableHead, TableRow, TableCell, TableBody, Paper } from "@material-ui/core";
import Selector from '../Selector';
import DataTable from '../table/DataTable';

const styles = theme => ({
  paper: {
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

class Page extends Component {

  state = {
    year: 2019,
    month: 8,
    class: 'A',
  }

  onClassChange = (event) => {
    this.setState({class: event.target.value});
  }

  onMonthChange = (event) => {
    this.setState({month: event.target.value});
  }

  onYearChange = (event) => {
    this.setState({year: event.target.value});
  }

  render() {
    const {classes} = this.props;
    let title = '';
    let unit = '';

    switch(this.props.match.params.type){
      case 'sales':
        title = 'Sales';
        unit = 'Consumer Service Regional Treg VII';
        break;
      case 'ttr':
        title = 'TTR 3 Jam';
        unit = 'Regional Operation Center Treg VII';
        break;
      case 'gaul':
        title = 'Gangguan Ulang';
        unit = 'Regional Operation Center Treg VII';
        break;
      case 'c3mr':
        title = 'C3MR';
        unit = 'Payment Collection & Finance Treg VII';
        break;
      default:
        title = '';
        unit = '';
        break;
    }

    const datasA = [
      {name: 'TPT A-1', target: 100, real: 110, growth: +15},
      {name: 'TPT A-2', target: 100, real: 103, growth: +14},
      {name: 'TPT A-3', target: 100, real: 82, growth: -17},
      {name: 'TPT A-4', target: 100, real: 69, growth: +18},
      {name: 'TPT A-5', target: 100, real: 51, growth: -13},
    ];

    const datasB = [
      {name: 'TPT B-1', target: 100, real: 102, growth: +15},
      {name: 'TPT B-2', target: 100, real: 101, growth: +14},
      {name: 'TPT B-3', target: 100, real: 82.3, growth: -17},
      {name: 'TPT B-4', target: 100, real: 79.7, growth: +18},
      {name: 'TPT B-5', target: 100, real: 51.7, growth: -13},
    ];

    const datasC = [
      {name: 'TPT C-1', target: 100, real: 100.1, growth: +15},
      {name: 'TPT C-2', target: 100, real: 99.5, growth: +14},
      {name: 'TPT C-3', target: 100, real: 85.7, growth: -17},
      {name: 'TPT C-4', target: 100, real: 84.1, growth: +18},
      {name: 'TPT C-5', target: 100, real: 50.6, growth: -13},
    ];

    let datas = [];

    switch(this.state.class){
      case 'A':
        datas = datasA;
        break;
      case 'B':
        datas = datasB;
        break;
      case 'C':
        datas = datasC;
        break;
      default:
        datas = datasA;
    }
    let i = 1;

    return (
      <div>
      <Paper className={classes.paper}>
      <Grid container xs={12}>
        <Grid item xs={8}>
          <Typography variant='h5'>{title}</Typography>
          <Typography variant='body2' color='textSecondary'>{unit}</Typography>
        </Grid>  
        <Grid item xs={4}>
          <Selector state={this.state} 
              onClassChange={this.onClassChange}
              onMonthChange={this.onMonthChange}
              onYearChange={this.onYearChange}/>
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <Table className={classes.table}>
          {/*   // Order: tpt | Target | Real | Ach. | Growth  */}
          <TableHead>
            <TableRow>
              <THead>No.</THead>
              <THead>TPT</THead>
              <THead>Datel</THead>
              <THead>Witel</THead>
              <THead align='right'>Target</THead>
              <THead align='right'>Realisasi</THead>
              <THead align='right'>Achievement</THead>
              <THead align='right'>Growth</THead>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas.map(data => (
              <DataTable index={i++} data={data} isUbis={false}/>
            ))}
          </TableBody>
        </Table>
      </Grid>
      </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(Page);