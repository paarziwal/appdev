import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../assets/css/Home.css";
// import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    return ( 
        <>
        <div className="whole">
            <header>
                <Navbar/>
            </header>
         <div className="Landing">
            
      <div className="showcase">
        <img src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
        <div className="overlay" />
        <div className="text">
          <h2>adMISSION Portal </h2>
          <h3>admit with ease</h3>
          <p>
            <b>EDU CONNECT</b>  is a platform that can help high school
            candidates to manage their college applications. The platform serves
            as the central hub for the applicants for their end-to-end
            application journey. It also serves as a central hub for
            institutions in order to manage the incoming applications.
          </p>

          <button className="letsGo" onClick={() => navigate('/login')} type="button">LETS GO</button>
        </div>
      </div>
    </div>
      <Footer/>
      </div>
        </>
     );
}

export default Home;