import  { useState } from 'react';
import PropTypes from 'prop-types';
import "../../assets/css/AddCollege.css"
const AddCollege = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    universityName: '',
    location: '',
    description: '',
    image: '',
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
      universityName: '',
      location: '',
      description: '',
      image: '',
    });
  };

  return (
    <div className="admin-form-container">
      <h2>Add University</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="universityName">University Name:</label>
          <input
            type="text"
            id="universityName"
            name="universityName"
            value={formData.universityName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
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
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add University</button>
      </form>
    </div>
  );
};

AddCollege.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddCollege;
