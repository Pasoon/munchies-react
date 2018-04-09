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

        var dummydata = [
            {
                name: '',
                type: '',
                id: ''
            }, 
        ]
        this.state = {
            dummydata: [],
            columns: Object.keys(dummydata[0]),

        }

    }

    handleSelectionChange(e) {
        console.log(e.target.value)
        fetch(e.target.value)
        .then(response => {
            return response.json();
        }).then(results => {
          let data = results.items;
          console.log("results",data)
           this.setState({dummydata: data})
           this.setState({columns:Object.keys(data[0])})
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
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Select a Query</ControlLabel>
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
                    <Button bsStyle="primary" bsSize="large">Retrieve Data</Button>
                </div>
                <div className="adminRetrievedDataSection">
                    <BootstrapTable data={this.state.dummydata} keyField='id'>
                        {this.state.columns.map(column => <TableHeaderColumn dataField={column}>{column}</TableHeaderColumn>)}
                    </BootstrapTable>
                </div>
            </section>
        )
    }
}