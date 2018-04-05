import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button, Form } from 'react-bootstrap'
//import "./Home.css"
require ('../sass/main.scss');

export default class Home extends Component {
    render(){
        return(
            <Grid>
                <Jumbotron id = "main-jumbotron">
                    <h1>Munchies</h1>
                    <p>What are you craving?</p>

                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="resto-wrapper">
                        <h3>Resto #1</h3>
                        <p>Whats gooooood in the hooood</p>
                    </Col>
                    <Col xs={12} sm={4} className="resto-wrapper">
                        <h3>Resto #2</h3>
                        <p>Whats gooooood in the hooood</p>
                    </Col>
                    <Col xs={12} sm={4} className="resto-wrapper">
                        <h3>Resto #2</h3>
                        <p>Whats gooooood in the hooood</p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
