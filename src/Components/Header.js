import React from 'react'
import {useNavigate} from 'react-router-dom'

function Header() {


const navigate = useNavigate()
const empNew = ()=>{
navigate('/en')
}



  return (
    <>
    <button onClick={empNew}>Create New</button>
    </>
  )
}

export default Header