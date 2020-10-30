import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { QRCode } from 'react-qr-svg';
import { isMobile } from "react-device-detect";


const uploadImageObj = {
    "documentList": [
        {
          documentName: "Aadhar Card",
          id: "1",
          limit: 200,
          type: "jpeg",
          uploadURL: "https://abc.com/api/"
        },
        {
          documentName: "School XI Marksheet",
          id: "2",
          limit: 350,
          type: "jpeg",
          uploadURL: "https://abc.com/api/"
        }
      ]
}

class UploadableFButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show:false
        };

    }

    handleClose = () => {
        this.setState({show:false});
    }

    handleShow = () => {
        this.setState({show:true});
    }

    render() {

        return (
            <div>
                <Button variant="primary" onClick={this.handleShow}>
                    Scan and Upload
                </Button>
                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Open UploadableF App and Scan it</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col xs={12} md={12}>
                                    <QRCode
                                        level="Q"
                                        value={JSON.stringify(uploadImageObj)}
                                    />
                                </Col>
                            </Row>
                            <br />
                            {isMobile &&
                                <Row className="justify-content-md-center">
                                    <Col xs={12} md={12}>
                                        <Button variant="outline-primary">Open in App</Button>
                                    </Col>
                                </Row>
                            }

                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                    </Button>
                        <Button variant="primary">Done</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default UploadableFButton;