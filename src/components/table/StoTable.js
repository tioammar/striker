import React, { Component } from "react";
import { TableRow, TableCell } from "@material-ui/core";


function DataTable(props) {

  // Order: STO | Korter | Datel | Witel | Jumlah Personil 
  render() {
    return (
      <TableRow>
        <TableCell></TableCell>
        <TableCell align='right'></TableCell>
        <TableCell align='right'></TableCell>
        <TableCell align='right'></TableCell>
        <TableCell align='right'></TableCell>
      </TableRow>
    )
  }
}

export default DataTable;