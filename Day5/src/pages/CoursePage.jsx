import CourseCard from '../components/CollegeCards';
import '../assets/css/CoursePage.css'
import { Link } from 'react-router-dom';

// Sample data for courses
const courses = [
  {
    id: 1,
    name: 'Computer Science',
    image: 'https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_640.jpg',
    fee: 50000,
    seats: 20,
    duration: '6 months',
    description: 'Learn the fundamentals of computer science and programming.',
  },
  {
    id: 2,
    name: 'Data Science',
    image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=600',
    fee: 70000,
    seats: 15,
    duration: '8 months',
    description: 'Explore data analysis, machine learning, and big data technologies.',
  },
  {
    id: 3,
    name: 'Web Development',
    image: 'https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=600',
    fee: 45000,
    seats: 25,
    duration: '4 months',
    description: 'Build modern web applications using HTML, CSS, and JavaScript frameworks.',
  },
];

function CoursePage() {
  return (
    <div className="course-page">
      <h1>Available Courses</h1>
      <div className="course-list">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      {/* <button className="apply-button">APPLY NOW</button> */}
      <Link to="/user/courses" className="apply-button">APPLY NOW</Link>
    </div>
  );
}

export default CoursePage;
