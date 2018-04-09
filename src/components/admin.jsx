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

export default class Admin extends Component{
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
                    <FormControl componentClass="select" placeholder="select">
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
                </div>
            </section>
        )
    }
}