import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

export default class Base extends Component {
    render() {
        return(
                <Button variant= {this.props.variant} onClick={this.props.click}>
                    {this.props.text} 
                </Button>
        );
    }
}