import React, { Component } from "react";
import { TableCell, withStyles, Paper, Grid, Typography, Select, FormControl, InputLabel, MenuItem, Table, TableHead, TableRow, TableBody } from "@material-ui/core";
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

class Territory extends Component {

  state = {
    class: 'A',
  }

  onClassChange = (event) => {
    this.setState({class: event.target.value});
  }

  render() {

    const classA = [
      {id: 1, name: 'TPT A-1', leader: 'Leader 1', class:'A', witel:'Witel X'},
      {id: 2, name: 'TPT A-2', leader: 'Leader 2', class:'A', witel:'Witel X'},
      {id: 3, name: 'TPT A-3', leader: 'Leader 3', class:'A', witel:'Witel X'},
    ];

    const classB = [
      {id: 1, name: 'TPT B-1', leader: 'Leader 1', class:'B', witel:'Witel X'},
      {id: 2, name: 'TPT B-2', leader: 'Leader 2', class:'B', witel:'Witel X'},
      {id: 3, name: 'TPT B-3', leader: 'Leader 3', class:'B', witel:'Witel X'},
    ];

    const classC = [
      {id: 1, name: 'TPT C-1', leader: 'Leader 1', class:'C', witel:'Witel X'},
      {id: 2, name: 'TPT C-2', leader: 'Leader 2', class:'C', witel:'Witel X'},
      {id: 3, name: 'TPT C-3', leader: 'Leader 3', class:'C', witel:'Witel X'},
    ];

    const classD = [
      {id: 1, name: 'Ubis 1', leader: 'Leader 1', class:'Datel/Ubis', witel:'Witel X'},
      {id: 2, name: 'Datel 1', leader: 'Leader 2', class:'Datel/Ubis', witel:'Witel X'},
      {id: 3, name: 'Datel 2', leader: 'Leader 3', class:'Datel/Ubis', witel:'Witel X'},
      {id: 4, name: 'Ubis 2', leader: 'Leader 4', class:'Datel/Ubis', witel:'Witel X'},
    ];

    let datas = [];

    switch(this.state.class){
      case 'A':
        datas = classA;
        break;
      case 'B':
        datas = classB;
        break;
      case 'C':
        datas = classC;
        break;
      case 'D':
        datas = classD;
        break;
      default:
        datas = classA;
        break;
    }

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
          <Grid item xs={10}>
            <Typography variant='h5'>Daftar Wilayah</Typography>
          </Grid>  
          <Grid item xs={2}>
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
        <Grid container xs={12}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <THead>No.</THead>
                <THead>Nama</THead>
                {this.state.class !== 'D' ? 
                <THead>Korter</THead> :
                <THead>Kakandatel/KaUbis</THead>}
                <THead>Kelas</THead>
                <THead>Witel</THead>
              </TableRow>
            </TableHead>
            <TableBody>
            {datas.map(data => (
              <UbisTable index={i++} data={data} />
            ))}
            </TableBody>
          </Table>
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(Territory);