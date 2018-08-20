import React, { Component } from 'react';
import {Carousel, Button, Icon, Row, Col} from "react-materialize";
import $ from 'jquery';



class Home extends Component {
    render() {

        return (
            <div>
                <Carousel options={{ fullWidth: true, duration:200, indicators: true }}>
                    <div className='red'  style={ carrousselItem1 }>
                        <h2>One picture ...</h2>
                    </div>
                    <div className='red'  style={ carrousselItem2 }>
                        <h2>Anothr picture ...</h2>
                    </div>
                </Carousel>

                    <section id="introduce" style={section_introduce}>
                        <h4 className="center-align">Qui sommes nous ?</h4>
                        <div className="row">
                            <div className="col s12 m4">
                                <div className="center promo promo-example">
                                    <i className="material-icons large">flash_on</i>
                                    <p className="promo-caption">Speeds up development</p>
                                    <p className="light center">We did most of the heavy lifting for you to provide a
                                        default stylings that incorporate our custom components.</p>
                                </div>
                            </div>
                            <div className="col s12 m4">
                                <div className="center promo promo-example">
                                    <i className="material-icons large">group</i>
                                    <p className="promo-caption">User Experience Focused</p>
                                    <p className="light center">By utilizing elements and principles of Material Design,
                                        we were able to create a framework that focuses on User Experience.</p>
                                </div>
                            </div>
                            <div className="col s12 m4">
                                <div className="center promo promo-example">
                                    <i className="material-icons large">settings</i>
                                    <p className="promo-caption">Easy to work with</p>
                                    <p className="light center">We have provided detailed documentation as well as
                                        specific code examples to help new users get started.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                <section id="activity" style={section_activity}>
                    <h4 className="center-align">ACTIVITY list</h4>
                    <Row style={{backgroundColor: "red"}}>
                        <Col style={{backgroundColor: "green"}} m={5} s={12}>
                            <h4>Le Maroc autrement!
                            </h4>
                            <p>
                                A deux pas de l’Europe, le Maroc vous offre les mille couleurs d’un pays à découvrir au cours des quatre saisons. Des sommets de l’Atlas aux plages de l’Atlantique, des rivages de la Méditerranée aux dunes du grand Sud, des villages authentiques des montagnes aux médinas des villes impériales...
                            </p>
                        </Col>
                        <Col style={{backgroundColor: "purple"}} m={6} s={10} className="offset-m1 offset-s2">
                            <Icon className="materialize-icons large">cloud</Icon>
                            <h5>
                                Catégorie
                            </h5>
                            <Icon className="materialize-icons large">cloud</Icon>
                            <h5>
                                Catégorie
                            </h5>
                            <Icon className="materialize-icons large">cloud</Icon>
                            <h5>
                                Catégorie
                            </h5>
                            <Icon className="materialize-icons large">cloud</Icon>
                            <h5>
                                Catégorie
                            </h5>
                        </Col>
                    </Row>
                </section>

            </div>


    );
    }
}

const carrousselItem1 =
    {
        background: 'url(https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350) no-repeat center fixed ',
        backgroundSize: 'cover'

};

const carrousselItem2 =
    {
    background: 'url(https://static.wixstatic.com/media/108ff4_c1f824972739431cb2e6fa1edd59f7b0~mv2.jpg/v1/fill/w_768,h_512,al_c,lg_1,q_85,usm_0.66_1.00_0.01/108ff4_c1f824972739431cb2e6fa1edd59f7b0~mv2.webp) no-repeat center fixed ',
    backgroundSize: 'cover'
};


const section_introduce = {
    padding:'3vh',
    background: 'linear-gradient(to right bottom, #c21500, #ffc500 )'
};

const section_activity = {
    padding:'3vh',
    background: 'linear-gradient(to right, #16222a, #3a6073)'
};


export default Home;
