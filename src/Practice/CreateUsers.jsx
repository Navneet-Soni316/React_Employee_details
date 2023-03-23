import React, { useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
const CreateUsers = () => {
    let [name,SetName]=useState("")
    let [degree, SetDegree]=useState("")
    let [yop, SetYop]=useState("")
    let [percentage, SetPercentage]=useState("")
    let nameData=(e)=>{
        SetName(e.target.value)
    }
    let degreeData=(e)=>{
        SetDegree(e.target.value)
    }
    let yopData=(e)=>{
        SetYop(e.target.value)
    }
    let percentageData=(e)=>{
        SetPercentage(e.target.value)
    } 
    let formHandle=(e)=>{
            e.preventDefault();
            console.log(name,degree,yop,percentage)
            let balti={name,degree,yop,percentage}
            axios.post("http://localhost:3000/content",balti)
            .then(()=>{
                console.log("Data has been added")
            })
            .catch(()=>{
                console.log("Data has not  been added")
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
                    <button onClick={formHandle}>Submit</button>
                </th>
            </tr>
            <tr></tr>
        </table>

    </div>
  )
}

export default CreateUsers