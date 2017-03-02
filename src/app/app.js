/*
 * @Author: aran.hu 
 * @Date: 2017-03-02 17:50:29 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2017-03-02 17:52:34
 */



// try to use material-ui 







import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {
  render() {
    return (   
      <MuiThemeProvider>
        <AppBar
          title="Hello World"
          style={{backgroundColor: 'red'}}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </MuiThemeProvider>
    );
  }
}
