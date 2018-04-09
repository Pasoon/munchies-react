import React, {Component} from 'react';
import {
    Row,
    Col,
    Image,
    Button,
    FormControl,
    ControlLabel,
    HelpBlock,
    InputGroup,
    FormGroup,
    FieldGroup,
    Form
} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.handleSelectionChange = this
            .handleSelectionChange
            .bind(this);

        this.onAfterDeleteRowResto = this
            .onAfterDeleteRowResto
            .bind(this)

        this.onAfterDeleteRowRater = this
            .onAfterDeleteRowRater
            .bind(this)

        var dummydata = [
            {
                name: '',
                type: '',
                id: ''
            }
        ]
        this.state = {
            dummydata: [],
            columns: Object.keys(dummydata[0]),
            restaurants: [],
            raters: [],
            optionsResto: {
                afterDeleteRow: this.onAfterDeleteRowResto // A hook for after insert rows
            },
            optionsRater: {
                afterDeleteRow: this.onAfterDeleteRowRater // A hook for after insert rows
            },
            selectRowProp: {
                mode: 'checkbox'
            }
        }
    }

    onAfterDeleteRowResto(rowKeys) {
        console.log("DELETE RESO")
        rowKeys.map((id) => {
            this.deleteRestaurant(id);
        })
    }

    onAfterDeleteRowRater(rowKeys) {
        console.log("DELETE RATER")
        rowKeys.map((id) => {
            this.deleteRater(id);
        })
    }

    deleteRater(id) {
        let url = `http://127.0.0.1:5000/deleteRater/` + id;
        fetch(url).then(results => {
            console.log("Admin: Deleted Rater" + id);
        })
    }

    deleteRestaurant(id) {
        let url = `http://127.0.0.1:5000/deleteRestaurant/` + id;
        fetch(url).then(results => {
            console.log("Admin: Deleted Restaurant" + id);
        })
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/restaurants').then(results => {
            console.log("Admin: Got the restos!");
            return results.json();
        }).then(data => {
            console.log("Admin: Set the Restos!");
            this.setState({restaurants: data.items});
        })
        fetch('http://127.0.0.1:5000/raters').then(results => {
            console.log("Admin: Got the raters!");
            return results.json();
        }).then(data => {
            console.log("Admin: Set the raters!");
            this.setState({raters: data.items});
        })
    }

    handleSelectionChange(e) {
        console.log(e.target.value)
        fetch(e.target.value).then(response => {
            return response.json();
        }).then(results => {
            let data = results.items;
            console.log("results", data)
            this.setState({dummydata: data})
            this.setState({
                columns: Object.keys(data[0])
            })
        })

    }

    render() {
        return (
            <section className="adminSection">
                <div className="adminHeader">
                    <h1>Admin</h1>
                    <p>Query our databases directly.</p>
                </div>
                <div className="adminQuerySection">
                    <h1 className="queryHeader">All our Restaurants.</h1>
                    <BootstrapTable
                        data={this.state.restaurants}
                        striped
                        hover
                        bordered={false}
                        height='500'
                        scrollTop={'Top'}
                        options={this.state.optionsResto}
                        deleteRow={true}
                        selectRow={this.state.selectRowProp}>
                        <TableHeaderColumn isKey dataField='restaurantId' dataSort>Id</TableHeaderColumn>
                        <TableHeaderColumn dataField='name' dataSort>Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='type'>Type</TableHeaderColumn>
                        <TableHeaderColumn dataField='overallRating'>Overall Rating</TableHeaderColumn>
                        <TableHeaderColumn dataField='url'>Url</TableHeaderColumn>
                        <TableHeaderColumn dataField='pic_url'>Pic Url</TableHeaderColumn>
                    </BootstrapTable>
                </div>
                <div className="adminQuerySection">
                    <h1 className="queryHeader">All our Raters.</h1>
                    <BootstrapTable
                        data={this.state.raters}
                        striped
                        hover
                        bordered={false}
                        height='500'
                        scrollTop={'Top'}
                        options={this.state.optionsRater}
                        deleteRow={true}
                        selectRow={this.state.selectRowProp}>
                        <TableHeaderColumn isKey dataField='userId' dataSort>UserID</TableHeaderColumn>
                        <TableHeaderColumn dataField='name' dataSort>Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='type'>Type</TableHeaderColumn>
                        <TableHeaderColumn dataField='reputation'>Reputation</TableHeaderColumn>
                        <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
                        <TableHeaderColumn dataField='join_date'>Join Date</TableHeaderColumn>
                    </BootstrapTable>
                </div>
                <div className="adminQuerySection">
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel className="queryHeader">Select a Query</ControlLabel>
                        <FormControl
                            componentClass="select"
                            onChange={this.handleSelectionChange}
                            value={this.state.value}
                            placeholder="select">
                            <option value="http://127.0.0.1:5000/restaurants">Get All Restaurants</option>
                            <option value="test">Query 2</option>
                            <option value="other">...</option>
                        </FormControl>
                    </FormGroup>
                </div>
                <div className="adminRetrievedDataSection">
                    <BootstrapTable
                        data={this.state.dummydata}
                        keyField='id'
                        striped
                        hover
                        bordered={false}
                        condensed
                        height='400'
                        scrollTop={'Top'}>
                        {this
                            .state
                            .columns
                            .map(column => <TableHeaderColumn dataField={column}>{column}</TableHeaderColumn>)}
                    </BootstrapTable>
                </div>
            </section>
        )
    }
}