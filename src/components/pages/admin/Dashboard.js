import React, { Component } from 'react';


import {Button, Card, CardTitle, Col, Icon, Input, Row} from 'react-materialize'


// UTILS Authentification
import {Auth} from '../../utils/authentification/Auth';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    componentWillMount() {
        Auth.checkingToken();
    }

    render() {

        const title_value = "Administration";


        return (
            <div className="row">
                <div className="col offset-m2 m8">
                    <Card className='medium hoverable'
                          title={<div className="center-align">{title_value}</div>}
                          header={<div style={headerBar}></div>}
                          children={[]}
                          actions={[
                              <Col  m={12} s={12} className="center-align">
                                  <a href="">Mot de passe oublié ?</a>
                              </Col>,
                          ]}>
                        <Col m={10} s={12} className="offset-m2 offset-s0">
                            <Input m={10} s={12} label="Email" name="email"/>
                        </Col>
                        <Col m={10} s={12} className="offset-m2 offset-s0">
                            <Input m={10} s={12} type="password" label="Mot de passe"/>
                        </Col>
                        <p className="center-align">
                            <a className="waves-effect waves-light btn-large orange hovrable" style={connectionBtn}>
                                <i className="material-icons right">lock</i>Se connecter</a>
                        </p>
                    </Card>
                </div>
            </div>
        );
    }
}


const headerBar = {
    height:'4px',
    background: 'linear-gradient(to right bottom, #c21500, #ffc500 )'
};

const connectionBtn = {
  marginTop: '4vh'
};
export default Dashboard;
