import React from 'react'
import style from "./homepage.module.css"
// import Users from './Users'
import { Link } from 'react-router-dom'
// import Createusers from './Createusers'
const Homepage = () => {
  return (

    <section id={style.nav}>
        <Link to="/">Create-users</Link>             /*Only slash considered as homepage.  the addres given for to attribute in Link tag is same as given in patth attribute of route tag in APP.JSX*/
        <Link to="/users">Users</Link>

    </section>
  )
 
}

export default Homepage