import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div>
        <Navbar/>
<h1>Go to login</h1>
<Link to="/Login" >Login</Link>


    </div>
  )
}

export default Home