import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Featured from './featured.jsx';
import Results from './results.jsx';
import { Jumbotron, Grid, Row, Col, Image, Button, FormControl, ControlLabel, HelpBlock, InputGroup, FormGroup } from 'react-bootstrap';

class FormExample extends Component {
    constructor(props, context) {
      super(props, context);

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.state = {
        value: '',
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
        .then(response => {
            return response.json();
        }).then(results => {
          let restaurant = results.items.map((item) => {
            return(
              {
                name: item.name,
                type: item.type,
                overallRating: item.overallRating,
              }
            )
          })
          this.setState({restaurant: results.items})
          console.log(this.state.restaurant[0])
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
                <section className="homeSection">
                    <div id = 'title'>
                      <h1>Munchies</h1>
                    </div>
                    <div id = 'search-bar'>
                      <p>What are you craving?</p>
                      <FormExample />
                    </div>
                </section>
                <Featured />
            </Grid>
        )
    }
}
