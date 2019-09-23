import React from "react";
import { TableRow, TableCell, withStyles } from "@material-ui/core";

const TBody = withStyles(theme => ({
  body: {
    fontSize: 13,
  }
}))(TableCell);

function TopTable(props) {

  const data = props.data

  // TPT | Witel | Datel | Kelas | Skor
  return (
    <TableRow>
      <TBody>{data.i}.</TBody>
      <TBody>{data.name}</TBody>
      <TBody align='right'>{data.witel}</TBody>
      {props.isUbis ? '' : <TBody align='right'>{data.class}</TBody>}
      {data.score >= 100 ? 
        <TBody align='right' style={{color: '#2e7d32'}}>{data.score} %</TBody> : 
        <TBody align='right' style={{color: '#c62828'}}>{data.score} %</TBody>}
    </TableRow>
  )
}

export default TopTable;