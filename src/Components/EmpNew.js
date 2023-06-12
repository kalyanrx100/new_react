import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function EmpNew() {

const [firstName,setFirstName] = useState()
const navigate = useNavigate()
const submit = async()=>{
await axios.post(`https://633245c8a54a0e83d24e58d8.mockapi.io/cude_project`,{firstName})
navigate('/')
}


  return (
    <>
    <input onChange={(e)=>setFirstName(e.target.value)}></input>
    <button onClick={submit}>Submit</button>
    </>
  )
}

export default EmpNew