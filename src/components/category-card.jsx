import React, {Component} from 'react';

export default class CategoryCard extends Component {
    render() {
        let url = (this.props.category.picture !== ''
            ? `url(${this.props.category.picture})`
            : '');
        var styles = {
            backgroundImage: `linear-gradient( to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), ` + url,
            backgroundSize: 'cover',
            overflow: 'hidden',
        }
        return (
            <div className="box">
            <div className="categoryCard" style={styles}>
                <div className="categoryCard-info">
                    <h1>{this.props.category.name}</h1>
                </div>
            </div>
            </div>
        )
    }
}