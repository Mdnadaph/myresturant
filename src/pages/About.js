
import React from 'react';
import {NavLink} from "react-router-dom";
import Layout from '../components/layout/Layout';
import team from "../images/team_Work.jpg";
import "../styles/AboutStyles.css";


const About = () => {
  return (
    <>
    <Layout>
    <section id='header' className='d-flax align-items-center '>
     <div className='container-fluid'>
        <div className='row'>
            <div className='col-10 mx-auto'>
            <div className="row">
            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
            <h1 className='main_h1'>
                Hi,<br /><strong className='brand_name'>Well Come to My Resturant</strong>
            </h1>
            <h2 className='my-3 text1 '>
                We are the team of my resturant Proving one of the world's most popular foods
            </h2>
            <div className='btn1'>
                <NavLink to="/menu" className='btn'>ORDER NOW</NavLink>
            </div>
            </div>   
                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                    <img src={team} className='img-fluid animated ' alt="home photo" />
                </div>        
            </div>
        </div>
        </div>
     </div>
    </section>  
   </Layout>
  </>
  )
}

export default About;



