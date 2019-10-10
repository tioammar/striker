import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
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

function SimpleBarCharts(props){
  const data = props.data;
  const color = props.color;

  return (
    <ResponsiveContainer width='100%' height={200}> 
      <BarChart data={data}>
        <XAxis dataKey="name" tick={{fontSize: 10}}/>
        <YAxis tick={{fontSize: 8}}/>
        <Tooltip content={<CustTooltip />}/>
        <Bar dataKey="ach" fill={color}>
        </Bar>
      </BarChart>  
    </ResponsiveContainer>
  )
}

export default SimpleBarCharts;