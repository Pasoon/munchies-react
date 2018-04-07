import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

export default class Results extends Component {
        constructor(props){
            super(props);
        }
        render() {
            console.log(this.props.data);
            if (!this.props.results) {
                return (
                    <div>
                    </div>
                )
            }
            console.log("over here: "+this.props.data)
            return (
                <section className="resultsSection">
                <div><h1>{this.props.data.name}</h1></div>
                    <div className="resultsRow">
                    </div>
                </section>
                )
        }
}

