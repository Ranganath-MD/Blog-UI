import React from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import {BrowserRouter, Route, Link, Switch } from 'react-router-dom';


import Home from './components/home'
import Posts from './components/posts'
import ListAuthor from './components/listAuthors'
import PostShow from './components/postshow'
import AuthorShow from './components/authorShow'
import RandomPost from './components/randomPost'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  logo :{
    height : 25,
    marginLeft: 15
  },

  brand: {
    fontSize: 18,
    fontWeight: 600
  }
};

class App extends React.Component {
  
  render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>
        <div className={classes.root}>
          <AppBar position="fixed" color="inherit">
            <Toolbar>
              <Typography variant="h6" color="primary" className={classes.grow}>
                <Button component={Link} to="/" className={classes.brand}> React blog</Button>
              </Typography>
                <Button color="primary" component={Link} to="/" className={classes.text}>
                Home
                </Button>
                <Button color="primary" component={Link} to="/posts" className={classes.text}>
                  Posts
                </Button>
                  <Button color="primary" component={Link} to="/author" className={classes.text}>
                    Authors
                </Button>
                  <Button color="primary" component={Link} to="/random" className={classes.text}>
                    Random post
                </Button>
            </Toolbar>
          </AppBar>
        </div>


        <Switch>
          <Route path="/" component = {Home} exact={true}/>
          <Route path='/posts' component= {Posts} exact={true}></Route>
          <Route path='/author' component= {ListAuthor} exact={true}></Route>
          <Route path='/posts/:id' component ={PostShow}></Route>
          <Route path='/author/:id' component= {AuthorShow} exact={true}></Route>
          <Route path='/random' component= {RandomPost} exact={true}></Route>
        </Switch>
      </BrowserRouter>

    );
  }
}

  App.propTypes = {
    classes: PropTypes.object.isRequired,
  };


export default  withStyles(styles)(App);
