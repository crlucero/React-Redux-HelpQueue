import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx> {`
        .header {
          background-color: skyblue;
          text-align: center;
        }
      `}

      </style>
      <div className='header'>
        <h1>Help Queue</h1>
        <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
      </div>
      
    </div>
  );
}

export default Header;
