import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Home from './home.jsx';
import Restaurant from './restaurant.jsx';
import AddRestaurantModal from './addrestaurantmodal.jsx';
export default class HeaderNavigation extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
        this.handleClick = this
            .handleClick
            .bind(this);
    }
    handleClick() {
        this.setState({show: true})
        console.log("Clicked add")
        console.log(this.state.show)
    }
    render() {
        return (
            <div className="headerSection">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <AddRestaurantModal/>
                    </li>
                </ul>

            </div>
        )
    }
}