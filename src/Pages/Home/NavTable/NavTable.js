import { useState } from "react";
import { Button, Container, Navbar, Table } from "react-bootstrap";
import BillingModal from "../BillingModal/BillingModal";

const NavTable = () => {
    // for modal
    const [openBilling, setBillingOpen] = useState(false);

  const handleBillingClose = () => setBillingOpen(false);
  const handleBillingOpen = () => setBillingOpen(true);
  return (
    <div>
      {/************  nav start  *********** */}
      <Navbar className=" bg-secondary mb-5">
        <Container>
          <Navbar.Brand href="#home" className="text-white">
            Logo
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="text-white">Paid Total : 0</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* ***********nav end ************* */}

      {/************ second  nav start  *********** */}
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
            <Button variant="dark" onClick={handleBillingOpen}>Add New Bill</Button> 
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      <BillingModal openBilling={openBilling} handleBillingClose={handleBillingClose}></BillingModal>
      {/* *********** secondnav end ************* */}

      {/* **********table start**************  */}
      <Container>
        <Table striped bordered hover className="bg-secondary">
          <thead>
            <tr className="text-white">
              <th>Billing ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Paid Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-white">1</td>
              <td className="text-white">Mark</td>
              <td className="text-white">Otto</td>
              <td className="text-white">@mdo</td>
              <td className="text-white">@mdo</td>
              <td className="text-white">Edit | Delete</td>
            </tr>

            <tr>
              <td className="text-white">2</td>
              <td className="text-white">Jacob</td>
              <td className="text-white">Thornton</td>
              <td className="text-white">@fat</td>
              <td className="text-white">Thornton</td>
              <td className="text-white">Edit | Delete</td>
            </tr>
            <tr>
              <td className="text-white">3</td>
              <td className="text-white">Jacob</td>
              <td className="text-white">Thornton</td>
              <td className="text-white">@fat</td>
              <td className="text-white">Thornton</td>
              <td className="text-white">Edit | Delete</td>
            </tr>
          </tbody>
        </Table>
      </Container>
      {/* ***************table end***********  */}
    </div>
  );
};

export default NavTable;
