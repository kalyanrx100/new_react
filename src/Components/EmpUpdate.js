import React, { useState } from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import axios from 'axios'


function EmpUpdate() {

const navigate = useNavigate()
const location = useLocation()
const data = location.state.data    
const [firstName,setFirstName] = useState(data.firstName)

const submit = async()=>{
await axios.put(`https://633245c8a54a0e83d24e58d8.mockapi.io/cude_project/${data.id}`,{firstName})
navigate('/')
}



  return (
    <>
    <input value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
    <button onClick={submit}>Submit</button>
    </>
  )
}

export default EmpUpdate