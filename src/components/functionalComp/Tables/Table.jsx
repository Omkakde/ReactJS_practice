import React from 'react';
import './Table.css';

const TableComponent = () => {
  const data = [
    { id: 1, name: 'John Doe', date: '2024-11-20', salary: '$5000', department: 'HR', day: 'Monday', tax: '$500' },
    { id: 2, name: 'Jane Smith', date: '2024-11-21', salary: '$6000', department: 'Finance', day: 'Tuesday', tax: '$600' },
    { id: 3, name: 'Alice Johnson', date: '2024-11-22', salary: '$7000', department: 'IT', day: 'Wednesday', tax: '$700' },
  ];

  return (
    <div className="table-container">
      <h2>Employee Information</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Salary</th>
            <th>Department</th>
            <th>Day</th>
            <th>Tax</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>{item.salary}</td>
              <td>{item.department}</td>
              <td>{item.day}</td>
              <td>{item.tax}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
