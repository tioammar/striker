import React from "react";
import { TableRow, TableCell } from "@material-ui/core";

function DataTable(props) {

  const data = props.data;
  const index = props.index;

  function getGrowth(){
    return ((data.currentMonth / data.lastMonth - 1) * 100).toFixed(2);
  }

  return (
    <TableRow>
      <TableCell>{index}.</TableCell>
      <TableCell>{data.location}</TableCell>
      <TableCell>{data.witel}</TableCell>
      <TableCell align='right'>{data.currentTarget}</TableCell>
      <TableCell align='right'>{data.currentMonth}</TableCell>
      {data.achievement >= 100 ? 
        <TableCell align='right' style={{color: '#2e7d32'}}>{(data.achievement * 1).toFixed(2)} %</TableCell> : 
        <TableCell align='right' style={{color: '#c62828'}}>{(data.achievement * 1).toFixed(2)} %</TableCell>}
      {getGrowth() > 0 ? 
        <TableCell align='right' style={{color: '#2e7d32'}}>{getGrowth()} %</TableCell> : 
        <TableCell align='right' style={{color: '#c62828'}}>{getGrowth()} %</TableCell>}
    </TableRow>
  )
}

export default DataTable;