import React from "react";
import { TableRow, TableCell, withStyles } from "@material-ui/core";

const TBody = withStyles(theme => ({
  body: {
    fontSize: 13,
  }
}))(TableCell);

function DataTable(props) {

  const data = props.data;
  const index = props.index;

  function getGrowth(){
    return ((data.currentMonth / data.lastMonth - 1) * 100).toFixed(2);
  }

  return (
    <TableRow>
      <TBody>{index}.</TBody>
      <TBody>{data.location}</TBody>
      {/* <TBody>{data.witel}</TBody> */}
      <TBody align='right'>{data.currentTarget}</TBody>
      <TBody align='right'>{data.currentMonth}</TBody>
      {data.achievement >= 100 ? 
        <TBody align='right' style={{color: '#2e7d32'}}>{(data.achievement * 1).toFixed(2)}%</TBody> : 
        <TBody align='right' style={{color: '#c62828'}}>{(data.achievement * 1).toFixed(2)}%</TBody>}
      {getGrowth() > 0 ? 
        <TBody align='right' style={{color: '#2e7d32'}}>{getGrowth()}%</TBody> : 
        <TBody align='right' style={{color: '#c62828'}}>{getGrowth()}%</TBody>}
    </TableRow>
  )
}

export default DataTable;