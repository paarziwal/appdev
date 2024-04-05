import { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/Institute.css';
import { useNavigate } from 'react-router-dom';
import AdminNavBar from '../components/Admin_Navbar';

const AdminInstitute = () => {
  const navigate = useNavigate();
  const [institutes, setInstitutes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editedInstitute, setEditedInstitute] = useState({});
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [newInstitute, setNewInstitute] = useState({
    instituteName: '',
    instituteAddress: '',
    mobile: '',
    email: '',
    noOfCoursesAvailable: '', 
  });

  const backendAPIUrl = 'http://localhost:8080/institutes';

  useEffect(() => {
    axios.get(backendAPIUrl)
      .then(response => {
        setInstitutes(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from the backend:', error);
      });
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filteredInstitutes = institutes.filter((institute) =>
      institute.instituteName.toLowerCase().includes(value.toLowerCase())
    );

    setInstitutes(filteredInstitutes);
  };

  const handleAdd = () => {
    setNewInstitute({
      instituteName: '',
      instituteAddress: '',
      mobile: '',
      email: '',
      noOfCoursesAvailable: '',
    });
    setShowAddPopup(true);
  };

  const handleSaveAdd = () => {
    axios.post(backendAPIUrl, newInstitute)
      .then(response => {
        const updatedInstitutes = [...institutes, response.data];
        setInstitutes(updatedInstitutes);
        alert('Institute added successfully!');
        setShowAddPopup(false);
      })
      .catch(error => {
        console.error('Error adding institute:', error);
        if (error.response) {
          console.error('Server response data:', error.response.data);
          console.error('Server response status:', error.response.status);
          console.error('Server response headers:', error.response.headers);
        } else if (error.request) {
          console.error('No response received from the server:', error.request);
        } else {
          console.error('Error setting up the request:', error.message);
        }
      });
  };
  

  const handleEdit = (id) => {
    axios.get(`${backendAPIUrl}/${id}`)
      .then(response => {
        const instituteToEdit = response.data;
        setEditedInstitute(instituteToEdit);
        setShowEditPopup(true);
      })
      .catch(error => {
        console.error('Error fetching institute details for editing:', error);
        // Handle error as needed
      });
  };
  
  

  const handleSaveEdit = () => {
    axios.put(`${backendAPIUrl}/${editedInstitute.instituteId}`, editedInstitute)
      .then(response => {
        const updatedInstitutes = institutes.map(inst => 
          inst.instituteId === editedInstitute.instituteId ? response.data : inst
        );
  
        setInstitutes(updatedInstitutes);
        alert('Institute updated successfully!');
        setShowEditPopup(false);
      })
      .catch(error => {
        console.error('Error updating institute:', error);
  
        if (error.response) {
          console.error('Server response data:', error.response.data);
          console.error('Server response status:', error.response.status);
          console.error('Server response headers:', error.response.headers);
        } else if (error.request) {
          console.error('No response received from the server:', error.request);
        } else {
          console.error('Error setting up the request:', error.message);
        }
  
        console.log('Error details:', error.response?.data);
      });
  };
  
  
  
  const handleDelete = (id) => {
    // Make a DELETE request to remove an institute
    axios.delete(`${backendAPIUrl}/${id}`)
      .then(() => {
        const updatedInstitutes = [...institutes];
        setInstitutes(updatedInstitutes.filter(inst => inst.instituteId !== id));
        alert('Institute deleted successfully!');
      })
      .catch(error => {
        console.error('Error deleting institute:', error);
        // Handle error as needed
      });
  };

  const handleCoursePage = (instituteId) => {
    console.log(instituteId);
    navigate('/admincourse', { state: { instituteId } });
  };
  
  return (
    <div className="whole">
      <header>
      <AdminNavBar/>
      </header>
      <div className="Landing">
        <div className="showcase">
          <img
            src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="..."
          />
          
          <div className="institute-container">
          
            <h1 style={{ color: 'white', textAlign: 'center' }}>List of Institutes</h1>
            <br></br>
            <input
              type="text"
              placeholder="Search by Institute Name"
              value={searchTerm}
              onChange={handleSearch}
              className="search-bar"
            />
            <br></br><br></br>
            <button className="add-institute-button" onClick={() => handleAdd()}>
            <h4>Add Institute</h4>
            </button>
            <br></br><br></br>
            <div className="institute-list">
        {institutes.map((institute, index) => (
          <div key={index} className="institute-item">
            <h2>{institute.instituteName}</h2>
            <p>
              <strong>Location:</strong> {institute.instituteAddress}
            </p>
            <p>
              <strong>Contact Number:</strong> {institute.mobile}
            </p>

            <p>
              <strong>Email:</strong> {institute.email}
            </p>
            <p>
              <strong>Courses Available:</strong> {institute.noOfCoursesAvailable}
            </p>

            <button className="course-btn" onClick={()=>handleCoursePage(institute.instituteId)}>
              Course
            </button>

            <div className="admin-actions">
              <button className="admin-edit-btn" onClick={() => handleEdit(institute.instituteId)}>
                Edit
              </button>
              <button className="admin-delete-btn" onClick={() => handleDelete(institute.instituteId)}>
                Delete
              </button>
            </div>
          </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showEditPopup && (
  <div className='edit-institute-popup-container'>
    <div className="edit-popup">
      <h2>Edit Institute Details</h2>
      <div className="edit-form">
        <label htmlFor="editedName">Name:</label>
        <input
          type="text"
          id="editedName"
          value={editedInstitute.instituteName}
          onChange={(e) => setEditedInstitute({ ...editedInstitute, instituteName: e.target.value })}
        />

        <label htmlFor="editedLocation">Location:</label>
        <input
          type="text"
          id="editedLocation"
          value={editedInstitute.instituteAddress}
          onChange={(e) => setEditedInstitute({ ...editedInstitute, instituteAddress: e.target.value })}
        />

        <label htmlFor="editedContactNumber">Contact Number:</label>
        <input
          type="text"
          id="editedContactNumber"
          value={editedInstitute.mobile}
          onChange={(e) => setEditedInstitute({ ...editedInstitute, mobile: e.target.value })}
        />

        <label htmlFor="editedEmail">Email:</label>
        <input
          type="text"
          id="editedEmail"
          value={editedInstitute.email}
          onChange={(e) => setEditedInstitute({ ...editedInstitute, email: e.target.value })}
        />

        <label htmlFor="editedCourses">Courses Available:</label>
        <input
          type="text"
          id="editedCourses"
          value={editedInstitute.noOfCoursesAvailable}
          onChange={(e) => setEditedInstitute({ ...editedInstitute, noOfCoursesAvailable: e.target.value })}
        />
      </div>

      <button onClick={() => handleSaveEdit(editedInstitute)}>Update</button>
      <button onClick={() => setShowEditPopup(false)}>Cancel</button>
    </div>
  </div>
)}
{showAddPopup && (
        <div className="add-institute-popup-container">
          <div className="add-popup" >
            <h2>Add New Institute</h2>
            <div className="add-form">
              <label htmlFor="addName">Name:</label>
              <input
                type="text"
                id="addName"
                value={newInstitute.name}
                onChange={(e) => setNewInstitute({ ...newInstitute, instituteName: e.target.value })}
              />

              <label htmlFor="addLocation">Location:</label>
              <input required
                type="text"
                id="addLocation"
                value={newInstitute.location}
                onChange={(e) => setNewInstitute({ ...newInstitute, instituteAddress: e.target.value })}
              />

              <label htmlFor="addContactNumber">Contact Number:</label>
              <input required
                type="text"
                id="addContactNumber"
                value={newInstitute.contactNumber}
                onChange={(e) => setNewInstitute({ ...newInstitute, mobile: e.target.value })}
              />

              <label htmlFor="addEmail">Email:</label>
              <input required
                type="text"
                id="addEmail"
                value={newInstitute.email}
                onChange={(e) => setNewInstitute({ ...newInstitute, email: e.target.value })}
              />

              <label htmlFor="addCourses">Courses Available:</label>
              <input required
                type="text"
                id="addCourses"
                value={newInstitute.courses}
                onChange={(e) => setNewInstitute({ ...newInstitute, noOfCoursesAvailable: e.target.value })}
              />

              <button onClick={handleSaveAdd}>Add</button>
              <button onClick={() => setShowAddPopup(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default AdminInstitute;
