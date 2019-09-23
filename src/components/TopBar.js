import React, { Component } from "react";
import { withStyles, Drawer, Divider } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typhography from '@material-ui/core/Typography';
import { Box, Grid, List, ListItem, ListItemText, IconButton, ListItemIcon } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import BarChartIcon from '@material-ui/icons/BarChart';
import ListIcon from '@material-ui/icons/List';
import BuildIcon from '@material-ui/icons/Build';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import LoopIcon from '@material-ui/icons/Loop';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';
import { Link } from 'react-router-dom';

const styles = theme => ({
  title: {
    flexGrow: 1,
  },
  avatar: {
    marginLeft: 10,
  },
  avatarBig: {
    width: 90,
    height: 90,
    margin: 25,
  },
  drawerHeader: {
    marginTop: 25,
  },
  drawerButton: {
    marginRight: theme.spacing(2),
  },
  drawer: {
    width: 300,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  }
});

class TopBar extends Component {

  state = {
    drawerOpen: false,
  }

  openDrawer = () => {
    this.setState({
      drawerOpen: true,
    })
  }

  closeDrawer = () => {
    this.setState({
      drawerOpen: false,
    })
  }
  
  render() {
    const {classes} = this.props; // getting styles. see how to export at the bottom
    // const menu = [
    //   'Dashboard',
    //   'Daftar TPT',
    // ];
    return (
        <div>
        <AppBar position='static'>
          <Toolbar style={{backgroundColor: '#c62828'}}>
            <IconButton className={classes.drawerButton} edge='start' onClick={this.openDrawer} color='inherit'>
              <MenuIcon/>
            </IconButton>
            <Drawer open={this.state.drawerOpen} onClose={this.closeDrawer}>
              <Box bgcolor="#c62828" color="primary.contrastText">
                <Grid container>
                  <Grid container>
                    {/* <Grid item>
                    <Avatar 
                      className={classes.avatarBig} 
                      src={this.props.image}
                    />
                    </Grid> */}
                    {/* <Grid className={classes.drawerHeader} item sm container>
                      <Grid item container direction='column'>
                        <Grid item>
                          <Typhography variant='subtitle1' color='inherit'>
                            {this.props.fullname}
                          </Typhography>
                          <Typhography variant='body2' color='inherit'>
                            {this.props.nik}
                          </Typhography>
                          <Typhography variant='subtitle2' color='inherit'>
                            {this.props.unit} TReg VII
                          </Typhography>
                        </Grid>
                      </Grid>
                    </Grid> */}
                  </Grid>
                </Grid>
              </Box>
              {/* To Do: we'll use router */}
              <List className={classes.drawer}>
                {/* {menu.map((text, index) => (
                  <ListItem button key={text}>
                  <ListItemIcon><ChevronRightIcon /></ListItemIcon>
                  <ListItemText primary={text}/>
                  </ListItem>
                ))} */}
                <Link to='/' className={classes.link}>
                <ListItem button key='dashboard' onClick={this.closeDrawer}>
                  <ListItemIcon><BarChartIcon /></ListItemIcon>
                  <ListItemText primary='Dashboard'/>
                </ListItem>
                </Link>
                <Link to='/territory' className={classes.link}>
                <ListItem button key='territory' onClick={this.closeDrawer}>
                  <ListItemIcon><ListIcon /></ListItemIcon>
                  <ListItemText primary='Daftar Wilayah'/>
                </ListItem>
                </Link>
                <Divider />
                <Link to='/ttr' className={classes.link}>
                <ListItem button key='territory' onClick={this.closeDrawer}>
                  <ListItemIcon><BuildIcon /></ListItemIcon>
                  <ListItemText primary='TTR 3 Jam'/>
                </ListItem>
                </Link>
                <Link to='/gaul' className={classes.link}>
                <ListItem button key='territory' onClick={this.closeDrawer}>
                  <ListItemIcon><LoopIcon /></ListItemIcon>
                  <ListItemText primary='Gangguan Ulang'/>
                </ListItem>
                </Link>
                <Link to='/sales' className={classes.link}>
                <ListItem button key='territory' onClick={this.closeDrawer}>
                  <ListItemIcon><QueuePlayNextIcon /></ListItemIcon>
                  <ListItemText primary='Sales'/>
                </ListItem>
                </Link>
                <Link to='/c3mr' className={classes.link}>
                <ListItem button key='territory' onClick={this.closeDrawer}>
                  <ListItemIcon><AccountBalanceWalletIcon /></ListItemIcon>
                  <ListItemText primary='C3MR'/>
                </ListItem>
                </Link>
                <Divider />
                <ListItem button key='keluar'>
                  <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                  <ListItemText primary='Keluar'/>
                </ListItem>
              </List>
            </Drawer>
            <Typhography className={classes.title} variant='h6' color='inherit'>
              {/* Nama: STRIKER (SISTEM MONITORING KINERJA KORTER) */}
              STRIKER TReg VII
            </Typhography>
            <Typhography variant='title' color='inherit'>
              Hi, {this.props.username}!
            </Typhography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(TopBar) // export const styles