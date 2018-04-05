import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button, Form } from 'react-bootstrap'
import Featured from './featured.jsx';

export default class Home extends Component {
    render(){
        return(
            <Grid>
                <section id = "main-jumbotron">
                    <h1>Munchies</h1>
                    <p>What are you craving?</p>
                </section>
                <Featured />
            </Grid>
        )
    }
}
