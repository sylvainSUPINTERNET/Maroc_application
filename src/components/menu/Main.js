import { Switch, Route } from 'react-router-dom'
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import React, { Component } from 'react';


//Switch sur la route appeler depuis Header et affiche le component en conséquence

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/contact' component={Contact}/>
                </Switch>
            </main>
        );
    }
}

export default Main;
