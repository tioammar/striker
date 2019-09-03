import React from 'react';
import { Grid, MenuItem, Select, FormControl, InputLabel } from "@material-ui/core";

function Selector(props){

  const months = [
    {n: 'Januari', v: 1},
    {n: 'Februari', v: 2},
    {n: 'Maret', v: 3},
    {n: 'April', v: 4},
    {n: 'Mei', v: 5},
    {n: 'Juni', v: 6},
    {n: 'Juli', v: 7},
    {n: 'Agustus', v: 8},
    {n: 'September', v: 9},
    {n: 'Oktober', v: 10},
    {n: 'November', v: 11},
    {n: 'Desember', v: 12},
  ];
  const classSelection = props.selection;

  return (
    <Grid container>
      <Grid item xs={4}>
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
      <Grid item xs={4}>
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
      <Grid item xs={4}>
        <FormControl>
          <InputLabel>Tahun</InputLabel>
          <Select 
            value={props.state.year}
            onChange={props.onYearChange}>
            {[2019].map(year => (
              <MenuItem value={year}>{year}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default Selector;