import { nanoid } from 'nanoid';
import { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import data from "../../../mock-data.json";

const NavBar = () => {
  // for get table data
  const [tableDatas, setTableDatas] = useState(data);
  const idd = nanoid();
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    paidAmount: "",
  });
  const handleBillingChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };
  const handleBillingSubmit = (event) => {
    event.preventDefault();
    const newBillData = {
      id: idd,
      fullName: addFormData.fullName,
      email: addFormData.email,
      phone: addFormData.phone,
      paidAmount: addFormData.paidAmount,
    };
    const newBillings = [...tableDatas, newBillData];
    setTableDatas(newBillings);
  };
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
      

      {/* *********** secondnav end ************* */}

      {/* **********table start**************  */}
      
      {/* ***************table end***********  */}
    </div>
  );
};

export default NavBar;
