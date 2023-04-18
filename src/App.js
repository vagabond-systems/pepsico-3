import React, {Component} from 'react';
import './App.css';
import DistributorTable from "./DistributorTable";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Augur</h1>
                <DistributorTable/>
            </div>
        );
    }
}

export default App;
