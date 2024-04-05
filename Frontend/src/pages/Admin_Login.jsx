import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Login.css';
import NavBar from '../components/Navbar';

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.email.trim() === '') {
      isValid = false;
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      isValid = false;
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.password.trim() === '') {
      isValid = false;
      newErrors.password = 'Password is required';
    } else if (!isValidPassword(formData.password)) {
      isValid = false;
      newErrors.password =
        'Password must be at least 8 characters long and include 1 special character and 1 digit';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      navigate('/adminhome');
    }
  };

  const isValidEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const isValidPassword = (input) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(input);
  };

  return (
    <>
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
            <div className="login-box">
              <form>
                <h2>Admin Login</h2>
                <div className="input-box">
                <input
                  type='email'
                  name='email'
                 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                  <label>Email</label>
                  {errors.email && <p className='error-message'>{errors.email}</p>}
                </div>
                <div className="input-box">
                <input
                  type='password'
                  name='password'
                  
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                  <label>Password</label>
                  {errors.password && <p className='error-message'>{errors.password}</p>}
                </div>
                <br></br>
                <button type='button' onClick={handleSubmit}>
                  Login
                </button>
                <p>
                    If User? <a href="login">UserLogin</a>
                  </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
