import '../assets/css/CourseCards.css';
import { useState } from 'react';

function CourseCard({ course }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className={`course-card ${expanded ? 'expanded' : ''}`} onClick={toggleExpand}>
        <div className="course-image">
          <img src={course.image} alt={course.name} />
        </div>
        <div className="course-details">
          <h2>{course.name}</h2>
          {!expanded && (
            <div className="short-info">
              <p><strong>Fee:</strong> ${course.fee}</p>
              <p><strong>Seats:</strong> {course.seats}</p>
            </div>
          )}
        </div>
      </div>
      {expanded && (
        <div className="popup" onClick={toggleExpand}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={course.image} alt={course.name} />
            <h2>{course.name}</h2>
            <p><strong>Fee:</strong> ${course.fee}</p>
            <p><strong>Seats:</strong> {course.seats}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Description:</strong> {course.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default CourseCard;
