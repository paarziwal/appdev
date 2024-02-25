
import Courses from './Courses'; // Import the Boxes component

function Coursesdata() {
  const courses = [
    {
      name: "Course 1",
      description: "This is the description of Course 1.",
      fees: "$100",
      image: "..course1.jpg" // Replace "course1.jpg" with the path to your image
    },
    {
      name: "Course 2",
      description: "This is the description of Course 2.",
      fees: "$150",
      image: "course2.jpg" // Replace "course2.jpg" with the path to your image
    },
    // Add more course objects as needed
  ]; // Example data array

  return (
    <div>
      <h1>Boxes</h1>
      <Courses data={courses} />
    </div>
  );
}

export default Coursesdata;