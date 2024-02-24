
import '../../assets/css/Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-regular-svg-icons';


const StudentProfile = () => {
  return (
    <div className="student-profile-container py-4">
      <div className="profile-container">
        <div className="profile-info">
          <div className="profile-picture">
            <img 
              className="profile-img" 
              src="https://placeimg.com/640/480/arch/any" 
              alt="" 
            />
            <div className="profile-details">
              <p><strong>Student ID:</strong> 321000001</p>
              <p><strong>Name:</strong> Blah Bleh P</p>
              <p><strong>Class:</strong> 4</p>
              <p><strong>Section:</strong> A</p>
            </div>
          </div>
        </div>
      </div>
      <div className="general-info">
        <div className="info-header">
          <h3><FontAwesomeIcon icon={faClone} /> General Information</h3>
        </div>
        <div className="info-body">
          <table className="info-table">
            <tbody>
              <tr>
                <th>Roll</th>
                <td>125</td>
              </tr>
              <tr>
                <th>Academic Year</th>
                <td>2020</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>Male</td>
              </tr>
              <tr>
                <th>Religion</th>
                <td>Hindu</td>
              </tr>
              <tr>
                <th>Blood</th>
                <td>B+</td>
              </tr>
              <tr>
                <th>10th percentage</th>
                <td>85%</td>
              </tr>
              <tr>
                <th>12th percentage</th>
                <td>90%</td>
              </tr>
              <tr>
                <th>Aadhar Number</th>
                <td>9064 8735 2024</td>
              </tr>
            </tbody>
              <tr>
                <th>Father's Name</th>
                <td>Gokul</td>
              </tr>
              <tr>
                <th>Mother's Name</th>
                <td>Gomathi</td>
              </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
