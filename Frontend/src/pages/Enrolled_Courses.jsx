import { useState } from 'react';
import '../assets/css/Course.css';
import NavBar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const EnrolledCourses = () => {
  const initialCourses = [
    {
      name: "Computer Science",
      duration: "4 years",
      department: "Engineering",
      institutesOffering: 20,
    },
    {
      name: "Mechanical",
      duration: "4 years",
      department: "Engineering",
      institutesOffering: 20,
    },
    {
      name: "IT",
      duration: "4 years",
      department: "Engineering",
      institutesOffering: 20,
    },

    // Add more courses as needed
  ];

  const [courses, setCourses] = useState(initialCourses);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle search
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter courses based on search term
    const filteredCourses = initialCourses.filter((course) =>
      course.name.toLowerCase().includes(value.toLowerCase())
    );

    setCourses(filteredCourses);
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
           <Sidebar/>
          <div className="courses-container">
            <h1 style={{ color: 'white', textAlign: 'center' }}>List of Enrolled Courses</h1>
            <br></br>
            <input
              type="text"
              placeholder="Search by Course Name"
              value={searchTerm}
              onChange={handleSearch}
              className="search-bar"
            />
            <br></br>
            <br></br>
            <div className="courses-list">
              {courses.map((course, index) => (
                <div key={index} className="course-item">
                  <h2>{course.name}</h2>
                  <p><strong>Duration:</strong> {course.duration}</p>
                  <p><strong>Department:</strong> {course.department}</p>
                  <p><strong>Institutes Offering:</strong> {course.institutesOffering}</p>
                  <button
                    className="enroll-button"
                  >
                    Enrolled
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

export default EnrolledCourses;