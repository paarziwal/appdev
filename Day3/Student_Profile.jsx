// StudentProfile.js
import React from 'react';
import '../assets/css/Student_Profile.css';

const studentData = {
  name: 'John Doe',
  photo: 'https://via.placeholder.com/150', // Placeholder image
  rollNumber: '123456',
  email: 'john@example.com',
  batch: '2024',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus eros at posuere sollicitudin. Fusce hendrerit vitae lectus a porta. Nulla facilisi. Proin at dui non dui vehicula auctor. Suspendisse potenti. Aliquam feugiat fringilla nulla, vel venenatis nunc tincidunt non.',
  hobbies: ['Reading', 'Traveling', 'Photography'],
  achievements: ['First Place in Science Fair', 'Best Student Award'],
};

function StudentProfile() {
  return (
    <div className="student-profile">
      <div className="profile-photo-container">
        <img src={studentData.photo} alt={`${studentData.name}'s Photo`} className="profile-photo" />
      </div>
      <div className="profile-details">
        <h1>{studentData.name}</h1>
        <p><strong>Roll Number:</strong> {studentData.rollNumber}</p>
        <p><strong>Email:</strong> {studentData.email}</p>
        <p><strong>Batch:</strong> {studentData.batch}</p>
        <h2>Bio</h2>
        <p>{studentData.bio}</p>
        <h2>Hobbies</h2>
        <ul>
          {studentData.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
        <h2>Achievements</h2>
        <ul>
          {studentData.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StudentProfile;
