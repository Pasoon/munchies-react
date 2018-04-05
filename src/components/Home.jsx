import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
//import "./Home.css"
//require ('../sass/main.scss');

export default class Home extends Component {
    render(){
        return(
            <Grid>
                <Jumbotron>
                    <h2>Munchies</h2>
                    <p>What are you craving?</p>
                </Jumbotron>
            </Grid>
        )
    }
}
