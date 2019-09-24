import React, { Component } from 'react';
import { withStyles, Grid, LinearProgress, Card, CardHeader, CardContent, Table, TableRow, TableCell, TableBody, Chip, Typography } from "@material-ui/core";
import Helper from '../../Helper';

const styles = theme => ({
  selector: {
    margin: 15,
  },  
  table: {
    width: '100%',
  },
  tableContainer: {
    width: '100%',
    overflowX: 'auto'
  },
  chip: {
    marginBottom: theme.spacing(1)
  },
  progress:{
    width: '75%',
    marginTop: 20,
    marginBottom: 10,
    margin: 'auto'
  },  
  warning: {
    width: '80%',
    margin: 'auto',
    color: '#d32f2f'
  }
})

// const THead = withStyles(theme => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//     fontSize: 13,
//   }
// }))(TableCell);

function TopDataView(props){
  let data = props.data;
  let index = 1;

  return (
    <Table>
      <TableBody>
      {data.map(d => (
        <TableRow>
          <TableCell>{index++}.</TableCell>
          <TableCell>{d.location}</TableCell>
          <TableCell><Typography style={{fontWeight:"bold"}}>{(d.score * 1).toFixed(2)}</Typography></TableCell>
        </TableRow>
      ))}
    </TableBody>
    </Table>
  )
}

class Main extends Component {

  state = {
    year: 2019,
    month: new Date().getMonth()+1,
    topA: [],
    topB: [],
    topC: [],
    topUbis: [],
    isLoading: false,
    isError: false
  }

  componentDidMount(){
    this.getData(this.state.month);
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

  getData(bln){
    this.setState({isLoading: true});
    let query = "http://localhost:8080/topterritory?bln="+bln;
    
    fetch(query)
      .then(response => {
        if(response.ok) return response.json();
        else throw Error(response.statusText);
      })
      .then(json => {
        this.setState({
          topA: json.classA,
          topB: json.classB,
          topC: json.classC,
          topUbis: json.ubis,
          isLoading: false,
          isError: false,
        });
        console.log(JSON.stringify(json))
      })
      .catch(error => {
        this.setState({
          data: [],
          isLoading: false,
          isError: true,
        });
      });
  }

  render(){
    const {classes} = this.props;

    let helper = new Helper();
    const month = helper.getMonth(this.state.month);

    return (
      <div>
      <Grid container className={classes.selector}>
        <Grid item xs={8}>
        </Grid>
      </Grid>
      <Grid spacing={2} container>
        <Grid item xs={12} sm={6} md={8}>
          <Card>
            <CardHeader 
              title="Top 3 Territory" 
              titleTypographyProps={{variant:'h6'}}
              subheader={'Mtd '+month+' '+this.state.year}
              subheaderTypographyProps={{variant:'button', color:'textSecondary'}}/>
            <CardContent>
              {this.state.isError ? 
              <Grid container xs={12} sm={12} md={12}>
                <Chip label="Tidak Terhubung ke Server" 
                  className={classes.warning} 
                  color="secondary" 
                  variant="outlined"/>
              </Grid> :
              <Grid xs={12} container spacing={2}>
                <Grid xs={12} md={6} item container>
                  <Grid xs={12}><Chip className={classes.chip} style={{backgroundColor: "#d32f2f", color: "white"}} label="Kelas A"/></Grid>
                  {this.state.isLoading ? 
                  <LinearProgress className={classes.progress}/> :
                  <TopDataView data={this.state.topA}/>}
                </Grid>              
                <Grid xs={12} md={6} item container>
                  <Grid xs={12}><Chip className={classes.chip} style={{backgroundColor: "#43a047", color: "white"}} label="Kelas B"/></Grid>
                  {this.state.isLoading ? 
                  <LinearProgress className={classes.progress}/> :
                  <TopDataView data={this.state.topB}/>}
                </Grid>              
                <Grid xs={12} md={6} item container>
                  <Grid xs={12}><Chip className={classes.chip} color="primary" label="Kelas C"/></Grid>
                  {this.state.isLoading ? 
                  <LinearProgress className={classes.progress}/> :
                  <TopDataView data={this.state.topC}/>}
                </Grid>              
                <Grid xs={12} md={6} item container>
                  <Grid xs={12}><Chip className={classes.chip} style={{backgroundColor: "#333333", color: "white"}} label="Ubis/Datel"/></Grid>
                  {this.state.isLoading ? 
                  <LinearProgress className={classes.progress}/> :
                  <TopDataView data={this.state.topUbis}/>}
                </Grid>
              </Grid>}
              {/* </div> */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Main);