import { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import data from "../../../mock-data.json";

const DataTable = () => {
    const [tableDatas, setTableDatas] = useState(data);
    return (
        <div>
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
            {tableDatas.map((tableData) => (
               <tr>
               <td className="text-white">{tableData.id}</td>
               <td className="text-white">{tableData.fullName}</td>
               <td className="text-white">{tableData.email}</td>
               <td className="text-white">{tableData.phone}</td>
               <td className="text-white">{tableData.paidAmount}</td>
               <td className="text-white">Edit | Delete</td>
             </tr>
            ))}
          </tbody>
        </Table>
      </Container>
        </div>
    );
};

export default DataTable;