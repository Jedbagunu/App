import { useState, useEffect, useContext } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import {useParams, useNavigate, Link} from 'react-router-dom'
import UserContext from '../UserContext'
import Swal from 'sweetalert2'

export default function Entry() {

	const {entryId} = useParams()

	const {user} = useContext(UserContext)

	const navigate = useNavigate()

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [reason, setReason] = useState("");
	const [targetDate, setTargetDate] = useState("");

	
	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/entries/${entryId}/single`)
		.then(response => response.json())
		.then(result => {
			setName(result.name)
			setDescription(result.description)
			setReason(result.reason)
			setTargetDate(result.targetDate)
		})
	}, [entryId])

	return(
		<Container className="mt-5 p-3 ">
			<Row>
				<Col lg={{ span: 12}}>
					<Card className="bg-specific">
						<Card.Body className="text-center bg-specific mt-5">
							<Card.Title>Priority</Card.Title>
							<Card.Subtitle>{name}</Card.Subtitle>
							<Card.Title>Description:</Card.Title>
							<Card.Text>{description}</Card.Text>
							<Card.Title>Target Date:</Card.Title>
							<Card.Text>{targetDate}</Card.Text>
							<Link className="btn btn-danger btn-block" to="/login">Go to Dashboard to take Actions</Link>
							
						</Card.Body>		
					</Card>
				</Col>
			</Row>
				
		</Container>


	)
}
