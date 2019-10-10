import React from "react";
import { TableRow, TableCell, makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';

const styles = makeStyles({
  link: {
    textDecoration: 'none',
    color: 'inherit',
  }
});

function UbisTable(props) {
  const classes = styles();

  const data = props.data;
  const index = props.index;
  const type = props.type;

  // Order: No. | Nama | Kepala | Kelas | Witel
    return (
      <TableRow>
        <TableCell>{index}.</TableCell>
        <TableCell><Link to={'/detail/'+type+'/'+data.id} className={classes.link}>{data.location}</Link></TableCell>
        {/* <TableCell>{data.leader}</TableCell> */}
        <TableCell>{data.witel}</TableCell>
      </TableRow>
    )
}

export default UbisTable;