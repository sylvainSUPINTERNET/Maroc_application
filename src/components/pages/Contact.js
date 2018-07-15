import React, { Component } from 'react';


import {Button, Icon} from 'react-materialize'


class Contact extends Component {
    render() {
        return (
            <div>
                <p>Contact page</p>
                <Button waves='light'>
                    <Icon>thumb_up</Icon>
                </Button>
            </div>
        );
    }
}

export default Contact;
