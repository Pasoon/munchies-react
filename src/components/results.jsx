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
                console.log("YESSSS: "+this.props.data[0].name)
                return (
                    <section className="resultsSection">
                    <h3>- RESULTS -</h3>
                    {/* {
                        this.props.data.map(function(item){
                            return <h5 key={item}>{item.name} : {item.type} </h5>
                        })
                    } */}
                        <div className="resultsRow">
                            <RestaurantListItem />
                            <RestaurantListItem />
                            <RestaurantListItem />
                        </div>
                    </section>
                    )
            }
            }
        }


