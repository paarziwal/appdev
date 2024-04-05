import { useState } from 'react';
import '../assets/css/Profile_Creation.css';
import { useNavigate } from 'react-router-dom'; 
import NavBar from '../components/Navbar';
import { Link } from 'react-router-dom'; 
function ProfileCreation() {
    const [formData, setFormData] = useState({
      name: '',
      fatherName: '',
      motherName: '',
      gender: '',
      age: '',
      nationality: '',
      dob: '',
      address: '',
      mobile: '',
      sslcMarks: '',
      hscMarks: '',
      
    });
  
    const navigate = useNavigate();  

    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formData);
      navigate('/profile', { state: { userProfile: formData } });
    };
  return (
    <div className="whole">
      <header>
        <NavBar />
      </header>
      <div className="Landing">
        
        <div className="showcase">
        <img src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
        <form onSubmit={handleSubmit} className="profile-creation-form">
        <h2 style={{color:'white',textAlign:'center'}}>STUDENT DETAILS</h2>
        <br></br>
      <div className="form-row">
        <div className="form-column">

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
          <br></br>
          <label htmlFor="fatherName">Father Name:</label>
          <input
            type="text"
            name="fatherName"
            id="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
          />
          <br></br>
          <label htmlFor="gender">Gender:</label>
          <select name="gender" id="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <br></br>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleChange}
          />
          <br></br>
          <label htmlFor="nationality">Nationality:</label>
          <input
            type="text"
            name="nationality"
            id="nationality"
            value={formData.nationality}
            onChange={handleChange}
          />
          <br></br>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="text"
            name="dob"
            id="dob"
            value={formData.dob}
            onChange={handleChange}
            placeholder="dd-mm-yyyy"
          />
          <br></br>
        </div>
        <div className="form-column">
          <label htmlFor="address">Address:</label>
          <textarea
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
          />
          <br></br>
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          <br></br>
          <label htmlFor="sslcMarks">Marks SSLC:</label>
          <input
            type="number"
            name="sslcMarks"
            id="sslcMarks"
            value={formData.sslcMarks}
            onChange={handleChange}
          />
          <br></br>
          <label htmlFor="hscMarks">Marks HSC:</label>
          <input
            type="number"
            name="hscMarks"
            id="hscMarks"
            value={formData.hscMarks}
            onChange={handleChange}
          />
          <br></br>
          
         
        </div>
      </div>
      <br></br>
      <Link to={{ pathname: '/profile', state: { userProfile: formData } }}>
              <button type="button" className="submit-button">
                Submit
              </button>
            </Link>
    </form>
    </div>
      </div>
    </div>
  );
}

export default ProfileCreation;