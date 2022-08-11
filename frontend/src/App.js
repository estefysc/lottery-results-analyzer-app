import React from 'react';
import './App.css';
import NumberList from './components/NumberList';
import Particle from "./components/Particle";
import Navigation from "./components/Navigation"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <div>
          <Navigation fixed="top"/>
          <Particle />
          <div>
              <NumberList />
          </div>


      </div>
  );
}

export default App;
