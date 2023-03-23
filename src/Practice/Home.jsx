import React from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div id={style.nav}>
        <h1><Link class ={style.mod} to={'/'}> Create-Users</Link></h1>
        <h1><Link class ={style.mod} to={'/users'}>Users</Link></h1>

    </div>
  )
}

export default Home