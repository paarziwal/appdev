import Courses from './Courses.jsx';

function Coursesdata() {
  // Sample course data
  const courses = [
    {
      image: '../../src/assets/images/computer.jpg',
      name: 'Computer Science',
      fee: 1000,
      seats: 50,
      duration: '4 years',
      description: 'Engage and learn',
    },
    {
        image: '../../src/assets/images/univ1.jpg',
      name: 'Electrical Engineering',
      fee: 1200,
      seats: 40,
      duration: '4 years',
      description: 'Elevate your skills',
    },
    {
      image: '../../src/assets/images/univ.jpg',
    name: 'Mechanical Engineering',
    fee: 1800,
    seats: 35,
    duration: '4 years',
    description: 'Develop your skills',
  }
    // {
    //     image: '../../src/assets/images/ba.jpg',
    //   name: 'Business Administration',
    //   fee: 800,
    //   seats: 60,
    //   duration: '4 years',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    // },
  ];

  return (
    <div className="App">
      {/* <h1>Courses</h1> */}
      <Courses courses={courses} />
    </div>
  );
}

export default Coursesdata;