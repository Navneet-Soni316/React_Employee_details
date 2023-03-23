import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import { useParams } from 'react-router-dom'
const EditUsers = () => {
  let [name,Setname]=useState()
  let [degree,Setdegree]=useState()
  let [yop,Setyop]=useState()
  let [percentage,Setpercentage]=useState()
  let [data,Setdata]=useState([])
  let {idx}=useParams();
  useEffect(()=>{
    axios.get(`http://localhost:3000/content/${idx}`)
    .then((res)=>{
      console.log(res.data)
      
      Setdegree(res.data.degree)
      Setyop(res.data.yop)
      Setpercentage(res.data.percentage)
      Setname(res.data.name)

    })
  },[])
  let nameData=(e)=>{
    e.preventDefault();
Setname(e.target.value)
  }
  let degreeData=(e)=>{
    e.preventDefault();
    Setdegree(e.target.value)
    
  }
  let yopData=(e)=>{
    e.preventDefault();
    Setyop(e.target.value)
    
  }
  let percentageData=(e)=>{
    e.preventDefault();
    Setpercentage(e.target.value)
  }
  let updateDetails=(e)=>{
    e.preventDefault();
    console.log(name,degree,yop,percentage)
    let dabba={name,degree,yop,percentage}
    axios.put(`http://localhost:3000/content/${idx}`,dabba)
    .then(()=>{
      console.log("Content Editted")
    })
    .catch(()=>{
      console.log("Content not Editted")
    })
    
  }
  return (
    <div id={style.details}>
       <table>
            <tr>
            <th colSpan={2}>
                    Student Details
                </th>
            </tr>
            <tr>
                <td>Name</td>
            <td><input type="text" value={name} onChange={nameData} /></td>
            </tr>
            <tr>
            <td>Degree</td>
            <td><input type="text " value={degree}  onChange={degreeData}/></td>
            </tr>
            <tr>
            <td>Y.O.P</td>
            <td><input type="text " value={yop}  onChange={yopData}/></td>
            </tr>
            <tr>
            <td>Percentage</td>
            <td><input type="text " value={percentage}  onChange={percentageData}/></td>
            </tr>
            <tr>
                <th colSpan={2}>
                    <button onClick={updateDetails}>Update</button>
                </th>
            </tr>
            <tr></tr>
        </table>
      
    </div>
  )
}

export default EditUsers