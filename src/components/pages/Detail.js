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
    fontSize: 15,
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

function PerfCard(props){
  
  function getAchievement(){
    return ((props.real / props.target) * 100).toFixed(1);
  }

  function isAchieve(){
    if(getAchievement() > 100){
      return true;
    } else return false;
  }

  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant='h6'>{props.cat}</Typography>
            <Typography variant='body2'><Box fontStyle='italic'>T: {props.target}</Box></Typography>
            <Typography variant='body2'><Box fontStyle='italic'>R: {props.real}</Box></Typography>
            <Typography variant='subtitle2'>Ranking: {props.rank}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='body2'>Ach. (%)</Typography>
            {isAchieve() ? 
              <Typography variant='h3' style={{color: '#2e7d32'}}>{getAchievement()}</Typography> :
              <Typography variant='h3' style={{color: '#c62828'}}>{getAchievement()}</Typography>
            }
            <Typography variant='caption' color='textSecondary'>(Mtd {props.month} 2019)</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

class DetailKorter extends Component {

  state = {
    year: 2019,
    month: 8,
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
      {title:'Sales', chart:'line', color:'#c62828', route:'/sales/', dummyData: dummyData, source:'CBD'},
      {title:'Gaul', chart:'line', color:'#1565c0', route:'/gaul/', dummyData: dummyData, source:'Nonatero'},
      {title:'TTR 3 Jam', chart:'line', color:'#2e7d32', route:'/ttr/', dummyData: dummyData, source:'Nonatero'},
      {title:'C3MR', chart:'line', color:'#ef6c00', route:'/c3mr/', dummyData: dummyData, source:'MyBrains'}
    ];

    let helper = new Helper();
    const month = helper.getMonth(this.state.month);

    const {classes} = this.props;

    const perf = [
      {cat:'Sales', rank:(Math.random() * (5 - 1) + 1).toFixed(0), target:100, real:(Math.random() * (105 - 98) + 98).toFixed(2)},
      {cat:'Gaul', rank:(Math.random() * (5 - 1) + 1).toFixed(0), target:10, real:(Math.random() * (15 - 5) + 5).toFixed(2)},
      {cat:'TTR 3 Jam', rank:(Math.random() * (5 - 1) + 1).toFixed(0), target:85, real:(Math.random() * (100 - 60) + 60).toFixed(2)},
      {cat:'C3MR', rank:(Math.random() * (5 - 1) + 1).toFixed(0), target:97.5, real:(Math.random() * (105 - 90) + 90).toFixed(2)}

    ];

    const personil = [
      {nama:'Personil A', nik:'XXXXX', job:'Koordinator', contact:'xxxxxx@xxx.com'},
      {nama:'Personil B', nik:'XXXXX', job:'Assurance', contact:'xxxxxx@xxx.com'},
      {nama:'Personil C', nik:'XXXXX', job:'Collection', contact:'xxxxxx@xxx.com'},
      {nama:'Personil D', nik:'XXXXX', job:'Sales Force', contact:'xxxxxx@xxx.com'}
    ];

    let i = 1;
    return (
      <div className={classes.main}>
      <Grid spacing={2} container>
        {perf.map(data => (
        <Grid item xs={3}>
          <PerfCard 
            cat={data.cat}
            month={month}
            rank={data.rank}
            target={data.target}
            real={data.real}/>
        </Grid>
        ))}
      </Grid>
      <Grid spacing={2} container>
        {datas.map(data => (
        <Grid item xs={6}>
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

export default withStyles(styles)(DetailKorter)