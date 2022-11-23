import React, { useEffect, useState } from 'react';
import EntryCard from '../components/EntryCard';
import { Row } from 'react-bootstrap';

export default function CustomerView({entriesData}){

	const [entries, setEntries] = useState([])

	useEffect(() => {

		const entriesArr = entriesData.map(entryData => {
			if(entryData.isActive === true){
				return <EntryCard data={entryData} key={entryData.entryId} breakPoint={4}/>
			}else {
				return null
			}
		})

		setEntries(entriesArr)
	}, [entriesData])

	return(
		<React.Fragment>
			<h2 className="product-title text-center mt-5">My Priorities and Goals</h2>
			<Row>
				{entries}
			</Row>
		</React.Fragment>
	)
}