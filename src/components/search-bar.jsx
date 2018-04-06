import React, {Component} from 'react';
import {Grid, Row, Col, FormControl, ControlLabel, HelpBlock, InputGroup, FormGroup } from 'react-bootstrap';

export default class SearchBar extends Component {
    constructor(props) {
      super(props)

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.state = {
        value: '',
        restaurant: []
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
        // alert('Endpoint: http://127.0.0.1:5000/restaurantByName/'+this.state.value);
        //fetch('http://127.0.0.1:5000/restaurantByName/'+this.state.value)
        //.then(response => {
            //return response.json();
        //}).then(results => {
          // let restaurant = results.items.map((item) => {
          //   return(
          //     {
          //       name: item.name,
          //       type: item.type,
          //       overallRating: item.overallRating,
          //     }
          //   )
          // })
          var results = {

                name: 'ZeeShah',
                type: 'bangla',
                url: 'bangla.com',
                id: 1,

          }
          this.setState({restaurant: results})
          console.log("We Here",this.state.restaurant)
        //})
      }

    render() {
      return (
      <div>
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
      </div>
      );
    }
  }