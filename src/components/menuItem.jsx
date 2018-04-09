import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
export default class MenuItem extends Component {
    constructor() {
        super();
        this.onAfterInsertRow = this
            .onAfterInsertRow
            .bind(this)
        this.onAfterDeleteRow = this
            .onAfterDeleteRow
            .bind(this)

        this.state = {
            options: {
                afterInsertRow: this.onAfterInsertRow,
                afterDeleteRow: this.onAfterDeleteRow // A hook for after insert rows
            }
        }

    }
    onAfterInsertRow(row) {
        let newRowStr = '';
        for (const prop in row) {
            newRowStr += prop + ': ' + row[prop] + ' \n';
        }
        alert('The new row is:\n ' + newRowStr);
    }
    onAfterDeleteRow(rowKeys) {
        alert('The rowkey you drop: ' + rowKeys);
    }
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
                <BootstrapTable
                    data={this.props.items}
                    striped
                    hover
                    bordered={false}
                    condensed
                    height='400'
                    scrollTop={'Top'}
                    className='menuTableColumns'
                    insertRow={true}
                    options={this.state.options}
                    deleteRow={true}>
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