import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Featured from './featured.jsx';
import { Jumbotron, Grid, Row, Col, Image, Button, FormControl, ControlLabel, HelpBlock, InputGroup, FormGroup } from 'react-bootstrap'

class FormExample extends Component {
    constructor(props, context) {
      super(props, context);

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.state = {
        value: '',
        data: [],
      };
    }

    getValidationState() {
      const length = this.state.value.length;
      if (length > 0) return 'success';
      return null;
    }

    handleChange(e) {
      this.setState({ value: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log("YOOOOOO")
        alert('Endpoint: http://127.0.0.1:5000/restaurantByName/'+this.state.value);
        fetch('http://127.0.0.1:5000/restaurantByName/'+this.state.value)
        .then((response) => response.json())
        .then((findresponse) => {
        this.setState({
        data:findresponse.items,
        })
        })

      }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Restaurant Name..."
              onChange={this.handleChange}
            />
          </FormGroup>
        </form>
      );
    }
  }

export default class Home extends Component {
    render(){
        return(
            <Grid>
                <section id = "main-jumbotron">
                    <h1>Munchies</h1>
                    <p>What are you craving?</p>
                    <FormExample id = "search-bar" />
                </section>
                <Featured />
            </Grid>
        )
    }
}
