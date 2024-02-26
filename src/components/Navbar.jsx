// import { Link } from 'react-router-dom';
// import '../assets/css/Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className='navbar'>
//       <span className='company-name'>Edu Connect</span>
//       <ul className='list'>
//         <li><button className="nav-button">Navigation 1</button></li>
//         <li><button className="nav-button">Navigation 2</button></li>
//       </ul>
//       <div className='logout-profile'>
//         <button className="logout">Logout</button>
//         <Link to="/user/" className="profile">Profile</Link>
//         {/* <button className="profile">Profile</button> */}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <span className='company-name'>Edu Connect</span>
      <ul className='list'>
        <li><Link to="/educonnect/user/lander" className="nav-button">Home</Link></li>
        <li><Link to="/educonnect/user/courses" className="nav-button">Courses</Link></li>
        <li><Link to="/educonnect/user/college" className="nav-button">Colleges</Link></li>
        <li><Link to="/educonnect/user/about" className="nav-button">About</Link></li>
      </ul>
      <div className='logout-profile'>
        <Link to="/educonnect/user/profile" className="profile">Profile</Link>
        <Link to="/educonnect/login" className="logout">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
