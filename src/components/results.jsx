import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import SearchBar from './search-bar.jsx';

export default class Results extends Component {
        constructor(props){
            super(props);
        }
        render() {
            console.log(this.props);
            if (!this.props.results) {
                return (
                    <div>
                    </div>
                )
            }
            return (
                <div>
                    <h1>{this.props.results.name}</h1>
                </div>
                )
        }
}

