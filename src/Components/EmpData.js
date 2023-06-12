// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import {useNavigate} from 'react-router-dom'




// function EmpData() {

// const [data,setData] = useState()

// const getData = async()=>{
// const gdata = await axios('https://633245c8a54a0e83d24e58d8.mockapi.io/cude_project')
// setData(gdata.data)
// }

// useEffect(()=>{
//     getData()
// },[])

// //console.log(data)

// const navigate = useNavigate()
// const update = (d)=>{
// navigate('/eu',{state:{data:d}})
// }



//   return (
//     <>
//     <th>FNAME</th>
//     <th>LNAME</th>
//     <th>PHONE</th>
//     {
//         data?
//         data.map((d)=>{
// return(
//     <tr key={d.id}>
//         <td>{d.firstName}</td>
//         <td>{d.lastName}</td>
//         <td>{d.phone}</td>
//         <button onClick={()=>update(d)}>Edit</button>
//     </tr>
// )
//         })
//         :null
//     }
//     </>
//   )
// }

// export default EmpData


import React,{useEffect, useState} from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
import axios from 'axios'

function EmpData(){

const [data,setData] = useState()


const getData = async()=>{
const gData = await axios.get('https://633245c8a54a0e83d24e58d8.mockapi.io/cude_project')
setData(gData.data)
}

useEffect(()=>{
getData()
},[])

const navigate = useNavigate()
const editEmp = (d)=>{
navigate('/eu',{state:{data:d}})
}

console.log(data)

return(
    <>
    {
        data?
        data.map((d)=>{

            return(
                <tr key={d.id}>
                    <td>{d.firstName}</td>
                    <td>{d.lastName}</td>
                    <td>{d.phone}</td>
                    <button onClick={()=>editEmp(d)}>Edit</button>
                </tr>
            )
        })
        :null
    }
    </>
)


}

export default EmpData;