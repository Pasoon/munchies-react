import React, {Component} from 'react';
import {
    Jumbotron,
    Grid,
    Row,
    Col,
    Image,
    Button,
    FormControl,
    ControlLabel,
    HelpBlock,
    InputGroup,
    FormGroup,
    Modal,
    Popover,
    Tooltip,
    Overlay,
    OverlayTrigger,
    FieldGroup,
    Form
} from 'react-bootstrap';

export default class AddRestaurantModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
          show: false
        };
      }

      handleClose() {
        this.setState({ show: false });
      }

      handleShow() {
        this.setState({ show: true });
      }

      handleAdd(){
          
      }

    render(){
        return(
            <div>
                <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>Add a Restaurant</Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a Restaurant</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form horizontal>
                        <FormGroup controlId="formHorizontalRName">
                            <Col componentClass={ControlLabel} sm={3}>
                            Name:
                            </Col>
                            <Col sm={9}>
                            <FormControl type="text" placeholder="Shawarma Palace" />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalType">
                            <Col componentClass={ControlLabel} sm={3}>
                            Type:
                            </Col>
                            <Col sm={9}>
                            <FormControl type="text" placeholder="Lebanese" />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalWebUrl">
                            <Col componentClass={ControlLabel} sm={3}>
                            Website URL:
                            </Col>
                            <Col sm={9}>
                            <FormControl type="website" placeholder="http://shawarmapalace.ca/" />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalRImgUrl">
                            <Col componentClass={ControlLabel} sm={3}>
                            Image URL:
                            </Col>
                            <Col sm={9}>
                            <FormControl type="text" placeholder="http://shawarmapalace.ca/wp-content/uploads/2017/06/25-1920x1000.jpg" />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col smOffset={3} sm={10}>
                            <Button type="submit" onClick={this.handleAdd}>Add</Button>
                            </Col>
                        </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}