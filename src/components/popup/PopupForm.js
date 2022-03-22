import React from "react";
import { Modal, Container } from "react-bootstrap";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import ZohoBannerForm from "../ZohoBannerForm/ZohoBannerForm.js"



const PopupForm = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="Documents"
            style={{ paddingLeft: "0px" }}
        >
            <Container>
                <span className={"modalIcon"} onClick={props.onHide}>
                    <ArrowBackIcon />
                </span>
                <ZohoBannerForm />
            </Container>
        </Modal>
    );
};

export default PopupForm;