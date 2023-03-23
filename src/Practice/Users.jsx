import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
const Users = () => {
  let [data,SetData]=useState([])
  let deleteDetails=(id)=>{
    axios.delete(`http://localhost:3000/content/${id}`)
    .then(()=>{
      console.log("Data has been deleted")
    })
    .catch(()=>{
      console.log("Data has not been deleted")
    })
  }
  useEffect(()=>{
    axios.get("http://localhost:3000/content")
    .then((lena)=>{
      SetData(lena.data)
    })
    .catch(()=>{
      console.log("The data not found")
    })
  },[])
  return (
    <div id={style.frame}>
      {data.map((x)=>{
        return(
<div class={style.PersonalDetails}>
          <table>
      <tr></tr>
        <tr>
          <td>Name</td>
          <td>:{x.name}</td>
        </tr>
        
        <tr>
        <td>Degree</td>
          <td>:{x.degree}</td>
        </tr>
        <tr>
        <td>Y.O.P.</td>
          <td>:{x.yop}</td>
        </tr>
        <tr>
        <td>Percentage</td>
          <td>:{x.percentage}</td>
        </tr>
        <tr>
          <th ><button><Link to={`/edit/${x.id}`}>Edit</Link></button></th>
          <th colSpan={6}><button onClick={()=>{
            deleteDetails(x.id)
          }}>Delete</button></th>
        </tr>
      </table>
      </div>
        )
      })}
      

    </div>
  )
}

export default Users