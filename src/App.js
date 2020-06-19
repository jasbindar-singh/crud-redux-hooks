import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import List from './components/List';
import { useSelector } from 'react-redux'


function App() {

  const theme = useSelector(state => state.theme)

  return (
    <div className={`App ${theme}`}>
      <Navbar theme={theme}/>
      <div className="content">
        <Form/>
        <List/>
      </div>
    </div>
  );
}

// function mapStateToProps(state){
//   return {
//       theme: state.theme
//   }
// }

// export default connect(mapStateToProps, null)(App)
export default App
