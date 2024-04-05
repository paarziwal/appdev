// AdminStudent.jsx
import { useState } from 'react';
import AdminNavBar from '../components/Admin_Navbar';
// import PropTypes from 'prop-types';

const AdminStudent = () => {
  const [enrollments, setEnrollments] = useState([
    // Sample initial data, you can replace it with actual data
    {
      collegeId: '12345',
      courseName: 'Computer Science',
      courseDuration: '4 years',
      courseFee: '$5000',
      status: 'Pending',
    },
    {
      collegeId: '67890',
      courseName: 'Electrical Engineering',
      courseDuration: '5 years',
      courseFee: '$6000',
      status: 'Pending',
    },
    // ... add more enrollments as needed
  ]);

  const handleStatusUpdate = (index, newStatus) => {
    // Update the status of the enrollment at the given index
    const updatedEnrollments = [...enrollments];
    updatedEnrollments[index].status = newStatus;
    setEnrollments(updatedEnrollments);
  };

  return (
    <>
    <header>
    <AdminNavBar />
  </header>
    <div className="admin-student-container">
      <h1>Admin Student Panel</h1>
      {enrollments.map((enrollment, index) => (
        <div key={index} className="enrollment-item">
          <p>
            <strong>College ID:</strong> {enrollment.collegeId}
          </p>
          <p>
            <strong>Course Name:</strong> {enrollment.courseName}
          </p>
          <p>
            <strong>Duration:</strong> {enrollment.courseDuration}
          </p>
          <p>
            <strong>Course Fee:</strong> {enrollment.courseFee}
          </p>
          <p>
            <strong>Status:</strong> {enrollment.status}
          </p>
          {enrollment.status === 'Pending' && (
            <div className="status-buttons">
              <button onClick={() => handleStatusUpdate(index, 'Accepted')}>Accept</button>
              <button onClick={() => handleStatusUpdate(index, 'Declined')}>Decline</button>
            </div>
          )}
          <hr />
        </div>
      ))}
    </div>
    </>
  );
};

AdminStudent.propTypes = {};

export default AdminStudent;
