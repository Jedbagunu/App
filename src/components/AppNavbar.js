import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import{ Link, NavLink } from 'react-router-dom'
import {useContext} from 'react'
import UserContext from '../UserContext'
import {Container} from 'react-bootstrap';


export default function AppNavbar() {


    const {user} = useContext(UserContext)
    return (
    <Navbar style={{backgroundColor: "#A5C9CA"}} className="nav fixed-top col-sm-12" expand="lg">
      <Container className="col-8 nav-bg  " >
       <img  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMbrcnSjdWfdgmHKkJpJ3FnLQmefMINdQHw&usqp=CAU"} alt="Sample Image" height="50" className="p-2"/>
        <Navbar.Brand as={Link} to="" className="nav-name" >My Career</Navbar.Brand>
          
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ml-auto">
            <Nav.Link  as={Link} to="/">Home</Nav.Link>
         
            { (user.isAdmin) ?
                
                <Nav.Link    as={Link} to="/entries">Dashboard</Nav.Link>
                 :
                <Nav.Link as={Link} to="/entries">Goals</Nav.Link>
                  
            }

              <Nav className="ml-auto">
                    {    (user.id !== null) 
                        ?
                            user.isAdmin === true 
                            ?

                              <Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
                            :
                            <>
                           
                                <Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
                            </>

                
              
                        :
                      <>

                      <Nav.Link as={Link} to="/login">Login</Nav.Link>
                      <Nav.Link as={Link} to="/register">Register</Nav.Link>
                      </>
                    }
            
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
