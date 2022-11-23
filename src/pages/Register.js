import {useState, useEffect, useContext} from 'react'
import {Form, Button} from 'react-bootstrap'
import {MDBContainer, MDBCol, MDBRow} from 'mdb-react-ui-kit';
import UserContext from '../UserContext'
import { useNavigate, Navigate } from 'react-router-dom'
import Swal from 'sweetalert2'




export default function Register(){
	
	const {user} = useContext(UserContext)


	const [email, setEmail] = useState('')
	const [password1, setPassword1] = useState('')
	const [password2, setPassword2] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [mobileNumber, setMobileNumber] = useState('')

	// For determining if button is disabled or not
	const [isActive, setIsActive] = useState(false)

	// Initialize useNavigate
	const navigate = useNavigate()


	function registerUser(event){
		event.preventDefault()

		fetch(`${process.env.REACT_APP_API_URL}/users/check-email`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email
			})
		}).then(response => response.json())
	      .then(result => {
	      	   if(result === true){
		      		Swal.fire({
			  			title: "Oops!",
			  			icon: "error",
			  			text: "Email is already in use! "
			  		})

			  	} else {
			  		fetch(`${process.env.REACT_APP_API_URL}/users/register`, {
			  			method: 'POST',
						headers: {
							'Content-Type': 'application/json',
			            },
			            body: JSON.stringify({
			            	firstName: firstName,
			            	lastName: lastName,
			            	mobileNo: mobileNumber,
			            	email: email,
			            	password: password1

                        })
			  		}).then(response => response.json())
			  		  .then(result => {
			  		  	   if(result !== false){
			  		  	   	setEmail('')
							setPassword1('')
							setPassword2('')
							setFirstName('')
							setLastName('')
							setMobileNumber('')

							Swal.fire({
				  			title: "Success!",
				  			icon: "success",
				  			text: "You have successfully Registered! "
			  		        })

							navigate('/login')

			  		  	   } else {
			  		  	   	Swal.fire({
				  			title: "Oops!",
				  			icon: "error",
				  			text: "Something Went Wrong! "
			  		        })
			  		  	   }
			  		    }) 
			    }
        })
    }

	useEffect(() => {
		if((firstName !== '' && lastName !== '' && mobileNumber.length === 11 && email !== '' && password1 !== '' && password2 !== '') && (password1 === password2)) {
			// Enables the submit button if the form data has been verified
			setIsActive(true)
		} else {
			setIsActive(false)
		}
	}, [firstName, lastName, mobileNumber, email, password1, password2])

	
		
	return(
		(user.id !== null ) ?
        <Navigate to="login"/>
    :
    
    <MDBContainer fluid className="py-5 my-5 h-custom">
      <MDBRow>
        <MDBCol style={{  
                backgroundImage: "url(https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9naW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60)",
                backgroundPosition: 'center',
                
                backgroundRepeat: 'no-repeat'
            }} col='10' md='6'>
        </MDBCol>
        <MDBCol col='4' md='6'>
        <Form className=" d-flex flex-column w-100 " onSubmit={event => registerUser(event)}>
     
          <Form.Group controlId="firstName mt-1 ">
              <Form.Label>First Name</Form.Label>
              <Form.Control 
                  type="text" 
                
                  value={firstName}
                  onChange={event => setFirstName(event.target.value)}  
                  required
              />
          </Form.Group>

          <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control 
                  type="text" 
            
                  value={lastName}
                  onChange={event => setLastName(event.target.value)}  
                  required
              />
          </Form.Group>

          <Form.Group controlId="mobileNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control 
                  type="text" 
                 
                  value={mobileNumber}
                  onChange={event => setMobileNumber(event.target.value)}  
                  required
              />
          </Form.Group>
          <Form.Group controlId="userEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                  type="email" 
              
                  value={email}
                  onChange={event => setEmail(event.target.value)}  
                  required
              />
          
          </Form.Group>

          <Form.Group controlId="password1">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                  type="password" 
                  
                  value={password1}
                  onChange={event => setPassword1(event.target.value)}  
                  required
              />
          </Form.Group>

          <Form.Group controlId="password2">
              <Form.Label>Verify Password</Form.Label>
              <Form.Control 
                  type="password" 
                 
                  value={password2}
                  onChange={event => setPassword2(event.target.value)}   
                  required
              />
          </Form.Group>


	          { isActive ? 
	            <Button className="mt-3" variant="primary" type="submit" id="submitBtn">Submit</Button>
	            :
	            <Button className="mt-3" variant="primary" type="submit" id="submitBtn" disabled>Submit</Button>
	          }
     	 </Form>
     	    <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
              </Form.Text>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
 
   )
}
