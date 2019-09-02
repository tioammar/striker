import React from "react";
import { TableRow, TableCell } from "@material-ui/core";

function DataTable(props) {

  const data = props.data;
  const index = props.index;

  function getAchievement(){
    return ((data.real / data.target) * 100).toFixed(2);
  }

  function isUbis(){
    return props.isUbis;
  }

  function isGrowth(){
    return data.growth > 0;
  }

  function isAchieve(){
    return getAchievement() >= 100;
  }

  return (
    <TableRow>
      <TableCell>{index}.</TableCell>
      <TableCell>{data.name}</TableCell>
      <TableCell>Datel X</TableCell>
      {isUbis() ? 
      '' :
      <TableCell>Witel X</TableCell>}
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