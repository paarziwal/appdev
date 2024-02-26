import '../assets/css/Home.css';

const Home = () => {
  const handleButtonClick = () => {
    // You can replace this with the desired functionality
    console.log('Button clicked!');
  };

  return (
    <div className='background'>
      <div className='background-image'></div>
      <div className='inner-text'>
        EduConnect : --------------------------
      </div>
      <button className="lets-go-button" onClick={handleButtonClick}>Explore Courses</button>
    </div>
  );
}

export default Home;
