import React, { useEffect } from "react";
import { Modal, Button, Row, Col, Form, Container } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import axios from 'axios';


// const PopupForm = (props) => {
class PopupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone_number: "",
            email: ""
            // designation: "",
            // company: ""

        };
    }

    handleNameChange = event => {
        this.setState({ name: event.target.value });
    }

    handlePhoneChange = event => {
        this.setState({ phone_number: event.target.value });
    }

    handleEmailChange = event => {
        this.setState({ email: event.target.value });
    }


    // handleDesignationChange = event => {
    //     this.setState({ designation: event.target.value });
    // }

    // handleCompanyChange = event => {
    //     this.setState({ company: event.target.value });
    // }

    handleSubmit = event => {
        event.preventDefault();

        let name = this.state.name;
        let email = this.state.email;
        let phone_number = this.state.phone_number;
        let company = this.state.company;
        let designation = this.state.designation;

        // const user = this.state
        // debugger;
        axios.post(`https://prismcloudhosting.com/BUHEN/Apis/public/api/buhen-form`, { name, email, phone_number })
            .then(res => {
                if (res.status === 200 || res.status === 201) {
                    alert(res.data.message);
                }
                console.log(res);
                console.log(res.data);
            })
    }

    render() {

        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="Documents"
                style={{ paddingLeft: "0px" }}
            >
                <Container>
                    <Row>
                        <Col sm="auto">
                            <span className={"modalIcon"} onClick={this.props.onHide}>
                                <ArrowBackIcon />
                            </span>
                        </Col>
                        <Col sm>
                            <Modal.Body>
                                <Form
                                    // method="post"
                                    onSubmit={this.handleSubmit}
                                    className="banner-form"
                                >
                                    <h2 className="formheading">Contact Us</h2>
                                    <div className="row">
                                        <div className="col-md-6 d-flex align-items-center ">
                                            <label for="name">First Name <span className="text-danger"><sup>*</sup></span></label>
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                className="form-control input"
                                                id="name"
                                                name="name"
                                                // placeholder="Full Name"
                                                required="required"
                                                // value={isSubscribe.email}
                                                // onChange={handleOnChange}
                                                onChange={this.handleNameChange}
                                            />
                                        </div>
                                        <div className="col-md-6 d-flex align-items-center ">
                                            <label for="lname">Last Name <span className="text-danger"><sup>*</sup></span></label>
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                className="form-control input"
                                                id="lname"
                                                name="lname"
                                                // placeholder="Full Name"
                                                required="required"
                                                // value={isSubscribe.email}
                                                // onChange={handleOnChange}
                                                onChange={this.handleNameChange}
                                            />
                                        </div>
                                        <div className="col-md-6 d-flex align-items-center ">
                                            <label for="email">Email <span className="text-danger"><sup>*</sup></span></label>
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="email"
                                                className="form-control input"
                                                id="email"
                                                name="email"
                                                // placeholder="Email Address"
                                                required="required"
                                                // value={isSubscribe.email}
                                                // onChange={handleOnChange}
                                                onChange={this.handleEmailChange}
                                            />
                                        </div>
                                        <div className="col-md-6 d-flex align-items-center ">
                                            <label for="phone_number">Phone <span className="text-danger"><sup>*</sup></span></label>
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                className="form-control input"
                                                id="phone_number"
                                                name="phone_number"
                                                // placeholder="Phone Number"
                                                required="required"
                                                // value={isSubscribe.email}
                                                // onChange={handleOnChange}
                                                onChange={this.handlePhoneChange}
                                            />
                                        </div>
                                        <div className="col-md-6 d-flex align-items-center ">
                                            <label for="budget">Budget <span className="text-danger"><sup>*</sup></span></label>
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                className="form-control input"
                                                id="budget"
                                                name="budget"
                                                // placeholder="Phone Number"
                                                required="required"
                                                // value={isSubscribe.email}
                                                // onChange={handleOnChange}
                                                onChange={this.handlePhoneChange}
                                            />
                                        </div>
                                        <div className="col-md-6 d-flex align-items-center ">
                                            <label for="lookig_for">What are you looking for? <span className="text-danger"><sup>*</sup></span></label>
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                className="form-control input"
                                                id="lookig_for"
                                                name="lookig_for"
                                                // placeholder="Phone Number"
                                                required="required"
                                                // value={isSubscribe.email}
                                                // onChange={handleOnChange}
                                                onChange={this.handlePhoneChange}
                                            />
                                        </div>
                                    </div>
                                    <center>
                                        <button className="button btn solid-btn english hero_banner_button mt-4">
                                            Submit
                                        </button>
                                    </center>

                                </Form>
                            </Modal.Body>
                        </Col>
                    </Row>
                </Container>
            </Modal>
        );
    };

}

export default PopupForm;