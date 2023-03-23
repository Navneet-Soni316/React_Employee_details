import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import style from"./homepage.module.css"

const Createusers=()=>{
    let [name, setName] = useState("")
    let [salary, setSalary]= useState("")
    let[company, setCompany]=useState("")

     let navigate = useNavigate()

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        setCompany(e.target.value)
    }
    let formHandle=(e)=>{
        e.preventDefault()
        console.log(name, salary,company)
        let payload={name,salary,company}
        axios.post("http://localhost:3000/content",payload)
        .then(()=>{
            console.log("DATA HAS BEEN ADDED");
        })
        .catch(()=>{
            console.log("SOMETHING IS WRONG");
        })

        navigate("/Users")
    }
    return(
        <section id={style.myForm}>
                {/* <h1>I am Createusers Components</h1> */}
                
                    <table>
                        <tr>
                            <td><label>Name :</label></td>
                            <td><input type="text" value={name} onChange={nameData} /></td>
                        </tr>
                        <tr>
                            <td><label>Salary :</label></td>
                            <td><input type="text" value={salary} onChange={salaryData} /></td>
                        </tr>
                        <tr>
                            <td><label>Company : </label></td>
                            <td><input type="text" value={company} onChange={companyData}/></td>
                        </tr>
                        <tr>
                            <th colSpan="2"><button onClick={formHandle}>Submit</button></th>
                        </tr>
                    </table>
       </section>
       
    )
}
export default Createusers