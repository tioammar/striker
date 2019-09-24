import React, { Component } from "react";
import { TableCell, Chip, withStyles, Paper, Grid, Typography, Select, FormControl, InputLabel, MenuItem, Table, TableHead, TableRow, TableBody, LinearProgress } from "@material-ui/core";
import UbisTable from '../table/UbisTable';

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
    width: '80%',
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
    fontSize: 15,
  }
}))(TableCell);

class Territory extends Component {

  state = {
    class: 'D',
    datas: [],
    isLoading: false,
    isError: false,
  }

  componentDidMount(){
    this.getData(this.state.class);
  }

  getData(cls){
    this.setState({isLoading: true})
    let query = cls === 'D' ?
    "http://localhost:8080/ubislist" :
    "http://localhost:8080/tptlist?cls="+cls;

    fetch(query)
    .then(response => {
      if(response.ok) return response.json();
      else throw Error(response.statusText);
    })
    .then(json => {
      this.setState({
        datas: json.data,
        isLoading: false,
        isError: false,
      });
      console.log(JSON.stringify(json.data))
    })
    .catch(error => {
      this.setState({
        datas: [],
        isLoading: false,
        isError: true,
      });
    });
  }

  onClassChange = (event) => {
    this.setState({class: event.target.value});
    this.getData(event.target.value);
  }

  render() {

    const {classes} = this.props;
    const select = [
      {n: 'Kelas A', v:'A'},
      {n: 'Kelas B', v:'B'},
      {n: 'Kelas C', v:'C'},
      {n: 'Datel/Ubis', v:'D'},
    ];
    let i = 1;

    return (
      // Order: No. | Nama | Kepala | Kelas | Witel
      <Paper className={classes.main}>
        <Grid container xs={12}>
          <Grid item xs={8} sm={9} md={10}>
            <Typography variant='h5'>Daftar Wilayah</Typography>
          </Grid>  
          <Grid item xs={4} sm={3} md={2}>
            <FormControl>
              <InputLabel>Kelas</InputLabel>
              <Select 
                value={this.state.class}
                onChange={this.onClassChange}>
                {select.map(item => (
                  <MenuItem value={item.v}>{item.n}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        {this.state.isError ? 
        <Chip label="Tidak Terhubung ke Server" className={classes.warning} color="secondary" variant="outlined"/> :
        <Grid container xs={12}>
          {this.state.isLoading ? 
          <LinearProgress className={classes.progress}/> :
          <div className={classes.tableContainer}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <THead>No.</THead>
                <THead>Territory</THead>
                {/* {this.state.class !== 'D' ? 
                <THead>Korter</THead> :
                <THead>Kakandatel/KaUbis</THead>} */}
                <THead>Witel</THead>
              </TableRow>
            </TableHead>
            <TableBody>
            {this.state.datas.map(data => (
              <UbisTable index={i++} data={data} />
            ))}
            </TableBody>
          </Table>
          </div>
          }
        </Grid>
        }
      </Paper>
    )
  }
}

export default withStyles(styles)(Territory);