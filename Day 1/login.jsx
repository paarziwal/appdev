import { useState } from 'react';
import '../../assets/css/login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleClick = () => {
    window.location.href = 'user/lander';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    // Validation rules can be added here
    if (!formData.username.trim()) {
      errors.username = 'Username is required';
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Submit the form data
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && <span className="error">{errors.username}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <button type="submit" onClick={handleClick}> Login</button>
            
          </form>
          <div style={{marginTop : '20px'}}>
            Don't Have an Account? <Link to={'/educonnect/register'}> Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

