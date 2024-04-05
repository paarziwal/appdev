import NavBar from "../components/Navbar";
import '../assets/css/AboutUs.css'
import Footer from "../components/Footer";
// import React from 'react';
function Aboutus() {
    return ( 
    <>
     <div className="whole">
            <header>
                <NavBar/>
            </header>
         <div className="Landing">
            
      <div className="showcase">
        <img src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
        <div className="aboutsus-container">
      <h1 className="aboutsus-heading">ENJOY & IMPROVE YOUR SKILLS</h1>
      <h2 className="aboutsus-subheading">
      EduConnect: Unlocking educational opportunities and simplifying admissions, connecting students with institutes for a seamless journey towards academic excellence.
         </h2>
      <div className="aboutsus-features-container">
        <div className="aboutsus-feature aboutsus-card">
          <h3 className="aboutsus-feature-heading">Personalized Guidance</h3>
          <p className="aboutsus-feature-text">
          Receive expert advice from our dedicated admission counselors. Get personalized guidance to navigate the complex college admission process.          </p>
        </div>
        <div className="aboutsus-feature aboutsus-card">
          <h3 className="aboutsus-feature-heading">Application Support</h3>
          <p className="aboutsus-feature-text">
          Streamline your application process with our comprehensive support. We assist you in preparing and submitting applications to your desired colleges.
          </p>
        </div>
        <div className="aboutsus-feature aboutsus-card">
          <h3 className="aboutsus-feature-heading">Institute Connections</h3>
          <p className="aboutsus-feature-text">
          Explore a network of top-notch institutes. Connect with universities and colleges suitable for your academic goals and preferences.
          </p>
        </div>
        <div className="aboutsus-feature aboutsus-card">
          <h3 className="aboutsus-feature-heading">Scholarship Opportunities</h3>
          <p className="aboutsus-feature-text">
          Unlock scholarship possibilities. Our platform provides information on available scholarships to ease the financial burden of higher education.
          </p>
        </div>
      </div>
      <br></br><br></br>
        <footer>
      <Footer/>
    </footer>
    </div>
    </div>
    </div>
    </div>
   
   </> 
   );
}

export default Aboutus;