import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { QRCode } from 'react-qr-svg';
import { isMobile } from "react-device-detect";

export const ExampleComponent = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  return (
      <div>
          <Button variant="primary" onClick={handleShow}>
              Scan and Upload
          </Button>

          <Modal
              show={show}
              onHide={handleClose}
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
                  <Button variant="secondary" onClick={handleClose}>
                      Close
                  </Button>
                  <Button variant="primary">Done</Button>
              </Modal.Footer>
          </Modal>
      </div>


  );
}
