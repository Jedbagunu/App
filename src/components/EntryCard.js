import React from 'react'
import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react'





export default function Product(props){
  const { breakPoint, data } = props
   const [entries, setEntries] = useState([])

  const { _id, name, description, targetDate} = data

  return(
    <Col style={{position: "sticky"}} className="p-2 "  xs={12} md={breakPoint}>
      <Card className="card1">
        <Card.Body>
          <Card.Title className="text-center card2">
            <Card.Title  to={`/entries/${_id}`}>{name}</Card.Title>
          </Card.Title>
          <Card.Text className="card3">{description}</Card.Text>
          <h5 className="text-warning">{targetDate}</h5>
        </Card.Body>
        <Card.Footer>
         
          <Link className="btn  btn-block" to={`/entries/${_id}`}>Details</Link>
     
          
        </Card.Footer>
      </Card>
    </Col>




   
  )
}
