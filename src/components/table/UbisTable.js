import React from 'react';
import { TableRow, TableCell, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const style = makeStyles({
  link: {
    textDecoration: 'none',
    color: 'inherit',
  }
});

function UbisTable(props){
  const classes = style();

  const data = props.data;
  const index = props.index;

  // order : No. | Ubis/Datel | KaUbit/Kakandatel | Witel
  return (
    <TableRow>
      <TableCell>{index}.</TableCell>
      <TableCell><Link to={'/ubis/'+data.id} className={classes.link}>{data.nama}</Link></TableCell>
      <TableCell>{data.head}</TableCell>
      <TableCell>{data.witel}</TableCell>
    </TableRow>
  )
}