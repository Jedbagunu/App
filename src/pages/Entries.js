import React, { useState, useEffect, useContext } from 'react';
import AdminView from '../components/AdminView';
import PersonalView from '../components/PersonalView';
import { Container } from 'react-bootstrap';


import UserContext from '../UserContext';

export default function Entries(){
  const [ entries, setEntries ] = useState([])

  const { user } = useContext(UserContext)

  const fetchData = () => {
    fetch(`${ process.env.REACT_APP_API_URL}/entries/all`)
    .then(res => res.json())
    .then(data => {
      setEntries(data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])


  return(
    <Container className="py-3 mt-4 sm-4">
      {
        user.isAdmin === true 
        ?
        <>
         <AdminView  entriesData={entries} fetchData={fetchData}/>
         <PersonalView entriesData={entries}/>
        </>
       
        :
        <PersonalView entriesData={entries}/>
      }
    </Container>
  )
}