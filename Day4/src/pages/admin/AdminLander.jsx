import { Link } from "react-router-dom";
import "../../assets/css/Lander.css";

function AdminLander() {
  return (
    <div className="homeout">
      <div className="homein">
        <header className="homehead">
          <h1>Welcome to Edu Connect</h1>
          <p>Where dreams meet opportunities</p>
          <div className="btn-group">
            <Link to="/educonnect/admin/college" className="btn bigger">Add Institute</Link>
            <Link to="/educonnect/admin/course" className="btn bigger">Add Courses</Link>
            <Link to="/user/apply" className="btn bigger">Edit Courses</Link>
            <Link to="#" className="btn bigger">Edit Colleges</Link>
            <Link to="#" className="btn bigger">View Students</Link>
            <Link to="#" className="btn bigger">View Admission List</Link>
            <Link to="#" className="btn bigger">View Payments</Link>
          </div>
        </header>
      </div>
    </div>
  );
}

export default AdminLander;
