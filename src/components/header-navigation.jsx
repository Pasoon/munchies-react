import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Home from './home.jsx';
import Restaurant from './restaurant.jsx';
export default class HeaderNavigation extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="headerSection">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/restaurant'>Restaurant</Link>
                    </li>
                </ul>
            </div>
        )
    }
}