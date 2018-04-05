import React, { Component } from 'react';
import RestaurantCard from './restaurant-card.jsx';
import {Grid, Row, Col} from 'react-bootstrap'
export default class Featured extends Component {
    render() {
        return (
            <Grid>
               <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="resto-wrapper">
                        <RestaurantCard />
                    </Col>
                    <Col xs={12} sm={4} className="resto-wrapper">
                      <RestaurantCard />
                    </Col>
                    <Col xs={12} sm={4} className="resto-wrapper">
                      <RestaurantCard />
                    </Col>
                </Row> 
            </Grid>
        )
    }
}
