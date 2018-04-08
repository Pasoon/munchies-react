import React, {Component} from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button, FormControl, ControlLabel, HelpBlock, InputGroup, FormGroup } from 'react-bootstrap';

export default class RestaurantListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        
        console.log("LETS GOOOO!: "+this.props.restaurant.name);
        return (
                <Row className = "restaurantListItem">
                    <Col className ="imageSection" xs={6} md={4}>
                        <img src={this.props.restaurant.pic_url}/>
                    </Col>

                    <Col xs={6} md={4}>
                        <h2>{this.props.restaurant.name}</h2>
                        <h5>{this.props.restaurant.type}</h5>
                    </Col>

                    <Col xs={6} md={4}>
                        <h5>{this.props.restaurant.overallRating}</h5>
                    </Col>
                </Row>

        )
    }
}