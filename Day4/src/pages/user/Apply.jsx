import React, { useState } from 'react';
import '../../assets/css/Apply.css';

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    gender: '',
    nationality: '',
    college: '',
    course: '',
    previousEducation: '',
    previousMarks: '',
    extracurricularActivities: '',
    statementOfPurpose: '',
    isSubmitted: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here
    setFormData({ ...formData, isSubmitted: true });
  };

  return (
    <div className="form-container">
      <h2>Apply for a Course</h2>
      {formData.isSubmitted ? (
        <div className="thank-you">
          <p>Thank you for applying!</p>
          <span className="tick">&#10004;</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>State:</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Zip Code:</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Nationality:</label>
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Select College:</label>
            <select
              name="college"
              value={formData.college}
              onChange={handleChange}
              required
            >
              <option value="">Select College</option>
              {/* Add college options */}
            </select>
          </div>
          <div className="form-group">
            <label>Select Course:</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select Course</option>
              {/* Add course options */}
            </select>
          </div>
          <div className="form-group">
            <label>Previous Education:</label>
            <input
              type="text"
              name="previousEducation"
              value={formData.previousEducation}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Previous Marks:</label>
            <input
              type="text"
              name="previousMarks"
              value={formData.previousMarks}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Extracurricular Activities:</label>
            <textarea
              name="extracurricularActivities"
              value={formData.extracurricularActivities}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Statement of Purpose:</label>
            <textarea
              name="statementOfPurpose"
              value={formData.statementOfPurpose}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">Apply</button>
        </form>
      )}
    </div>
  );
}

export default Form;
