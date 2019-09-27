import React from "react";
import { TableRow, TableCell, withStyles } from "@material-ui/core";

const TBody = withStyles(theme => ({
  body: {
    fontSize: 13,
  }
}))(TableCell);

function TopDataTable(props) {

  const data = props.data;
  const index = props.index;

  return (
    <TableRow>
      <TBody>{index}.</TBody>
      <TBody>{data.location}</TBody>
      {/* <TBody>{data.witel}</TBody> */}
      <TBody align='right'>{data.witel}</TBody>
      <TBody align='right'>{(data.score*1).toFixed(2)}%</TBody>
    </TableRow>
  )
}

export default TopDataTable;