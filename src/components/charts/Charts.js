import React from 'react';
import { Card, CardHeader, CardContent, makeStyles } from '@material-ui/core';
import SimpleBarCharts from './SimpleBarChart';
import { Link } from 'react-router-dom';
import SimpleLineCharts from './SimpleLineChart';

const styles = makeStyles({
  link: {
    textDecoration: 'none',
    color: 'inherit',
  }
});

function Charts(props){
  const classes = styles();

  function isBarChart(){
    if(props.chart == 'bar') return true;
    else return false;
  }

  return (
    <Card>
      <Link to={props.link} className={classes.link}>
      <CardHeader 
        title={props.title} 
        titleTypographyProps={{variant:'h6'}}
        subheader={'Source: '+props.source+' | Kelas: '+props.class}
        subheaderTypographyProps={{variant:'caption', color:'textSecondary'}}/>
      </Link>
      <CardContent>
        {isBarChart() ? 
        <SimpleBarCharts data={props.data} color={props.color}/> :
        <SimpleLineCharts data={props.data} color={props.color}/>}
      </CardContent>
    </Card>
  )
}

export default Charts;