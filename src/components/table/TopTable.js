import React, { Component } from "react";
import { TableRow, TableCell, withStyles } from "@material-ui/core";

function TopTable(props) {

  const data = props.data

  function isUbis(){
    return props.isUbis;
  }

  function isAchieve(){
    if(data.score >= 100){
      return true;
    } else return false;
  }

  // TPT | Witel | Datel | Kelas | Skor
  return (
    <TableRow>
      <TableCell>{data.i}.</TableCell>
      <TableCell>{data.name}</TableCell>
      {isUbis() ? '' : <TableCell align='right'>{data.datel}</TableCell>}
      <TableCell align='right'>{data.witel}</TableCell>
      {isUbis() ? '' : <TableCell align='right'>{data.class}</TableCell>}
      {isAchieve() ? 
        <TableCell align='right' style={{color: '#2e7d32'}}>{data.score} %</TableCell> : 
        <TableCell align='right' style={{color: '#c62828'}}>{data.score} %</TableCell>}
    </TableRow>
  )
}

export default TopTable;
