import React, { Component } from 'react';
import { withStyles, Grid, Card, CardHeader, CardContent, Table, TableHead, TableRow, TableCell, TableBody, Typography } from "@material-ui/core";
import Charts from '../charts/Charts';
import Selector from '../Selector';
import TopTable from '../table/TopTable';
import Helper from '../../Helper';

const styles = theme => ({
  selector: {
    margin: 15,
  },  
  table: {
    width: '100%',
  }
})

const THead = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 14,
  }
}))(TableCell);

class Main extends Component {

  state = {
    year: 2019,
    class: 'A',
    month: new Date().getMonth()+1,
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

  // groupSTOtoTPT() {

  // }

  render(){
    const {classes} = this.props;

    const c3mrA = [      
      {name:'TPT A-1', ach:(Math.random() * (100 - 91) + 91).toFixed(2)},
      {name:'TPT A-2', ach:(Math.random() * (90 - 81) + 81).toFixed(2)},
      {name:'TPT A-3', ach:(Math.random() * (80 - 71) + 71).toFixed(2)},
      {name:'TPT A-4', ach:(Math.random() * (70 - 61) + 61).toFixed(2)}
    ]; 
    const c3mrB = [      
      {name:'TPT B-1', ach:(Math.random() * (100 - 91) + 91).toFixed(2)},
      {name:'TPT B-2', ach:(Math.random() * (90 - 81) + 81).toFixed(2)},
      {name:'TPT B-3', ach:(Math.random() * (80 - 71) + 71).toFixed(2)},
      {name:'TPT B-4', ach:(Math.random() * (70 - 61) + 61).toFixed(2)},
    ];
    const c3mrC = [      
      {name:'TPT C-1', ach:(Math.random() * (100 - 91) + 91).toFixed(2)},
      {name:'TPT C-2', ach:(Math.random() * (90 - 81) + 81).toFixed(2)},
      {name:'TPT C-3', ach:(Math.random() * (80 - 71) + 71).toFixed(2)},
      {name:'TPT C-4', ach:(Math.random() * (70 - 61) + 61).toFixed(2)},
    ];

    const salesA = [      
      {name:'TPT A-1', ach:(Math.random() * (100 - 91) + 91).toFixed(2)},
      {name:'TPT A-2', ach:(Math.random() * (90 - 81) + 81).toFixed(2)},
      {name:'TPT A-3', ach:(Math.random() * (80 - 71) + 71).toFixed(2)},
      {name:'TPT A-4', ach:(Math.random() * (70 - 61) + 61).toFixed(2)},
    ]; 
    const salesB = [      
      {name:'TPT B-1', ach:(Math.random() * (100 - 91) + 91).toFixed(2)},
      {name:'TPT B-2', ach:(Math.random() * (90 - 81) + 81).toFixed(2)},
      {name:'TPT B-3', ach:(Math.random() * (80 - 71) + 71).toFixed(2)},
      {name:'TPT B-4', ach:(Math.random() * (70 - 61) + 61).toFixed(2)},
    ];
    const salesC = [      
      {name:'TPT C-1', ach:(Math.random() * (100 - 91) + 91).toFixed(2)},
      {name:'TPT C-2', ach:(Math.random() * (90 - 81) + 81).toFixed(2)},
      {name:'TPT C-3', ach:(Math.random() * (80 - 71) + 71).toFixed(2)},
      {name:'TPT C-4', ach:(Math.random() * (70 - 61) + 61).toFixed(2)},
    ];

    const ttrA = [      
      {name:'TPT A-1', ach:(Math.random() * (100 - 91) + 91).toFixed(2)},
      {name:'TPT A-2', ach:(Math.random() * (90 - 81) + 81).toFixed(2)},
      {name:'TPT A-3', ach:(Math.random() * (80 - 71) + 71).toFixed(2)},
      {name:'TPT A-4', ach:(Math.random() * (70 - 61) + 61).toFixed(2)},
    ]; 
    const ttrB = [      
      {name:'TPT B-1', ach:(Math.random() * (100 - 91) + 91).toFixed(2)},
      {name:'TPT B-2', ach:(Math.random() * (90 - 81) + 81).toFixed(2)},
      {name:'TPT B-3', ach:(Math.random() * (80 - 71) + 71).toFixed(2)},
      {name:'TPT B-4', ach:(Math.random() * (70 - 61) + 61).toFixed(2)},
    ];
    const ttrC = [      
      {name:'TPT C-1', ach:(Math.random() * (100 - 91) + 91).toFixed(2)},
      {name:'TPT C-2', ach:(Math.random() * (90 - 81) + 81).toFixed(2)},
      {name:'TPT C-3', ach:(Math.random() * (80 - 71) + 71).toFixed(2)},
      {name:'TPT C-4', ach:(Math.random() * (70 - 61) + 61).toFixed(2)},
    ];

    const gaulA = [      
      {name:'TPT A-1', ach:(Math.random() * (100 - 91) + 91).toFixed(2)},
      {name:'TPT A-2', ach:(Math.random() * (90 - 81) + 81).toFixed(2)},
      {name:'TPT A-3', ach:(Math.random() * (80 - 71) + 71).toFixed(2)},
      {name:'TPT A-4', ach:(Math.random() * (70 - 61) + 61).toFixed(2)},
    ]; 
    const gaulB = [      
      {name:'TPT B-1', ach:(Math.random() * (100 - 91) + 91).toFixed(2)},
      {name:'TPT B-2', ach:(Math.random() * (90 - 81) + 81).toFixed(2)},
      {name:'TPT B-3', ach:(Math.random() * (80 - 71) + 71).toFixed(2)},
      {name:'TPT B-4', ach:(Math.random() * (70 - 61) + 61).toFixed(2)},
    ];
    const gaulC = [      
      {name:'TPT C-1', ach:(Math.random() * (100 - 91) + 91).toFixed(2)},
      {name:'TPT C-2', ach:(Math.random() * (90 - 81) + 81).toFixed(2)},
      {name:'TPT C-3', ach:(Math.random() * (80 - 71) + 71).toFixed(2)},
      {name:'TPT C-4', ach:(Math.random() * (70 - 61) + 61).toFixed(2)},
    ];

    // we're going to get this data from server
    let c3mr = [];
    let sales = [];
    let ttr = [];
    let gaul = [];

    const scoresA = [
      {i: 1, name:'TPT 1', witel:'Witel A', datel:'Datel A', class:'A', score:(Math.random() * (105 - 101) + 101).toFixed(2)},
      {i: 2, name:'TPT 2', witel:'Witel B', datel:'Datel B', class:'A', score:(Math.random() * (100 - 96) + 96).toFixed(2)},
      {i: 3, name:'TPT 3', witel:'Witel C', datel:'Datel C', class:'A', score:(Math.random() * (95 - 91) + 91).toFixed(2)},
    ];

    const scoresB = [
      {i: 1, name:'TPT 1', witel:'Witel A', datel:'Datel A', class:'B', score:(Math.random() * (105 - 101) + 101).toFixed(2)},
      {i: 2, name:'TPT 2', witel:'Witel B', datel:'Datel B', class:'B', score:(Math.random() * (100 - 96) + 96).toFixed(2)},
      {i: 3, name:'TPT 3', witel:'Witel C', datel:'Datel C', class:'B', score:(Math.random() * (95 - 91) + 91).toFixed(2)},
    ];

    const scoresC = [
      {i: 1, name: 'TPT 1', witel:'Witel A', datel:'Datel A', class:'C', score:(Math.random() * (105 - 101) + 101).toFixed(2)},
      {i: 2, name: 'TPT 2', witel:'Witel B', datel:'Datel B', class:'C', score:(Math.random() * (100 - 96) + 96).toFixed(2)},
      {i: 3, name: 'TPT 3', witel:'Witel C', datel:'Datel C', class:'C', score:(Math.random() * (95 - 91) + 91).toFixed(2)},
    ];

    const scoresUbis = [
      {i: 1, name:'Datel 1', witel:'Witel A', score:(Math.random() * (105 - 101) + 101).toFixed(2)},
      {i: 2, name:'Ubis 1', witel:'Witel B', score:(Math.random() * (100 - 96) + 96).toFixed(2)},
      {i: 3, name:'Datel 2', witel:'Witel C', score:(Math.random() * (95 - 91) + 91).toFixed(2)},
    ];

    let scores = [];

    switch(this.state.class){
      case 'A':
        sales = salesA;
        c3mr = c3mrA;
        ttr = ttrA;
        gaul = gaulA;
        scores = scoresA;
        break;
      case 'B':
        sales = salesB;
        c3mr = c3mrB;
        ttr = ttrB;
        gaul = gaulB;
        scores = scoresB;
        break;
      case 'C':
        sales = salesC;
        c3mr = c3mrC;
        ttr = ttrC;
        gaul = gaulC;
        scores = scoresC;
        break;
      default:
        sales = salesA;
        c3mr = c3mrA;
        ttr = ttrA;
        gaul = gaulA;
        scores = scoresA;
        break;
    }

    const datas = [
      {title:'Gangguan Ulang', chart: 'bar', color:'#1565c0', route:'/perf/gaul', dummyData: gaul, source:'Nonatero'},
      {title:'TTR 3 Jam', chart: 'bar', color:'#2e7d32', route:'/perf/ttr', dummyData: ttr, source:'Nonatero'},
      {title:'Sales', chart: 'bar', color:'#c62828', route:'/perf/sales', dummyData: sales, source:'CBD'},
      {title:'TTI', chart: 'bar', color:'#607d8b', route:'/perf/tti', dummyData: ttr, source:'Nonatero'},
      {title:'C3MR', chart: 'bar', color:'#ef6c00', route:'/perf/c3mr', dummyData: c3mr, source:'MyBrains'}
    ];

    let helper = new Helper();
    const month = helper.getMonth(this.state.month);

    return (
      <div>
      <Grid container className={classes.selector}>
        <Grid item xs={8}>
          {/* <Typography variant='h4'>Dashboard</Typography> */}
        </Grid>
        <Grid item xs={4}>
          <Selector state={this.state} 
            onClassChange={this.onClassChange}
            onMonthChange={this.onMonthChange}
            onYearChange={this.onYearChange}/>
        </Grid>
      </Grid>
      <Grid spacing={2} container>
      <Grid item xs={5}>
        <Card>
          <CardHeader 
            title="Top 3 Datel/Ubis" 
            titleTypographyProps={{variant:'h6'}}
            subheader={'Mtd '+month+' '+this.state.year}
            subheaderTypographyProps={{variant:'button', color:'textSecondary'}}/>
          <CardContent>        
            <Table className={classes.table}>
            {/*   // Order: TPT | Witel | Datel | Kelas | Skor  */}
              <TableHead>
                <TableRow>
                  <THead>No. </THead>
                  <THead>Datel/Ubis</THead>
                  <THead align='right'>Witel</THead>
                  <THead align='right'>Skor</THead>
                </TableRow>
              </TableHead>
              <TableBody>
                {scoresUbis.map(score => (
                  <TopTable data={score} isUbis={true}/>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={7}>
        <Card>
          <CardHeader 
            title="Top 3 TPT" 
            titleTypographyProps={{variant:'h6'}}
            subheader={'Mtd '+month+' '+this.state.year}
            subheaderTypographyProps={{variant:'button', color:'textSecondary'}}/>
          <CardContent>        
            <Table className={classes.table}>
            {/*   // Order: TPT | Witel | Datel | Kelas | Skor  */}
              <TableHead>
                <TableRow>
                  <THead>No. </THead>
                  <THead>TPT</THead>
                  <THead align='right'>Datel</THead>
                  <THead align='right'>Witel</THead>
                  <THead align='right'>Kelas</THead>
                  <THead align='right'>Skor</THead>
                </TableRow>
              </TableHead>
              <TableBody>
                {scores.map(score => (
                  <TopTable data={score} isUbis={false}/>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Grid>
      {datas.map(data => (
        <Grid item xs={4}>
          {/* next we will generate every data on chart */}
          <Charts 
            title={data.title} 
            data={data.dummyData} 
            chart={data.chart}
            color={data.color} 
            link={data.route}
            source={data.source}
            class={this.state.class}/>
        </Grid>
      ))}
      </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Main);