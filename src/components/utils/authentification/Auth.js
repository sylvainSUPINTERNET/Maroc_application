'use strict';
import React, { Component } from 'react';

export class Auth extends Component {


    /**
     * check if user local storage token key exist
     */
    // TODO la suite ofc
    
    static checkingToken(){
        let currentUser_token = localStorage.getItem("token");

        if(currentUser_token && localStorage.getItem("token") !== ""){
            console.log("connected");
        } else {
            console.log("pas co");
        }
    }
}