import React from 'react';
import { Grid, MenuItem, Select, FormControl, InputLabel } from "@material-ui/core";

function Selector(props){

  const months = [
    {n: 'September', v: 9},
    {n: 'Oktober', v: 10},
    {n: 'November', v: 11},
    {n: 'Desember', v: 12},
  ];
  const classSelection = props.selection;

  return (
    <Grid container style={{marginTop: '10px'}}>
      <Grid item xs={6}>
        <FormControl>
          <InputLabel>Kelas</InputLabel>
          <Select 
            value={props.state.class}
            onChange={props.onClassChange}>
            {classSelection.map(item => (
              <MenuItem value={item.v}>{item.n}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl>
          <InputLabel>Bulan</InputLabel>
          <Select 
            value={props.state.month}
            onChange={props.onMonthChange}>
            {months.map(month => (
              <MenuItem value={month.v}>{month.n}</MenuItem>
            ))}
          </Select>
        </FormControl>  
      </Grid>
    </Grid>
  )
}

export default Selector;