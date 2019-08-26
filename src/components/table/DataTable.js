import React, { Component } from "react";
import { TableRow, TableCell, withStyles } from "@material-ui/core";

function DataTable(props) {

  const data = props.data

  function getAchievement(){
    return ((data.real / data.target) * 100).toFixed(2);
  }

  function isGrowth(){
    if(data.growth > 0){
      return true;
    } else return false;
  }

  function isAchieve(){
    if(getAchievement() > 100){
      return true;
    } else return false;
  }

  return (
    <TableRow>
      <TableCell>{props.index}.</TableCell>
      <TableCell>{data.tpt}</TableCell>
      <TableCell>Witel X</TableCell>
      <TableCell>Datel X</TableCell>
      <TableCell align='right'>{data.target}</TableCell>
      <TableCell align='right'>{data.real}</TableCell>
      {isAchieve() ? 
        <TableCell align='right' style={{color: '#2e7d32'}}>{getAchievement()} %</TableCell> : 
        <TableCell align='right' style={{color: '#c62828'}}>{getAchievement()} %</TableCell>}
      {isGrowth() ? 
        <TableCell align='right' style={{color: '#2e7d32'}}>{data.growth} %</TableCell> : 
        <TableCell align='right' style={{color: '#c62828'}}>{data.growth} %</TableCell>}
    </TableRow>
  )
}

export default DataTable;