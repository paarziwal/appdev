import React from 'react';
import '../../assets/css/Home.css';
import pic from "../../assets/videos/univclip1.mp4"

const Home = () => {
  return (
    <div className="background-video">
      

      <video autoPlay loop muted>
        <source src={pic} type="video/mp4" />
      </video>
      <div className='filter'></div>
      <div className="overlay">
        <h1>Learn from the top ranked Universities</h1>
        <button>Explore Courses <span>&rarr;</span></button>
      </div>
    </div>
  );
};

export default Home;
