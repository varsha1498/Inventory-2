import React from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom'

import SearchIcon from '@material-ui/icons/Search';

import Search from "./Search";
import Appbar from "./Appbar"
import Table from "./Table"
import Modal from './Modal'
import './Modal.css'

function App() {
  return (
    <div className="App">
     <Appbar/>
     <div>
       <div className="search">
       <SearchIcon style={{width:"80px",marginTop:"100px"}} />
    
       <input className="search-input" placeholder="Search" type = "text" />
       </div>
     
     <Modal/>
     </div>
     <Table/>
    </div>
  );
}

export default App;
