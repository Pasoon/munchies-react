import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Featured from './featured.jsx';
import Results from './results.jsx';
import SearchBar from './search-bar.jsx';
import { Jumbotron, Grid, Row, Col, Image, Button, FormControl, ControlLabel, HelpBlock, InputGroup, FormGroup } from 'react-bootstrap';

export default class Home extends Component {
    render(){
        return(
            <Grid>
                <section className="homeSection">
                    <div id = 'title'>
                      <h1>Munchies</h1>
                    </div>
                    <div id = 'search-bar'>
                      <p>What are you craving?</p>
                      <SearchBar />
                    </div>
                </section>
                <Results/>
                <Featured />
            </Grid>
        )
    }
}
