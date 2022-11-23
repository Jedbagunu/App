import React from 'react';
import '../App.css';
import List from './List';
import {Button, Row, Col} from 'react-bootstrap'
import{ Link } from 'react-router-dom'

function ProductGallery() {
  return (
    <div className="myProduct mt-4 py-4 ">
      <header className="header">
        <h1 >Highlights and Certificates</h1>
        <Link to="/entries">
             <Button id="submitBtn" className="mt-3" disabled>DASHBOARD</Button>
        </Link>
      </header>
      <List/>
    </div>
  );
}

export default ProductGallery