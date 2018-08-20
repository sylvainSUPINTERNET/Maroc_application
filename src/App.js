import React, {Component} from 'react';
import Header from "./components/menu/Header";
import Main from "./components/menu/Main";
import MyFooter from "./components/menu/MyFooter";

//import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Main/>
                <MyFooter/>
            </div>
        );
    }
}

export default App;
