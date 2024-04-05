import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Institute = () => {
  const navigate = useNavigate();
  const [institutes, setInstitutes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch initial data from the backend when the component mounts
    axios.get('http://localhost:8080/institutes')
      .then(response => {
        setInstitutes(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from the backend:', error);
      });
  }, []);

  // Function to handle search
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter institutes based on search term
    const filteredInstitutes = institutes.filter((institute) =>
      institute.instituteName.toLowerCase().includes(value.toLowerCase())
    );

    setInstitutes(filteredInstitutes);
  };

  return (
    <div className="whole">
      <header>
        <NavBar />
      </header>
      <div className="Landing">
        <div className="showcase">
          <img
            src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="..."
          />
          <Sidebar />
          <div className="institute-container">
            <h1 style={{ color: 'white', textAlign: 'center' }}>List of Institutes</h1>
            <br></br>
            {/* Search bar */}
            <input
              type="text"
              placeholder="Search by Institute Name"
              value={searchTerm}
              onChange={handleSearch}
              className="search-bar"
            />
            <br></br><br></br>
            <div className="institute-list">
              {institutes.map((institute, index) => (
                <div key={index} className="institute-item">
                  <h2>{institute.instituteName}</h2>
                  <p>
                    <strong>Location:</strong> {institute.instituteAddress}
                  </p>
                  <p>
                    <strong>Contact Number:</strong> {institute.mobile}
                  </p>

                  <p>
                    <strong>Email:</strong> {institute.email}
                  </p>
                  <p>
                    <strong>Courses Available:</strong> {institute.noOfCoursesAvailable}
                  </p>
                  <br></br>
                  <button className="course-btn" onClick={() => navigate('/course')}>
                    Course
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Institute;
