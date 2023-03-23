import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from "./homepage.module.css"
import { useNavigate } from 'react-router-dom'

const Editusers = () => {
    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")
    let[data,Setdata]=useState([])
    let{index}=useParams()
    let navigate = useNavigate()
    console.log(index)
    useEffect(()=>{
        axios.get(`http://localhost:3000/content/${index}`)
        .then((resp)=>{
            console.log(resp.data)
            setName(resp.data.name)
            setSalary(resp.data.salary)
            setCompany(resp.data.company)
        })
    },[])
    let nameData=(e)=>{
        e.preventDefault()
        setName(e.target.value)
    }
    let salData=(e)=>{
        e.preventDefault()
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        e.preventDefault()
        setCompany(e.target.value)
    }
    let upadtedDetails=(e)=>{
        e.preventDefault()
        console.log(name,salary,company)
        let container={name,salary,company}
        axios.put(`http://localhost:3000/content/${index}`,container)
        .then((response)=>{
            // Setdata(response.data)
            console.log("DATA HAS BEEN ADDED");
        })
        .catch(()=>{
            console.log("DATA HAS NOT BEEN ADDED")

        })
        navigate("/users")
        
    }
    
  return (
    <section id={style.myForm}>
    {/* <h1>I am Createusers Components</h1> */}
    
        <table>
            <tr><th colSpan={2}>
                <h3>Update Details</h3></th></tr>
            <tr>
                <td><label>Name :</label></td>
                <td><input type="text" value={name} onChange={nameData} /></td>
            </tr>
            <tr>
                <td><label>Salary :</label></td>
                <td><input type="text" value={salary}  onChange={salData}/></td>
            </tr>
            <tr>
                <td><label>Company : </label></td>
                <td><input type="text" value={company} onChange={companyData}/></td>
            </tr>
            <tr>
                <th colSpan="2"><button  onClick={upadtedDetails}>Update</button></th>
            </tr>
        </table>
</section>
  )
}

export default Editusers