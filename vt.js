import Form from 'react-bootstrap/Form';
import { data } from './Data.js';
import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import './index.css';

function Search() {
    const [search, setSearch] = useState('');
    return (<div>
    
    <h1 className=" text-center left_c">
            List of Employees
    </h1>
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search by name"
        className="me-2  w-75 ms-5 "
        aria-label="Search"

        onChange={(e) => setSearch(e.target.value)}
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
    <tbody>
      {data.filter((item) => {
              return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search);
        })
        .map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.designation}</td>
            <td>{item.team}</td>
            
          </tr>))}
        

        </tbody>

    </Table></div>
    
    

  );
}


  