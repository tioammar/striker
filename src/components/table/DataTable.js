import React from "react";
import { TableRow, TableCell } from "@material-ui/core";

function DataTable(props) {

  const data = props.data;
  const index = props.index;

  function getAchievement(){
    return ((data.real / data.target) * 100).toFixed(2);
  }

  return (
    <TableRow>
      <TableCell>{index}.</TableCell>
      <TableCell>{data.name}</TableCell>
      <TableCell>Witel X</TableCell>
      <TableCell align='right'>{data.target}</TableCell>
      <TableCell align='right'>{data.real}</TableCell>
      {getAchievement() >= 100 ? 
        <TableCell align='right' style={{color: '#2e7d32'}}>{getAchievement()} %</TableCell> : 
        <TableCell align='right' style={{color: '#c62828'}}>{getAchievement()} %</TableCell>}
      {data.growth > 0 ? 
        <TableCell align='right' style={{color: '#2e7d32'}}>{data.growth} %</TableCell> : 
        <TableCell align='right' style={{color: '#c62828'}}>{data.growth} %</TableCell>}
    </TableRow>
  )
}

export default DataTable;