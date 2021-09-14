import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import MadeSimple from './components/MadeSimple/MadeSimple';
import Develop from "./components/Develop/Develop";
import Agency from "./components/Agency/Agency";
import Supported from "./components/Supported/Supported";
function App() {
  return (
    <>
       <div className="kotta">
          <Navbar />
          <div style={{overflowY:"scroll", height:"800px"}}><Main/></div> 
       </div>
       <MadeSimple/>
    
       <Develop/>
       <Agency/>
       <Supported/>
       
       
    </>
  );
}

export default App;
