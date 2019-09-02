import React from 'react';
import { Component } from "react";
import { Grid, Card, CardHeader, CardContent, withStyles, Typography, Table, Paper, TableCell, TableHead, TableRow, TableBody, Box } from "@material-ui/core";
import Helper from '../../Helper';
import Charts from '../charts/Charts';

const styles = theme => ({
  main: {
    margin: 30,
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

  function getAchievement(){
    return ((data.real / data.target) * 100).toFixed(1);
  }

  function isWinning(){
    return data.rank == 1;
  }

  function isAchieve(){
    return getAchievement() >= 100; 
  }

  return (
    <TableRow>
      <TableCell>{data.cat}</TableCell>
      <TableCell align='right'>{data.target}</TableCell>
      <TableCell align='right'>{data.real}</TableCell>
      {isAchieve() ? 
      <TableCell align='right' style={{color: '#2e7d32'}}>{getAchievement()}%</TableCell> :
      <TableCell align='right' style={{color: '#c62828'}}>{getAchievement()}%</TableCell>}
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
  }

  render() {
    const dummyData = [
      {m:'Apr', ach:(Math.random() * (100 - 91) + 91).toFixed(0)},
      {m:'Mei', ach:(Math.random() * (100 - 91) + 91).toFixed(0)},
      {m:'Jun', ach:(Math.random() * (100 - 91) + 91).toFixed(0)},
      {m:'Jul', ach:(Math.random() * (100 - 91) + 91).toFixed(0)},
      {m:'Agu', ach:(Math.random() * (100 - 91) + 91).toFixed(0)}
    ];

    const datas = [
      {title:'Gangguan Ulang', chart:'line', color:'#1565c0', route:'/gaul/', dummyData: dummyData, source:'Nonatero'},
      {title:'TTR 3 Jam', chart:'line', color:'#2e7d32', route:'/ttr/', dummyData: dummyData, source:'Nonatero'},
      {title:'Sales', chart:'line', color:'#c62828', route:'/sales/', dummyData: dummyData, source:'CBD'},
      {title:'TTI', chart:'line', color:'#607d8b', route:'/sales/', dummyData: dummyData, source:'CBD'},
      {title:'C3MR', chart:'line', color:'#ef6c00', route:'/c3mr/', dummyData: dummyData, source:'MyBrains'}
    ];

    let helper = new Helper();
    const month = helper.getMonth(this.state.month);

    const {classes} = this.props;

    const perf = [
      {cat:'Gangguan Ulang', rank:(Math.random() * (5 - 1) + 1).toFixed(0), target:10, real:(Math.random() * (15 - 5) + 5).toFixed(2)},
      {cat:'TTR 3 Jam', rank:(Math.random() * (5 - 1) + 1).toFixed(0), target:85, real:(Math.random() * (100 - 60) + 60).toFixed(2)},
      {cat:'Sales', rank:(Math.random() * (5 - 1) + 1).toFixed(0), target:100, real:(Math.random() * (105 - 98) + 98).toFixed(2)},
      {cat:'TTI', rank:(Math.random() * (5 - 1) + 1).toFixed(0), target:100, real:(Math.random() * (105 - 98) + 98).toFixed(2)},
      {cat:'C3MR', rank:(Math.random() * (5 - 1) + 1).toFixed(0), target:97.5, real:(Math.random() * (105 - 90) + 90).toFixed(2)}
    ];

    const personil = [
      {nama:'Personil A', nik:'XXXXX', job:'Koordinator', contact:'xxxxxx@xxx.com'},
      {nama:'Personil B', nik:'XXXXX', job:'Assurance', contact:'xxxxxx@xxx.com'},
      {nama:'Personil C', nik:'XXXXX', job:'Collection', contact:'xxxxxx@xxx.com'},
      {nama:'Personil D', nik:'XXXXX', job:'Sales Force', contact:'xxxxxx@xxx.com'},
      {nama:'Personil E', nik:'XXXXX', job:'Fulfillment', contact:'xxxxxx@xxx.com'}
    ];

    let i = 1;
    return (
      <div className={classes.main}>
      <Grid spacing={2} container>
        <Grid item xs={8}>
          <Card>
            <CardHeader 
              title='Performance Monitoring'
              titleTypographyProps={{variant:'h6'}}
              subheader={'Mtd '+month+' '+this.state.year}
              subheaderTypographyProps={{variant:'button', color:'textSecondary'}}/>
            <CardContent>
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
                {perf.map(data => (
                  <PerfTable data={data}/>
                ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>
        {datas.map(data => (
        <Grid item xs={4}>
          <Charts 
            title={data.title} 
            data={data.dummyData} 
            chart={data.chart}
            color={data.color} 
            link={data.route}
            source={data.source}/>
        </Grid>
        ))}
      </Grid>
      <Grid spacing={2} container>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title='Personil TPT'/>
            <CardContent>
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
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Detail)