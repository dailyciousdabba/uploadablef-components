import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { QRCode } from 'react-qr-svg';
import { isMobile } from "react-device-detect";

export const ExampleComponent = ({QRCodedata,ButtonName,ButtonVariant}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <div>
          <Button variant={ButtonVariant} onClick={handleShow}>
              {ButtonName}
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
                                  value={JSON.stringify(QRCodedata)}
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
