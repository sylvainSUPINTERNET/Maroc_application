import React, {Component} from 'react';
//import './App.css';

// ROUTER
import AppRouter from './components/Menu/AppRouter';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Maroc MERRYL</h1>
                    <nav>
                        <AppRouter/>
                    </nav>
                </header>
            </div>
        );
    }
}

export default App;
