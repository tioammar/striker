import React, { Component } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Sales from './components/pages/Sales';
import C3MR from './components/pages/C3MR';
import TTR from './components/pages/TTR';
import Detail from './components/pages/Detail';
import { withStyles } from '@material-ui/styles';
import Korter from './components/pages/Korter';

const styles = theme => ({
  paper: {
    padding: 30,
    margin: 'auto',
    width: '80%',
    marginTop: 20,
  }
});

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 30,
    margin: 'auto',
    width: '80%',
    marginTop: 20,
  }
}));

const auth = {
  isAuthenticated: false,
  authenticate(){
    this.isAuthenticated = true;
  },
  login(name, level, territory){
    Session.start({
      payload: {
        user: name,
        lvl: level,
        idTerritory: territory,
      }
    });
  },
  signout(){
    this.isAuthenticated = false;
    Session.destroy();
  }
};

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render = { props => auth.isAuthenticated ? 
        (<Component {...props} />) : (<Redirect to={{pathname: "/login",}}/>)
      }
    />
  );
}

class Login extends Component {

  state = { 
    redirect: false,
    user: "",
    isError: false,
    isLoading: false
  };  
  
  componentDidMount(){
    const session = Session.getSession();
    this.setState({
      redirect: session.isValid
    })
  }

  onUserFilled = (event) => {
    this.setState({
      user: event.target.value
    })
  }

  // onPassFilled = (event) => {
  //   this.setState({
  //     pass: event.target.value
  //   })
  // }

  login = () => {
    let data = new FormData();
    data.append("email", this.state.user);
    data.append("password", this.state.pass);

    fetch("http://10.144.1.77:8080/login?email="+this.state.user+"&password=telkom135")
      .then(response => {
        if(response.ok) return response.json();
        else throw Error(response.statusText);
      })
      .then(json => {
        auth.login(json.user.name, json.user.level, json.user.territory);
        this.props.function();
        this.setState({
          redirect: true
        })
      })
      .catch(error => {
        this.setState({
          userData: [],
          isError: true
        });
        console.log("gagal masuk...");
      });
  };
  
  render(){
    const session = Session.getPayload();
    if(!this.state.isError) {
      if(this.state.redirect) {
        if(session.lvl == 2) return <Redirect to={'/detail/ubis/'+session.idTerritory}/>
        else if(session.lvl == 1) return <Redirect to='/'/>
        else if(session.lvl == 3) return <Redirect to={'/detail/tpt/'+session.idTerritory}/>
      }
    }
    return (
      <div>
        <Grid style={{margin: 'auto'}} container xs={10} sm={8} md={6} spacing={2}>
          <Typography variant="h4" style={{margin: 'auto', width: '75%', marginTop: 20, marginBottom: 20}} align="center">
            STRIKER Treg VII
          </Typography>
          <Paper style={{margin: 'auto', padding: 20, width: '75%'}}>
          <Grid container container xs={12} sm={12} md={12} spacing={2}>
            <Grid item xs={12} sm={12} md={12} spacing={2}>
              <TextField style={{width: '100%'}} label="No. Telp" onChange={this.onUserFilled}/>
            </Grid>
            {/* <Grid item xs={12} sm={12} md={12} spacing={2}>
              <TextField style={{width: '100%', marginTop: 20}} type="password" label="Password" onChange={this.onPassFilled}/>
            </Grid> */}
            <Grid item xs={12} sm={12} md={12} spacing={2}>
              <Button style={{marginTop: 20}} variant="contained" color="primary" onClick={this.login}>Masuk</Button>
            </Grid>
          </Grid>
          </Paper>
        </Grid>
      </div>
    )
  }
}

class App extends Component {

  state = {
    isLogin: false
  }

  componentDidMount(){
    const session = Session.getSession();
    this.setState({
      isLogin: session.isValid
    })
    if(session.isValid){
      auth.authenticate();
    }
  }

  login = () => {
    this.setState({
      isLogin: true
    })
    auth.authenticate();
  }

  logout = () => {
    this.setState({
      isLogin: false
    })
    auth.signout();
  }

  render() {
    const session = Session.getPayload();
    return (
      <div>
      <Router basename='/striker'>
        {this.state.isLogin ?         
        <TopBar
          onExitClicked={this.logout}
        /> : ""
        }
        <PrivateRoute path='/' exact component={Dashboard}/>
        <Route path='/login' render={(props) => <Login {...props} function={this.login} />}/>
        <PrivateRoute path='/detail/:type/:id' component={Detail}/>
        <PrivateRoute path='/sales' component={Sales}/>
        <PrivateRoute path='/ttr' component={TTR}/>
        <PrivateRoute path='/gaul' component={Gaul}/>
        <PrivateRoute path='/c3mr' component={C3MR}/>
        <PrivateRoute path='/allskor' component={TopTerritory}/>
        {/* for setting param just add /:param. 
        and get param on component by using props.match.params.param */}
      </Router>
      </div>
    )
  }
}

export default withStyles(styles)(App);


