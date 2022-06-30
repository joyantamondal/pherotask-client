import { Button, Form, InputGroup, Modal } from 'react-bootstrap';

const BillingModal = ({openBilling, handleBillingClose}) => {
  const handleBillingSubmit = e =>{
    alert('Submitting');
  
  }
    return (
        <>
         <Modal show={openBilling} onHide={handleBillingClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Bill</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleBillingSubmit}>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">
              Full Name
            </InputGroup.Text>
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Phone</InputGroup.Text>
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">
              Paid Amount
            </InputGroup.Text>
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleBillingClose}>
            Add Bill
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    );
};

export default BillingModal;