
import { useState } from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import AddBillModal from '../AddBillModal/AddBillModal';

const SearchBar = () => {
     // for get table data
  

  // for modal
  const [openBilling, setBillingOpen] = useState(false);

  const handleBillingClose = () => setBillingOpen(false);
  const handleBillingOpen = () => setBillingOpen(true);
    return (
        <div>
            <Container>
        <Navbar className=" bg-secondary mb-2">
          <Container>
            <Navbar.Brand href="#home" className="text-white">
              <h6>Billings</h6>
            </Navbar.Brand>
            <Navbar.Brand href="#home" className="text-white border-0">
              <input type="text" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              {/* modal start  */}
              <Button variant="dark" onClick={handleBillingOpen}>
                Add New Bill
              </Button>
              

              {/* modal end  */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      <AddBillModal openBilling={openBilling} handleBillingClose={handleBillingClose}></AddBillModal>
        </div>
    );
};

export default SearchBar;