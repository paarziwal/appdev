import { useState } from 'react';
import PropTypes from 'prop-types';
import "../../assets/css/AddCollege.css"

const collegeData = ['College A', 'College B', 'College C'];

const AddCourse = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    collegeName: '', // New state for selected college name
    courseName: '',
    courseFee: '',
    seats: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      collegeName: '', // Reset college name after submission
      courseName: '',
      courseFee: '',
      seats: '',
      description: '',
    });
  };

  return (
    <div className="admin-form-container">
      <h2>Add Course</h2>
      <form onSubmit={handleSubmit}>

        {/* Dropdown for college selection */}
        <div className="form-group">
          <label htmlFor="collegeName">Select College:</label>
          <select
            id="collegeName"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            required
          >
            <option value="">Select a college</option>
            {/* Render options dynamically from collegeData */}
            {collegeData.map((college) => (
              <option key={college} value={college}>
                {college}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseFee">Course Fee:</label>
          <input
            type="text"
            id="courseFee"
            name="courseFee"
            value={formData.courseFee}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="seats">Seats:</label>
          <input
            type="text"
            id="seats"
            name="seats"
            value={formData.seats}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
};

AddCourse.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddCourse;
