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
    Form,
} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default class Admin extends Component{
    constructor(props){
        super(props);

        this.handleSelectionChange = this.handleSelectionChange.bind(this);

        var dummydata = [
            {
                name: 'Zeeshah',
                type: 'bangla',
                id: '3'
            },
            {
                name: 'Pasoon',
                type: 'afghan',
                id: '2'
            }
        ]
        this.state = {
            value: 'select',
            dummydata: dummydata
        }
    }

    handleSelectionChange(e) {
        this.setState({ value: e.target.value });

    
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
                    <FormControl componentClass="select" onChange={this.handleSelectionChange} value={this.state.value} placeholder="select">
                        <option value="select">Query 1</option>
                        <option value="select">Query 2</option>
                        <option value="select">Query 3</option>
                        <option value="select">Query 4</option>
                        <option value="select">Query 5</option>
                        <option value="other">...</option>
                    </FormControl>
                </FormGroup>
                <Button bsStyle="primary" bsSize="large">Retrieve Data</Button>
                </div>
                <div className="adminRetrievedDataSection">
                    <BootstrapTable data ={this.state.dummydata} striped hover bordered={ false } condensed
                    height='400' scrollTop={ 'Top' } className='dataTableColumns'>
                    {
                        this.state.dummydata.map((row, index)=>{
                                console.log("YESS SIRRRRR",row)
                                return <TableHeaderColumn dataField={row[index]}>{`${column}`}</TableHeaderColumn>
                                })
                    }
                    </BootstrapTable>
                </div>
            </section>
        )
    }
}