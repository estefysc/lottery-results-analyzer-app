import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NumberList from './components/NumberList';
import Particle from "./components/Particle";
import Navigation from "./components/Navigation"
import LoadingScreen from "./components/LoadingScreen";
import MainInfo from "./components/MainInfo";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    });

    return (
        <div>
            {loading ?
                (<LoadingScreen />) :
                (<div>
                    <Particle />

                    <Navigation fixed="top"/>
                    <MainInfo />
                </div>)
            }
        </div>
    );
}

export default App;
