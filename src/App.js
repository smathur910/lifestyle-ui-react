import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import {Navbar,Header,Benefits,Servicess,About,Footer} from './components/index';


import './App.css'



const App = () => {
   
    return(
       <>
        <Navbar/>
        <Header/>
        <Benefits/>
        <Servicess/>
        <About/>
        <Footer/>
       </>
    )
};

export default App;
