import React, {Component} from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button, FormControl, ControlLabel, HelpBlock, InputGroup, FormGroup } from 'react-bootstrap';

export default class RestaurantListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        console.log("LETS GOOOO!: "+this.props.restaurant.pic_url);

        let url = (this.props.restaurant.pic_url !== ''
            ? `url(${this.props.restaurant.pic_url})`
            : '');
        var styles = {
            backgroundImage: `linear-gradient( to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), ` + url,
            backgroundSize: 'cover',
            overflow: 'hidden'
        }
        return (
                <div className = "restaurantListItem">
                    <div className ="imageSection" styles={styles}>
                    </div>

                    <div className = "nameTypeDesc">
                        <h2>{this.props.restaurant.name}</h2>
                        <h5>{this.props.restaurant.type}</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className = "Rating">
                        <h5>{this.props.restaurant.overallRating}</h5>
                    </div>
                </div>

        )
    }
}