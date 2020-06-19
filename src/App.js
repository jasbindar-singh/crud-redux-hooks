import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import List from './components/List';
import { connect } from 'react-redux'


function App(props) {
  return (
    <div className={`App ${props.theme}`}>
      <Navbar theme={props.theme}/>
      <div className="content">
        <Form theme={props.theme}/>
        <List theme={props.theme}/>
      </div>
    </div>
  );
}

function mapStateToProps(state){
  return {
      theme: state.theme
  }
}

export default connect(mapStateToProps, null)(App)
