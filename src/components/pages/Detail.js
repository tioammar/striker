import React from 'react';
import { Component } from "react";
import { Chip, LinearProgress, Grid, Card, CardHeader, CardContent, withStyles, Table, TableCell, TableHead, TableRow, TableBody, MenuItem, Select, FormControl, InputLabel, Typography } from "@material-ui/core";
import Charts from '../charts/Charts';
import Helper from '../../Helper';

const styles = theme => ({
  main: {
    margin: 30,
  },
  selector: {
    margin: 15,
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
    fontSize: 14,
  }
}))(TableCell);

function PersonilTable(props){
  const index = props.index;
  const personil = props.data;

  return (
    <TableRow>
      <TableCell>{index}.</TableCell>
      <TableCell>{personil.nama}</TableCell>
      <TableCell align='right'>{personil.nik}</TableCell>
      <TableCell align='right'>{personil.job}</TableCell>
      <TableCell align='right'>{personil.contact}</TableCell>
    </TableRow>
  )
}

function PerfTable(props){

  const data = props.data;

  function isWinning(){
    return Number(data.rank) === 1;
  }

  function isAchieve(){
    return data.score >= 100; 
  }

  return (
    <TableRow>
      <TableCell>{data.indikator}</TableCell>
      <TableCell align='right'>{data.target}</TableCell>
      <TableCell align='right'>{data.real}</TableCell>
      {isAchieve() ? 
      <TableCell align='right' style={{color: '#2e7d32'}}>{(data.score*1).toFixed(2)}%</TableCell> :
      <TableCell align='right' style={{color: '#c62828'}}>{(data.score*1).toFixed(2)}%</TableCell>}
      {isWinning() ?
      <TableCell align='right' style={{fontWeight: 'bolder', color: '#2e7d32'}}>{data.rank}</TableCell> :
      <TableCell align='right' style={{fontWeight: 'bolder', color: '#c62828'}}>{data.rank}</TableCell>}
    </TableRow>
  )
}

class Detail extends Component {

  state = {
    year: 2019,
    month: new Date().getMonth()+1,
    isLoading: false,
    isError: false,
    position: [],
    sales: [],
    ttr: [],
    gaul: [],
    c3mr: [],
    location: "",
    witel: ""
  }

  componentDidMount(){
    this.getData();
  }

  getData(){
    this.setState({isLoading: true});
    let query = "http://localhost:8080/"+this.props.match.params.type+"detail?id="+this.props.match.params.id+"&bln="+this.state.month;
    fetch(query)
      .then(response => {
        if(response.ok) return response.json();
        else throw Error(response.statusText);
      })
      .then(json => {
        this.setState({
          position: json.currentPosition,
          sales: json.salesTrend,
          ttr: json.ttrTrend,
          gaul: json.gaulTrend,
          c3mr: json.c3mrTrend,
          location: json.location,
          witel: json.witel,
          isLoading: false,
          isError: false,
        });
      })
      .catch(error => {
        this.setState({
          position: [],
          isLoading: false,
          isError: true,
        });
      });
  }

  onMonthChange = (event) => {
    this.setState({month: event.target.value});
  }

  render() {
    let helper = new Helper();
    const month = helper.getMonth(this.state.month);

    const datas = [
      {title:'Gangguan Ulang', chart:'line', color:'#1565c0', route:'/gaul/', dummyData: this.state.gaul, source:'Nonatero', val:'%'},
      {title:'TTR 3 Jam', chart:'line', color:'#2e7d32', route:'/ttr/', dummyData: this.state.ttr, source:'Nonatero', val:'%'},
      {title:'Sales', chart:'line', color:'#c62828', route:'/sales/', dummyData: this.state.sales, source:'CBD', val:'ssl'},
      {title:'C3MR', chart:'line', color:'#ef6c00', route:'/c3mr/', dummyData: this.state.c3mr, source:'MyBrains', val:'%'}
    ];
    const {classes} = this.props;

    const personil = [
      {nama:'Personil A', nik:'XXXXX', job:'Koordinator', contact:'xxxxxx@xxx.com'},
      {nama:'Personil B', nik:'XXXXX', job:'Assurance', contact:'xxxxxx@xxx.com'},
      {nama:'Personil C', nik:'XXXXX', job:'Collection', contact:'xxxxxx@xxx.com'},
      {nama:'Personil D', nik:'XXXXX', job:'Sales Force', contact:'xxxxxx@xxx.com'},
      {nama:'Personil E', nik:'XXXXX', job:'Fulfillment', contact:'xxxxxx@xxx.com'}
    ];

    const months = [
      {n: 'September', v: 9},
      {n: 'Oktober', v: 10},
      {n: 'November', v: 11},
      {n: 'Desember', v: 12},
    ];

    let i = 1;
    return (
      <div className={classes.main}>
      {/* <Typography>{this.state.type} id: {this.state.id}</Typography> */}
      {/* <Grid container className={classes.selector}>
        <Grid item xs={4}>
          <FormControl>
            <InputLabel>Bulan</InputLabel>
            <Select 
              value={this.state.month}
              onChange={this.onMonthChange}>
              {months.map(month => (
                <MenuItem value={month.v}>{month.n}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid> */}
      {this.state.isLoading ? 
      <LinearProgress className={classes.progress}/> :
      <div>
      {this.state.isError ?
      <Grid container xs={12} sm={12} md={12}>
        <Chip label="Tidak Terhubung ke Server" 
          className={classes.warning} 
          color="secondary" 
          variant="outlined"/>
      </Grid> :
      <Grid spacing={2} container>
        <Grid item xs={12} sm={8} md={8}>
          <Card>
            <CardContent>          
              <Typography variant='h5'>{this.state.location}</Typography>
              <Typography variant='body1' color='textSecondary'>WITEL {this.state.witel} (Mtd {month})</Typography>
              <div className={classes.tableContainer}>
              <Table>
                <TableHead>
                  <TableRow>
                    <THead>Kategori</THead>
                    <THead align='right'>Target</THead>
                    <THead align='right'>Realisasi</THead>
                    <THead align='right'>Achievement</THead>
                    <THead align='right'>Ranking</THead>
                  </TableRow>
                </TableHead>
                <TableBody>
                {this.state.position.map(data => (
                  <PerfTable data={data}/>
                ))}
                </TableBody>
              </Table>
              </div>
            </CardContent>
          </Card>
        </Grid>
        {datas.map(data => (
        <Grid item xs={12} sm={6} md={4}>
          <Charts 
            title={data.title} 
            data={data.dummyData} 
            chart={data.chart}
            color={data.color} 
            link={data.route}
            source={data.source}/>
        </Grid>
        ))}
        {/* <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader 
              title='Network Reporting'
              titleTypographyProps={{variant: 'h6'}}
              subheader='Source: Regional Network Operation Treg VII'
              subheaderTypographyProps={{variant:'caption', color:'textSecondary'}}/>
          </Card>
        </Grid> */}
      </Grid>}
      </div>}
      {/* <Grid spacing={2} container>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title='Personil'
              titleTypographyProps={{variant: 'h6'}}/>
            <CardContent>
              <div className={classes.tableContainer}>
              <Table>
                <TableHead>
                  <TableRow>
                    <THead>No. </THead>
                    <THead>Nama</THead>
                    <THead align='right'>NIK</THead>
                    <THead align='right'>Fungsi</THead>
                    <THead align='right'>Kontak</THead>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {personil.map(data => (
                  <PersonilTable index={i++} data={data}/>
                  ))}
                </TableBody>
              </Table>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid> */}
      </div>
    )
  }
}

export default withStyles(styles)(Detail)