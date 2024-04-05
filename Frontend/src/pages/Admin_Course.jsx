import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from '../components/Admin_Navbar';
import { useLocation } from 'react-router-dom';

const AdminCourses = () => {
  const location = useLocation();
  const instituteId = location.state && location.state.instituteId;

  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editedCourse, setEditedCourse] = useState({});
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [newCourse, setNewCourse] = useState({
    courseName: '',
    courseDuration: '',
    fees: '',
    noOfSeats: '',
  });

  const backendAPIUrl = 'http://localhost:8080/api/courses';

  useEffect(() => {
    fetchCourses();
  }, []); // Fetch courses on component mount

  const fetchCourses = async () => {
    try {
      const response = await axios.get(backendAPIUrl);
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Perform search filtering locally
    const filteredCourses = courses.filter((course) =>
      course.courseName.toLowerCase().includes(value.toLowerCase())
    );

    setCourses(filteredCourses);
  };

  const handleAdd = () => {
    setShowAddPopup(true);
  };

  const handleSaveAdd = async () => {
    console.log(instituteId);
    try {
      const response = await axios.post(`${backendAPIUrl}/${instituteId}`, newCourse);
      setCourses([...courses, response.data]);
      alert('Course added successfully!');
      setShowAddPopup(false);
    } catch (error) {
      console.error('Error adding course:', error);
      // Handle error
    }
  };

  const handleEdit = (index) => {
    const courseToEdit = courses[index];
    setEditedCourse(courseToEdit);
    setShowEditPopup(true);
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(`${backendAPIUrl}/${editedCourse.courseId}`, editedCourse);
      const updatedCourses = courses.map((course) =>
        course.courseId === editedCourse.courseId ? editedCourse : course
      );
      setCourses(updatedCourses);
      alert('Course updated successfully!');
      setShowEditPopup(false);
    } catch (error) {
      console.error('Error updating course:', error);
      // Handle error
    }
  };

  const handleDelete = async (index) => {
    const courseIdToDelete = courses[index].courseId;
    try {
      await axios.delete(`${backendAPIUrl}/${courseIdToDelete}`);
      const updatedCourses = courses.filter((course) => course.courseId !== courseIdToDelete);
      setCourses(updatedCourses);
      alert('Course deleted successfully!');
    } catch (error) {
      console.error('Error deleting course:', error);
      // Handle error
    }
  };

  return (
    <div className="whole">
      <header>
        <AdminNavBar />
      </header>
      <div className="Landing">
        <div className="showcase">
          <img
            src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="..."
          />
          <div className="courses-container">
            <h1 style={{ color: 'white', textAlign: 'center' }}>List of Courses</h1>
            <br></br>
            <input
              type="text"
              placeholder="Search by Course Name"
              value={searchTerm}
              onChange={handleSearch}
              className="search-bar"
            />
            <br></br>
            <button className="add-institute-button" onClick={() => handleAdd()}>
              Add Course
            </button>
            <br></br><br></br><br></br>
            <div className="courses-list">
              {courses.map((course, index) => (
                <div key={index} className="course-item">
                  <h2>{course.courseName}</h2>
                  <p><strong>Duration:</strong> {course.courseDuration}</p>
                  <p><strong>Fees:</strong> {course.fees}</p>
                  <p><strong>No. of Seats:</strong> {course.noOfSeats}</p>

                  <div className="admin-actions">
                    <button className="admin-edit-btn" onClick={() => handleEdit(index)}>
                      Edit
                    </button>
                    <button className="admin-delete-btn" onClick={() => handleDelete(index)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showEditPopup && (
        <div className="edit-course-popup-container">
          <div className="edit-popup">
            <h4>Edit Course Details</h4>
            <div className="edit-form">
              <label htmlFor="editedName">Name:</label>
              <input
                type="text"
                id="editedName"
                value={editedCourse.courseName}
                onChange={(e) => setEditedCourse({ ...editedCourse, courseName: e.target.value })}
              />

              <label htmlFor="editedDuration">Duration:</label>
              <input
                type="text"
                id="editedDuration"
                value={editedCourse.courseDuration}
                onChange={(e) => setEditedCourse({ ...editedCourse, courseDuration: e.target.value })}
              />

              <label htmlFor="editedFees">Fees:</label>
              <input
                type="text"
                id="editedFees"
                value={editedCourse.fees}
                onChange={(e) => setEditedCourse({ ...editedCourse, fees: e.target.value })}
              />

              <label htmlFor="editedSeats">No. of Seats:</label>
              <input
                type="text"
                id="editedSeats"
                value={editedCourse.noOfSeats}
                onChange={(e) => setEditedCourse({ ...editedCourse, noOfSeats: e.target.value })}
              />
            </div>
            <button onClick={handleSaveEdit}>Update</button>
            <button onClick={() => setShowEditPopup(false)}>Cancel</button>
          </div>
        </div>
      )}

      {showAddPopup && (
        <div className="add-course-popup-container">
          <div className="add-popup">
            <h4>Add New Course</h4>
            <div className="add-form">
              <label htmlFor="addName">Name:</label>
              <input
                type="text"
                id="addName"
                value={newCourse.courseName}
                onChange={(e) => setNewCourse({ ...newCourse, courseName: e.target.value })}
              />

              <label htmlFor="addDuration">Duration:</label>
              <input
                type="text"
                id="addDuration"
                value={newCourse.courseDuration}
                onChange={(e) => setNewCourse({ ...newCourse, courseDuration: e.target.value })}
              />

              <label htmlFor="addFees">Fees:</label>
              <input
                type="text"
                id="addFees"
                value={newCourse.fees}
                onChange={(e) => setNewCourse({ ...newCourse, fees: e.target.value })}
              />

              <label htmlFor="addSeats">No. of Seats:</label>
              <input
                type="text"
                id="addSeats"
                value={newCourse.noOfSeats}
                onChange={(e) => setNewCourse({ ...newCourse, noOfSeats: e.target.value })}
              />

              <button onClick={handleSaveAdd}>Add</button>
              <button onClick={() => setShowAddPopup(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCourses;
