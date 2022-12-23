import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
import React,{useState} from "react";
import { data } from './Data.js';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import './index.css';

function Filter() {
    const [ser_team, setSearchTeam] = useState('');
    return (
        
            <div>
            <h1 className=" text-center left_c">
            List of Employees
    </h1>
        <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search by Team Name"
        className="me-2 w-75 ms-5"
        aria-label="Search"

        onChange={(e) => setSearchTeam(e.target.value)}
      />
      
    </Form>

            <Table  border hover className='table_c table' >
    <thead>
    <tr>
            <th>Full name</th>
            <th>Designation</th>
            <th>Team</th>  
    </tr>
    </thead>
    <tbody>{data.filter((item) => {
              return ser_team.toLowerCase() === '' ? item : item.team.toLowerCase().includes(ser_team);
        })
        .map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.designation}</td>
            <td>{item.team}</td>
            
            </tr>))}</tbody>
                    </Table>
        </div>
    );
    
  
  
   
    
}
