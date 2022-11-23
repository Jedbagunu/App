import React, { useEffect, useState, useContext } from 'react'
import { Form, Table, Button, Modal, Accordion, Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap';
import EntryCard from '../components/EntryCard';
import PersonalView from '../components/PersonalView';

import Swal from 'sweetalert2'


import {Col } from 'react-bootstrap';
import {useParams, useNavigate} from 'react-router-dom'
import UserContext from '../UserContext'
	

	


export default function AdminView(props){

	const { entriesData, fetchData } = props
	const [ entries, setEntries ] = useState([])
	const [id, setId] = useState("")
	const [name, setName] = useState("")
	const [targetDate, setTargetDate] = useState("")
	const [reason, setReason] = useState("")
	const [description, setDescription] = useState("")
	const [price, setPrice] = useState(0)
	const [showAdd, setShowAdd] = useState(false)
	const [showEdit, setShowEdit] = useState(false)
	const [toggle, setToggle] = useState(false)
	const [ordersList, setOrdersList] = useState([])

	const openAdd = () => setShowAdd(true)
	const closeAdd = () => setShowAdd(false)

	const {entryId} = useParams()

	const {user} = useContext(UserContext)

	const navigate = useNavigate()
	const openEdit = (entryId) => {


		setId(entryId)

		fetch(`${ process.env.REACT_APP_API_URL }/entries/${entryId}/single`)
		.then(res => res.json())
		.then(data => {
			setName(data.name)
			setDescription(data.description)
			setReason(data.reason)
			setTargetDate(data.targetDate)
		})

		setShowEdit(true)
	}

	const closeEdit = () => {
		setName("")
		setDescription("")
		setTargetDate("")
		setReason("")
		setShowEdit(false)
	}

	const addEntry = (e) => {
		e.preventDefault()
		fetch(`${process.env.REACT_APP_API_URL}/entries/createEntry`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${ localStorage.getItem('token') }`,
				'Content-Type': 'application/json'

			},
			body: JSON.stringify({
				name: name,
				description: description,
				reason: reason,
				targetDate: targetDate
			})
		})
		.then(res => res.json())
		.then(data => {
			if(data === data){
				fetchData()
				Swal.fire({
					title: "Success!",
					icon: "success",
					text: "Added new Goal!"
				})
				setName("")
				setDescription("")
				setPrice(0)
				closeAdd()
			}else{
				Swal.fire({
					title: "error!",
					icon: "error",
					text: "Try again!"
				})
				closeAdd()
			}
		})
	}

	const editEntry = (e, entryId) => {

		e.preventDefault()

		fetch(`${process.env.REACT_APP_API_URL}/entries/${entryId}/update`, {
		method: 'PATCH',
		headers: {
			Authorization: `Bearer ${ localStorage.getItem('token') }`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			name: name,
			description: description,
			reason: reason,
			targetDate: targetDate
		})
	})
	.then(res => res.json())
	.then(data => {
		if(data === data){
			fetchData()
			Swal.fire({
					title: "Success!",
					icon: "success",
					text: "Entry Updated!"
				})
			setName("")
			setDescription("")
			setPrice(0)
			closeEdit()
		}else{
			Swal.fire({
					title: "error!",
					icon: "error",
					text: "Try again!"
				})
			closeEdit()
		}
	})
	}

	const archiveEntry = (entryId) => {
			fetch(`${process.env.REACT_APP_API_URL}/entries/${ entryId }/archive`, {
			method: 'PATCH',
			headers: {
				Authorization: `Bearer ${ localStorage.getItem('token') }`,
			}
		})
		.then(res => res.json())
		.then(data => {
			if(data === data){
				fetchData()
				Swal.fire({
					title: "Success!",
					icon: "success",
					text: "Entry Archived!"
				})
			}else{
				Swal.fire({
					title: "Success!",
					icon: "error",
					text: "Try again!"
				})
			}
		})
	}

	const activateEntry = (entryId) => {
			fetch(`${process.env.REACT_APP_API_URL}/entries/${ entryId }/activate`, {
			method: 'PATCH',
			headers: {
				Authorization: `Bearer ${ localStorage.getItem('token') }`,
			}
		})
		.then(res => res.json())
		.then(data => {
			if(data === data){
				fetchData()
				Swal.fire({
					title: "Success!",
					icon: "success",
					text: "Entry Enabled!"
				})
			}else{
				Swal.fire({
					title: "Success!",
					icon: "error",
					text: "Try again!"
				})
			}
		})
	}

	const deleteEntry = (entryId) => {
			fetch(`${process.env.REACT_APP_API_URL}/entries/${ entryId }/delete`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${ localStorage.getItem('token') }`,
			}
		})
		.then(res => res.json())
		.then(data => {
			if(data === data){
				fetchData()
				Swal.fire({
					title: "Success!",
					icon: "success",
					text: "Entry Deleted!"
				})
			}else{
				Swal.fire({
					title: "Success!",
					icon: "error",
					text: "Try again!"
				})
			}
		})
	}
	const createOrder = (entryId) => {
		fetch(`${process.env.REACT_APP_API_URL}/users/create`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				entryId:entryId,
				userId: user.id
			})
		})
		.then(response => response.json())
		.then(result => {
			if(result) {
				Swal.fire({
					title: "Success!",
					icon: "success",
					text: "You have ordered successfully!"
				})

				navigate('/products')
			} else {
				console.log(result)

				Swal.fire({
					title: "Something went wrong!",
					icon: "error",
					text: "Please try again :("
				})
			}
		})
	
	}

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

	useEffect(()=> {
		fetch(`${process.env.REACT_APP_API_URL}/users`, {
			headers: {
				Authorization: `Bearer ${ localStorage.getItem('token') }`,
			}
		})
		.then(res => res.json())
		.then(data => {

		let orders = data.map((user, index)=> {

				return(
					<Card className="py-3 mt-4 sm-4" key={user.userId}>
						<Accordion.Toggle  as={Card.Header} eventKey={index + 1} className="bg-secondary text-white">
							Orders for user <span className="text-warning">{user.email}</span>
						</Accordion.Toggle>
						<Accordion.Collapse eventKey={index + 1}>
							<Card.Body>
								{user.orders.length > 0
									?
									user.orders.map((order) => {
										return (

											<div key={order._id}>
												<h6>Purchased on {(order.purchasedOn).format("MM-DD-YYYY")}:</h6>
												<ul>
												{
													order.entries.map((product)=> {
														return (
															<li key={product._id}>{product.productName} - Quantity: {product.quantity}</li>
														)															
													})
												}
												</ul>
												<h6>Total: <span className="text-warning">₱{order.totalAmount}</span></h6>
												<hr/>
											</div>
										)
									})

									:
									<span>No orders for this user yet.</span>
								}
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				)
			})
			setOrdersList(orders)
		})
	}, [])
	

	const toggler = () => {
		if(toggle === true){
			setToggle(false)
		}else{
			setToggle(true)
		}
	}

	useEffect(() => {

		const entriesArr = entriesData.map(entryData => {
			return (
				<tr key={entryData._id}>
					<td>{entryData._id}</td>
					<td>{entryData.name}</td>
					<td>{entryData.description}</td>
					<td>{entryData.reason}</td>
					<td>{entryData.targetDate}</td>
					<td>{entryData.createdOn}</td>			
					<td>
						{
							entryData.isActive
							?
							<span>Ongoing </span>
							:
							<span>Completed {entryData.completedOn} </span>
						}
					</td>	
					<td>
						<Button variant="primary" size="sm" onClick={() => openEdit(entryData._id)}>Update</Button>
						
						{entryData.isActive
							?
							<Button variant="success" size="sm" onClick={() => archiveEntry(entryData._id)}>Complete</Button>
							:
							 <Button variant="success" size="sm" onClick={() => activateEntry(entryData._id)}>Enable</Button>
						}

						<Button variant="danger"  size="sm" onClick={() => deleteEntry(entryData._id)}>Delete</Button>
						
						
					</td>
				</tr>
				)
			})
			
		setEntries(entriesArr)	
	}, [entriesData])

	
	return(
		<React.Fragment>
		   <div className="text-center my-4">
			<h2 className="product-title">Career Dashboard</h2>
			  <div className="d-flex justify-content-center">
				<Button className="m-3" variant="primary" onClick={openAdd}>Add Entry</Button>
			  </div>
		   </div>

			<Table striped bordered hover responsive>
				<thead className="bg-secondary text-white">
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Description</th>
						<th>Reason</th>
						<th>Target Date</th>
						<th>Date Created</th>
						
						<th>Status</th>
						<th>Actions</th>
					
					</tr>
				</thead>
				<tbody>
					{entries}
				</tbody>						
			</Table>
			
			{/*ADD Entry*/}
			<Modal show={showAdd} onHide={closeAdd}>
				<Form onSubmit={e => addEntry(e)}>
					<Modal.Header closeButton>
						<Modal.Title>Add New Entry</Modal.Title>
					</Modal.Header>
					<Modal.Body>
							<Form.Group controlId="entryName">
								<Form.Label>Name:</Form.Label>
								<Form.Control type="text" placeholder="Enter entry name" value={name} onChange={e => setName(e.target.value)} required/>
							</Form.Group>

							<Form.Group controlId="entryDescription">
								<Form.Label>Description:</Form.Label>
								<Form.Control type="text" placeholder="Enter entry description" value={description} onChange={e => setDescription(e.target.value)} required/>
							</Form.Group>

							<Form.Group controlId="entryReason">
								<Form.Label>Reason:</Form.Label>
								<Form.Control type="text" placeholder="Enter reason"  value={reason} onChange={e => setReason(e.target.value)} required/>
							</Form.Group>

							<Form.Group controlId="entryTargetData">
								<Form.Label>Target Date:</Form.Label>
								<Form.Control type="text" placeholder="Enter target Date"  value={targetDate} onChange={e => setTargetDate(e.target.value)} required/>
							</Form.Group>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={closeAdd}>Close</Button>
						<Button variant="success" type="submit">Submit</Button>
					</Modal.Footer>
				</Form>	
			</Modal>

			{/*EDIT Entry*/}

			<Modal show={showEdit} onHide={closeEdit}>
				<Form onSubmit={e => editEntry(e, id)}>
					<Modal.Header closeButton>
						<Modal.Title>Edit Entry</Modal.Title>
					</Modal.Header>
					<Modal.Body>
							<Form.Group controlId="entryName">
								<Form.Label>Name:</Form.Label>
								<Form.Control type="text" placeholder="Enter entry name" value={name} onChange={e => setName(e.target.value)} required/>
							</Form.Group>

							<Form.Group controlId="entryDescription">
								<Form.Label>Description:</Form.Label>
								<Form.Control type="text" placeholder="Enter entry description" value={description} onChange={e => setDescription(e.target.value)} required/>
							</Form.Group>

							<Form.Group controlId="entryReason">
								<Form.Label>Reason:</Form.Label>
								<Form.Control type="text" placeholder="Enter entry reason" value={reason} onChange={e => setReason(e.target.value)} required/>
							</Form.Group>

							<Form.Group controlId="entryTargetDate">
								<Form.Label>targetDate:</Form.Label>
								<Form.Control type="text" placeholder="Enter entry target date" value={targetDate} onChange={e => setTargetDate(e.target.value)} required/>
							</Form.Group>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={closeEdit}>Close</Button>
						<Button variant="success" type="submit">Submit</Button>
					</Modal.Footer>
				</Form>	
			</Modal>
		</React.Fragment>

	)



}