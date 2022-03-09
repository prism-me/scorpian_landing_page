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
        let email= this.state.email;
        let  phone_number= this.state.phone_number;
        let company= this.state.company;
        let designation= this.state.designation;

        // const user = this.state
        // debugger;
        axios.post(`https://prismcloudhosting.com/BUHEN/Apis/public/api/buhen-form`, { name ,email , phone_number })
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
                                    <div className="align-items-center input-button-wrap">

                                        <h4 className="text-center mb-3">Book Your Consultation</h4>

                                        <input
                                            type="text"
                                            className="form-control input"
                                            id="name"
                                            name="name"
                                            placeholder="Full Name"
                                            required="required"
                                            // value={isSubscribe.email}
                                            // onChange={handleOnChange}
                                            onChange={this.handleNameChange}
                                        />

                                        <input
                                            type="text"
                                            className="form-control input"
                                            id="phone_number"
                                            name="phone_number"
                                            placeholder="Phone Number"
                                            required="required"
                                            // value={isSubscribe.email}
                                            // onChange={handleOnChange}
                                            onChange={this.handlePhoneChange}
                                        />

                                        <input
                                            type="email"
                                            className="form-control input"
                                            id="email"
                                            name="email"
                                            placeholder="Email Address"
                                            required="required"
                                            // value={isSubscribe.email}
                                            // onChange={handleOnChange}
                                            onChange={this.handleEmailChange}
                                        />
                                        
                                        {/* <input
                                            type="text"
                                            className="form-control input"
                                            id="compay"
                                            name="company"
                                            placeholder="Company"
                                            required="required"
                                            // value={isSubscribe.email}
                                            // onChange={handleOnChange}
                                            onChange={this.handleCompanyChange}
                                        />
                                        <input
                                            type="text"
                                            className="form-control input"
                                            id="designation"
                                            name="designation"
                                            placeholder="Designation"
                                            required="required"
                                            // value={isSubscribe.email}
                                            // onChange={handleOnChange}
                                            onChange={this.handleDesignationChange}
                                        /> */}
                                        <button className="button btn solid-btn  hero_banner_button english  mt-2">
                                            BOOK YOUR CONSULTATION
                                        </button>
                                    </div>
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