import React, {useState, useEffect} from 'react';
import './App.css';
import NumberList from './components/NumberList';
import Particle from "./components/Particle";
import Navigation from "./components/Navigation"
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingScreen from "./components/LoadingScreen";


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
                    <Navigation fixed="top"/>
                    <Particle />
                    <div>
                        <NumberList />
                    </div>
                </div>)
            }
        </div>
    );
}

export default App;
