import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


//Components
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';

class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                    <hr />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/contact' component={Contact} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
export default AppRouter;