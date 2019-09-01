import React, { Component } from "react";
import { TableRow, TableCell, makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';

const styles = makeStyles({
  link: {
    textDecoration: 'none',
    color: 'inherit',
  }
});

function TptTable(props) {
  const classes = styles();

  const data = props.data;
  const index = props.index;

  // Order: No. TPT | Korter | Datel | Witel | Kelas
    return (
      <TableRow>
        <TableCell>{index}.</TableCell>
        <TableCell><Link to={'/detail/'+data.id} className={classes.link}>{data.tpt}</Link></TableCell>
        <TableCell>{data.witel}</TableCell>
        <TableCell>{data.datel}</TableCell>
        <TableCell>{data.class}</TableCell>
      </TableRow>
    )
}

export default TptTable;