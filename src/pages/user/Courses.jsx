import  { useState } from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/Courses.css';

function Courses({ courses }) {
  const [expandedCourse, setExpandedCourse] = useState(null);

  const toggleExpand = (index) => {
    setExpandedCourse(expandedCourse === index ? null : index);
  };

  return (
    <div className="courses-container">
      {courses.map((course, index) => (
        <div
        className={`course-card ${expandedCourse === index ? 'expanded' : ''}`}
        key={index}
        onClick={() => toggleExpand(index)}
      >
          <div className="course-image">
            <img style={{width: "500px"}} src={course.image} alt={course.name} />
          </div>
          <div className="course-details">
            <h2>{course.name}</h2>
            {!expandedCourse && (
              <div className="short-info">
                <p>
                  <strong>Fee:</strong> ${course.fee}
                </p>
                <p>
                  <strong>Seats:</strong> {course.seats}
                </p>
              </div>
            )}
          </div>
          {expandedCourse === index && (
            <div className="popup">
              <div className="popup-content">
                <img src={course.image} alt={course.name} />
                <h2>{course.name}</h2>
                <p>
                  <strong>Fee:</strong> ${course.fee}
                </p>
                <p>
                  <strong>Seats:</strong> {course.seats}
                </p>
                <p>
                  <strong>Duration:</strong> {course.duration}
                </p>
                <p>
                  <strong>Description:</strong> {course.description}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

Courses.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      fee: PropTypes.number.isRequired,
      seats: PropTypes.number.isRequired,
      duration: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Courses;