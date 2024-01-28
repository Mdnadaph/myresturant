import React from 'react'
import Layout from '../components/layout/Layout'
import { Link, NavLink } from 'react-router-dom'
import Girls from "../images/girls.jpg";
import "../styles/HomeStyles.css";


const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Girls})`}}>
        <div className="headercontainer">
          <h1>Hygienic foods here</h1>
          <p>Best Food in our local area</p>
          <div  className='btn'>
            <NavLink to="/menu">
             <button>ORDER NOW</button>
            </NavLink>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
