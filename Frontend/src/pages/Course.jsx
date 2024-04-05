import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Enroll from './Enroll'; // Import the Enroll component
import '../assets/css/Enroll.css'; // Import the existing Enroll.css
import '../assets/css/Course.css'; // Import the Courses.css if you have one

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEnrollPopup, setShowEnrollPopup] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:8080/api/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filteredCourses = courses.filter((course) =>
      course.courseName.toLowerCase().includes(value.toLowerCase())
    );

    setCourses(filteredCourses);
  };

  const handleEnrollClick = (course) => {
    setSelectedCourse(course); // Set the selected course details
    setShowEnrollPopup(true);
  };

  const handleEnrollClose = () => {
    setShowEnrollPopup(false);
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
          <div className="courses-container">
            <h1 style={{ color: 'white', textAlign: 'center' }}>List of Courses</h1>
            <br />
            {/* Search bar */}
            <input
              type="text"
              placeholder="Search by Course Name"
              value={searchTerm}
              onChange={handleSearch}
              className="search-bar"
            />
            <br />
            <br />
            <div className="courses-list">
            {courses.map((course, index) => (
              <div key={index} className="course-item">
                <h2>{course.courseName}</h2>
                <p><strong>Duration:</strong> {course.courseDuration}</p>
                <p><strong>Fees:</strong> {course.fees}</p>
                <p><strong>No. of Seats:</strong> {course.noOfSeats}</p>
                <button className="enroll-button" onClick={() => handleEnrollClick(course)}>
              Enroll
            </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
      {showEnrollPopup && (
        <Enroll
          onClose={handleEnrollClose}
          onEnroll={() => { /* Handle enrollment action */ }}
          selectedCourse={selectedCourse}
        />
      )}
    </div>
  );
};

export default Courses;