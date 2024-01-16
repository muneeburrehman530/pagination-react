import React from "react";
import Table from "react-bootstrap/Table";
const TableData = ({ users }) => {
  return (
    <div>
      <Table striped bordered hover variant="dark" className="mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone No.</th>
            <th>Email</th>
            <th>Signup Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.full_Name}</td>
              <td>{item.email} </td>
              <td>{item.mobile_no}</td>
              <td>{item.signup_date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableData;
