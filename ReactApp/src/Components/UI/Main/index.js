import React, { Component } from 'react';
import Nav from '../Nav/index'
import Chat from '../Chat/main'
class index extends Component {

    constructor() {
        super()
        this.state ={

        }
    }


    render() {
        return (
            <div>
                <Nav/>
                <Chat/>

            </div>
        );
    }
}

export default index;