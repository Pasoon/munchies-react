import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
export default class MenuItem extends Component {
    render() {
        console.log(this.props.items)
        if (!this.props.items) {
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            )
        }
        return (
            <div className="menuTable">
                <BootstrapTable data={this.props.items} striped hover bordered={ false } condensed
                height='400' scrollTop={ 'Top' } className='menuTableColumns'>
                    <TableHeaderColumn isKey dataField='name'>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='category'>Category</TableHeaderColumn>
                    <TableHeaderColumn dataField='type'>Type</TableHeaderColumn>
                    <TableHeaderColumn dataField='description'>Description</TableHeaderColumn>
                    <TableHeaderColumn dataField='price' dataSort>Price</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}