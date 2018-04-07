import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import RestaurantListItem from './restaurant-listitem.jsx';

export default class Results extends Component {
        constructor(props){
            super(props);

            this.state = {
            }
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
                    <h3>- RESULTS -</h3>
                    {
                        this.props.data.map(function(restaurant, index){
                            console.log(restaurant,index)
                            return <RestaurantListItem restaurant={restaurant}/>
                        })
                    }
                        {/* <div className="resultsRow">
                            <RestaurantListItem />
                            <RestaurantListItem />
                            <RestaurantListItem />
                        </div> */}
                    </section>
                    )
            }
            }
        }


