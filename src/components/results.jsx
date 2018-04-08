import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import RestaurantListItem from './restaurant-listitem.jsx';

export default class Results extends Component {
        constructor(props){
            super(props);

        }
        render() {
            if (!this.props.data || this.props.data[0] == undefined) {
                return (
                    <div>
                    </div>
                )
            }
            else{
                return (
                    <section className="resultsSection">
                        <div className="resultsHeader">
                            <h1>Results</h1>
                        </div>
                        <div class Name="resultsRow">
                            {
                                this.props.data.map(function(restaurant, index){
                                console.log("YESS SIRRRRR",restaurant,index)
                                return <RestaurantListItem restaurant={restaurant}/>
                                })
                            }
                        </div>
                        </section>
                        )
                }
            }
        }


