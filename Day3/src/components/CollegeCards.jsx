import '../assets/css/CourseCards.css';
import { useState } from 'react';

// id: 1,
//     name: 'Sri Krishna ',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSC6Am_1m91SCJEQfMhjbLVJ1d-0w8aRSnznWXrOAGfQ&s',
//     city: 50000,
//     rating: 20,
//     description: 'Learn the fundamentals of computer science and programming.',

function CollegeCards({ course }) {
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
              <p><strong>City:</strong> {course.city}</p>
              <p><strong>Rating:</strong> {course.rating}</p>
            </div>
          )}
        </div>
      </div>
      {expanded && (
        <div className="popup" onClick={toggleExpand}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={course.image} alt={course.name} />
            <h2>{course.name}</h2>
            <p style={{marginTop : '20px'}}><strong>City:</strong> {course.city}</p>
            <p style={{marginTop : '20px'}}><strong>rating:</strong> {course.rating}</p>
            <p style={{marginTop : '20px'}}><strong>Description:</strong> {course.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default CollegeCards;
