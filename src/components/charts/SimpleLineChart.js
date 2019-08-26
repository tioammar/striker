import React from 'react';
import { ResponsiveContainer, BarChart, Bar, LineChart, XAxis, YAxis,Tooltip, Line } from 'recharts';
import { Paper, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles({
  main: {
    padding: 9,
  }
});

function CustTooltip({ payload, label, active }) {

  const classes = styles();
  if (active) {
    return (
      <Paper className={classes.main}>
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='button'>{label}</Typography>
          </Grid>
          <Grid item>
            <Typography variant='caption'>{`Ach: ${payload[0].value}%`}</Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  }

  return null;
}

function SimpleLineCharts(props){
  const data = props.data;
  const color = props.color;

  return (
    // <ResponsiveContainer>
    //   <LineChart data={data} height={300}>
    //     <XAxis dataKey="m" />
    //     <YAxis />
    //     <Tooltip />
    //     <Line type="monotone" dataKey="ach" stroke={color} />
    //   </LineChart>
    // </ResponsiveContainer>
    <ResponsiveContainer width='100%' height={200}> 
      <LineChart data={data}>
        <XAxis dataKey="m" tick={{fontSize: 12}}/>
        <YAxis tick={{fontSize: 12}} domain={['dataMin - 10', 'dataMax + 10']}/>
        <Tooltip content={<CustTooltip />}/>
        <Line type='monotone' dataKey="ach" stroke={color} activeDot={{r: 8}}>
        </Line>
      </LineChart>  
    </ResponsiveContainer>
  )
}

export default SimpleLineCharts;