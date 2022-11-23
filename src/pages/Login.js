import React from 'react';
import {MDBContainer, MDBCol, MDBRow} from 'mdb-react-ui-kit';
import {useState, useEffect, useContext} from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import { Navigate} from 'react-router-dom'
import UserContext from '../UserContext'
import Swal from 'sweetalert2'




export default function Login(){

  //global access for user
  const {user, setUser} = useContext(UserContext)
  //global access user end

  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState("")
  const [password, setPassword] = useState('')

  

  // For determining if button is disabled or not
  const [isActive, setIsActive] = useState(false)

    const retrieveUser = (token)=>{
      fetch(`${process.env.REACT_APP_API_URL}/users/details`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(result =>{
        console.log(result)

        //stores the suer details retrieved from the token into the global state
        setUser({
          id: result._id,
          isAdmin: result.isAdmin
        })
      })
    }


  function authenticate(event){
    event.preventDefault()

    fetch (`${process.env.REACT_APP_API_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password

      })
    })
    .then(response => response.json())
    .then(result => {
      //stores token in localstorage if not undefined
      if(typeof result.access !== "undefined") {
        localStorage.setItem('token', result.access)

        retrieveUser(result.access)

        Swal.fire({
          title: 'Login Successfully',
          icon: 'success',
          text:'Welcome'
        }) 

      }  else {
        Swal.fire({
          title: 'Oops...',
            icon: 'error',
            text: 'Please Register!'
         
        })

      }

    })

  }



  useEffect(() => {
    if((email !== '' && password !== '')){
      // Enables the submit button if the form data has been verified
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [email, password])

  return (
  
     (user.id !== null) ?

    <Navigate to="/entries"/>
      :

    <MDBContainer className="login-container py-5 mt-5">
    
      <MDBRow >
        <MDBCol  md='4' className="card-login ">
          <Form onSubmit={event => authenticate(event)}>
              <Row >
                <Col className="p-2 ">
                    <h1 className="product-title"> SIGN IN</h1>
                    <p>Welcome!</p>
                   <hr className="line"/>
                </Col>
              </Row> 
            <Form.Group  lg={{ span: 8, offset: 2 }}controlId="userEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                  type="email" 
                  placeholder="Enter email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  required
                  />
            
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                  type="password" 
                  placeholder="Password"
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                  required
              />
            </Form.Group>
              { 
                isActive ?
              <Button  type="submit" id="submitBtn" className="mt-3" >Submit</Button>
              :
              <Button  type="submit" id="submitBtn" className="mt-3" disabled>Submit</Button>
              }
          </Form>
       
          <div className='text-center text-md-start pt-1'>
            <p className="small fw-bold pt-1 mt-3">Don't have an account? <a href="/register" className="link-danger">Register</a></p>

          </div>
              <p className="text1">
              We'll never share your details with anyone else.
              </p>
        </MDBCol>
        <MDBCol className="login-image col-lg-8" style={{  
                backgroundImage: "url( https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9naW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60)",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
            }}/> 
      </MDBRow>
    </MDBContainer>
 
    
  );
}
