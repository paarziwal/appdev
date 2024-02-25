
import '../../assets/css/Courses.css'; // Import your CSS file

function Courses({ cours }) {
  return (
    <div className="boxes-container">
      {cours.map((course, index) => (
        <div key={index} className="box">
          <img src={course.image} alt={course.name} className="course-image" />
          <h2>{course.name}</h2>
          <p>{course.description}</p>
          <p>Fees: {course.fees}</p>
        </div>
      ))}
    </div>
  );
}

export default Courses;
