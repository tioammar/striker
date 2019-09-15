import React from 'react';
import { Component } from "react";
import { Typography, Grid, withStyles, Table, TableHead, TableRow, TableCell, TableBody, Paper, LinearProgress } from "@material-ui/core";
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
    month: new Date().getMonth()+1,
    class: "D",
    data: [],
    isError: false,
    isLoading: false,
    title: "",
    unit: "",
  };

  componentDidMount(){
    switch(this.props.match.params.type){
      case 'sales':
        this.setState({
          title: "Sales",
          unit: "Consumer Service Treg VII",
        });
        break;
      case 'ttr':
        this.setState({
          title: "TTR 3 Jam",
          unit: "Regional Operation Center Treg VII",
        });
        break;
      case 'gaul':
        this.setState({
          title: "Gangguan Ulang",
          unit: "Regional Operation Center Treg VII",
        });
        break;
      case 'c3mr':
        this.setState({
          title: "C3MR",
          unit: "Payment Collection & Finance Treg VII",
        });
        break;
      case 'tti':
        this.setState({
          title: "TTI",
          unit: "Regional Operation Center Treg VII",
        });
        break;
      default:
        this.setState({
          title: "Sales",
          unit: "Consumer Service Treg VII",
        });
        break;
    }
    this.getData(this.state.class, this.state.month);
  }

  onClassChange = (event) => {
    this.setState({class: event.target.value});
    this.getData(event.target.value, this.state.month);
  }

  onMonthChange = (event) => {
    this.setState({month: event.target.value});
    this.getData(this.state.class, event.target.value)
  }

  onYearChange = (event) => {
    this.setState({year: event.target.value});
  }

  getData(cls, bln) {
    this.setState({isLoading: true});
    let query = "";
    cls !== 'D' ? 
      query = "http://localhost:8080/"+this.props.match.params.type+"tpt?cls="+cls+"&bln="+bln : 
      query = "http://localhost:8080/"+this.props.match.params.type+"ubis?bln="+bln;
    
    fetch(query)
      .then(response => {
        if(response.ok) return response.json();
        else throw Error(response.statusText);
      })
      .then(json => {
        this.setState({
          data: json.data,
          isLoading: false,
          isError: false,
        });
      })
      .catch(error => {
        this.setState({
          data: [],
          isLoading: false,
          isError: true,
        });
      });
  }

  render() {
    const {classes} = this.props;

    const classSelection = [
      {n:'Kelas A', v:'A'},
      {n:'Kelas B', v:'B'},
      {n:'Kelas C', v:'C'},
      {n:'Datel/Ubis', v:'D'}
    ];

    return (
      <div>
      <Paper className={classes.paper}>
      <Grid container xs={12}>
        <Grid item xs={8}>
          <Typography variant='h5'>{this.state.title}</Typography>
          <Typography variant='body2' color='textSecondary'>{this.state.unit}</Typography>
        </Grid>  
        <Grid item xs={4}>
          <Selector 
              state={this.state} 
              onClassChange={this.onClassChange}
              onMonthChange={this.onMonthChange}
              onYearChange={this.onYearChange}
              selection={classSelection}/>
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <Table className={classes.table}>
          {/*   // Order: tpt | Target | Real | Ach. | Growth  */}
          <TableHead>
            <TableRow>
              <THead>No.</THead>
              <THead>Nama</THead>
              <THead>Witel</THead>
              <THead align='right'>Target</THead>
              <THead align='right'>Realisasi</THead>
              <THead align='right'>Achievement</THead>
              <THead align='right'>Growth</THead>
            </TableRow>
          </TableHead>
          {this.state.isLoading ? 
            <LinearProgress className={classes.table}/> :
            <ErrorCatch error={this.state.isError} data={this.state.data}/>
          }
        </Table>
      </Grid>
      </Paper>
      </div>
    )
  }
}

function ErrorCatch(props){
  let i = 1;
  return (
    <TableBody>
    {props.error ? 
      <Typography>Data Belum Tersedia</Typography> :
      props.data.map(data => (
        <DataTable index={i++} data={data}/>
      ))}
    </TableBody>
  )
}

export default withStyles(styles)(Page);