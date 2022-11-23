import { Navigate } from 'react-router-dom'
import UserContext from '../UserContext'
import {useEffect, useContext} from 'react'



export default function Logout () {
	const{unsetUser, setUser} = useContext(UserContext)
	
	//Using the context, clear the contents of the local storage
	unsetUser()

	useEffect(()=>{
		setUser ({
			id: null
		})
	}, [])

	return(
		<Navigate to="/login"/>

		)
}