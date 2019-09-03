import React from "react";
import { TableRow, TableCell } from "@material-ui/core";

function TopTable(props) {

  const data = props.data

  // TPT | Witel | Datel | Kelas | Skor
  return (
    <TableRow>
      <TableCell>{data.i}.</TableCell>
      <TableCell>{data.name}</TableCell>
      <TableCell align='right'>{data.witel}</TableCell>
      {props.isUbis ? '' : <TableCell align='right'>{data.class}</TableCell>}
      {data.score >= 100 ? 
        <TableCell align='right' style={{color: '#2e7d32'}}>{data.score} %</TableCell> : 
        <TableCell align='right' style={{color: '#c62828'}}>{data.score} %</TableCell>}
    </TableRow>
  )
}

export default TopTable;