import React from 'react';
import { Component } from "react";
import { Typography, Grid, withStyles, Table, TableHead, TableRow, TableCell, TableBody, Paper, LinearProgress, Button, Chip } from "@material-ui/core";
import Selector from '../Selector';
import DataTable from '../table/DataTable';

const styles = theme => ({
  paper: {
    padding: 30,
    margin: 'auto',
    width: '80%',
    marginTop: 20,
    marginBottom: 20
  },
  table: {
    width: '100%'
  },
  tableContainer: {
    marginTop: 20,
    width: '100%',
    overflowX: 'auto'
  },
  progress: {
    width: '75%',
    marginTop: 20,
    marginBottom: 10,
    margin: 'auto'
  },  
  warning: {
    width: '45%',
    marginTop: 20,
    marginBottom: 10,
    margin: 'auto',
    color: '#d32f2f'
  }
});

const THead = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 13,
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

  componentWillReceiveProps(){
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
  }

  onClassChange = (event) => {
    this.setState({class: event.target.value});
    // this.getData(event.target.value, this.state.month);
  }

  onMonthChange = (event) => {
    this.setState({month: event.target.value});
    // this.getData(this.state.class, event.target.value)
  }

  onYearChange = (event) => {
    this.setState({year: event.target.value});
  }

  onSubmitClicked = (event) => {
    this.getData(this.state.class, this.state.month);
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
      <Grid container xs={12} md={12} spacing={1}>
        <Grid item xs={12} sm={6} md={8}>
          <Typography variant='h5'>{this.state.title}</Typography>
          <Typography variant='body2' color='textSecondary'>{this.state.unit}</Typography>
        </Grid>  
        <Grid item xs={9} sm={4} md={3}>
          <Selector 
              state={this.state} 
              onClassChange={this.onClassChange}
              onMonthChange={this.onMonthChange}
              selection={classSelection}/>
        </Grid>
        <Grid item xs={3} sm={2} md={1}>
          <Button variant="contained" style={{backgroundColor: '#388e3c', color: 'white', marginTop: '20px'}} onClick={this.onSubmitClicked}>Submit</Button>
        </Grid>
      </Grid>
      <Grid container xs={12} sm={12} md={12}>
        {this.state.isLoading ?
        <LinearProgress className={classes.progress}/> :
        <DataView classes={classes} error={this.state.isError} data={this.state.data}/>}
      </Grid>
      </Paper>
      </div>
    )
  }
}

function DataView(props){
  let i = 1;
  const classes = props.classes;
  return (
    props.error ? 
    <Chip label="Data Tidak Termuat" className={classes.warning} color="secondary" variant="outlined"/> :
    <div className={classes.tableContainer}>
    <Table className={classes.table}>
      {/*   // Order: tpt | Target | Real | Ach. | Growth  */}
      <TableHead>
        <TableRow>
          <THead>No.</THead>
          <THead>Nama</THead>
          {/* <THead>Witel</THead> */}
          <THead align='right'>Target</THead>
          <THead align='right'>Realisasi</THead>
          <THead align='right'>Achievement</THead>
          <THead align='right'>Growth</THead>
        </TableRow>
      </TableHead> 
      <TableBody>
        {props.data.map(data => (
        <DataTable index={i++} data={data}/>
        ))}
      </TableBody>
    </Table>
    </div>
  )
}

export default withStyles(styles)(Page);