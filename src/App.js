import TypeIt from "typeit-react";

import './App.css';
import BootUp from '../src/components/bootup/bootup'
import Home from '../src/components/home/home'

function App() {
  return (
    <div>
      <div className="title"> 
        <h1>MU//TH//UR 6000</h1>
      </div>
      <div className="personnelId">
        <p>PERSONNEL ID: N/A</p>
      </div>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;