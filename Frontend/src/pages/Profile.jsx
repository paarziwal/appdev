
import { useState,useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import axios from 'axios';
import "../assets/css/Profile.css";
import NavBar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Profile = () => {
  const userData = useSelector((state) => state.user.user);
  const userEmail = userData.email;

  const [isEditMode, setEditMode] = useState(false);

  const getDefaultProfile = () => ({
        name: "Enter name",
        dob: "Enter dob in format (dd-mm-yyyy)",
        gender: "male/female",
        motherName: "Enter Mother name",
        fatherName: "Enter Father name",
        nationality: "Enter Nationality",
        age: 20,
        address: "Enter address",
        mobile: "Enter mobile number",
        marksSSLC: 96,
        marksHSC: 96,
    });

  const [profileData, setProfileData] = useState(getDefaultProfile());

  const studentId = userData.user?.student?.id || '';

  const fetchProfileData = useCallback(async () => {
      try {
          if (userData.user?.student) {
              const response = await axios.get(`http://localhost:8080/students/${userData.user.student.id}`);
              setProfileData(response.data || getDefaultProfile());
          } else {
              setProfileData(getDefaultProfile());
          }
      } catch (error) {
          console.error('Error fetching profile data:', error.message);
      }
  }, [userData.user?.student]);

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setProfileData((prevData) => ({
          ...prevData,
          [name]: value,
      }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        if (studentId) {
        await axios.put(`http://localhost:8080/students/${studentId}`, profileData);
        setEditMode(true); // Add this line
        fetchProfileData();
        
        } else {
            const response = await axios.post('http://localhost:8080/students', {
                user: userData.user,
                ...profileData,
            });
            setProfileData(response.data);
        }
    } catch (error) {
        console.error('Error updating profile:', error.message);
    }
};

  useEffect(() => {
    fetchProfileData();
  }, [fetchProfileData]);
 

  return (
    <div className="whole">
      <header>
        <NavBar />
      </header>
      <div className="Landing">
        <div className="showcase">
          <img
            src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="..."
          />
          <Sidebar />
          <div className="profile-container">
            <div className="profile-content">
              <h1 className="title">PROFILE</h1>
              <div className="profile-item">
                <span className="label">Email:</span>
                <span className="value">{userEmail}</span>
              </div>
              {Object.entries(profileData).map(([key, value]) => (
                <div className="profile-item" key={key}>
                  <span className="label">{key}:</span>
                  {isEditMode ? (
                    <input
                      type="text"
                      name={key}
                      value={value}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <span className="value">{value}</span>
                  )}
                </div>
              ))}
              {isEditMode ? (
                <button className="update-btn" onClick={handleSubmit}>
                  UPDATE PROFILE
                </button>
              ) : (
                <button
                  className="update-btn"
                  onClick={() => setEditMode(true)}
                >
                  EDIT PROFILE
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
