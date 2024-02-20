// Header.jsx

import '../assets/css/Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/path/to/logo.png" alt="EduConnect Cloud Admit" />
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/admissions">Admissions</a></li>
          <li><a href="/programs">Programs</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
