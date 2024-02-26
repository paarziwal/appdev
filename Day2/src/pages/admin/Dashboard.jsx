import { useState, useEffect } from 'react';
import '../../assets/css/dashboard.css';


const Dashboard = () => {
  const [selectedCollege, setSelectedCollege] = useState('');
  const [collegeData, setCollegeData] = useState({
    // Sample college data
    'Sri Krishna University': {
      courses: [
        {
          id: 1,
          name: 'Computer Science',
          studentsEnrolled: 15,
          seats: 20,
        },
        {
          id: 2,
          name: 'Data Science',
          studentsEnrolled: 12,
          seats: 15,
        },
      ],
    },
    // Add more colleges and courses here
  });
  const [totals, setTotals] = useState({
    applicants: 0,
    institutes: 0,
    courses: 0,
    enrolledStudents: 0,
    studentsStudying: 0,
  });

  useEffect(() => {
    // Calculate totals when collegeData changes
    let totalApplicants = 0;
    let totalInstitutes = Object.keys(collegeData).length;
    let totalCourses = 0;
    let totalEnrolledStudents = 0;
    let totalStudentsStudying = 0;

    for (const college in collegeData) {
      totalCourses += collegeData[college].courses.length;
      collegeData[college].courses.forEach(course => {
        totalEnrolledStudents += course.studentsEnrolled;
        totalStudentsStudying += course.studentsEnrolled > 0 ? 1 : 0;
      });
    }

    setTotals({
      applicants: totalApplicants,
      institutes: totalInstitutes,
      courses: totalCourses,
      enrolledStudents: totalEnrolledStudents,
      studentsStudying: totalStudentsStudying,
    });
  }, [collegeData]);

  const handleCollegeChange = (e) => {
    setSelectedCollege(e.target.value);
  };

  return (
    <section className="dashboard-wrapper">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="dashboard-summary">
        <div className="dashboard-summary-item">
          <div className="dashboard-summary-label">Total Applicants:</div>
          <div className="dashboard-summary-number">{totals.applicants}</div>
        </div>
        <div className="dashboard-summary-item">
          <div className="dashboard-summary-label">Total Institutes:</div>
          <div className="dashboard-summary-number">{totals.institutes}</div>
        </div>
        <div className="dashboard-summary-item">
          <div className="dashboard-summary-label">Total Courses:</div>
          <div className="dashboard-summary-number">{totals.courses}</div>
        </div>
        <div className="dashboard-summary-item">
          <div className="dashboard-summary-label">Total Enrolled Students:</div>
          <div className="dashboard-summary-number">{totals.enrolledStudents}</div>
        </div>
        <div className="dashboard-summary-item">
          <div className="dashboard-summary-label">Total Students Studying:</div>
          <div className="dashboard-summary-number">{totals.studentsStudying}</div>
        </div>
      </div>
      <div className="dashboard-dropdown">
        <label htmlFor="collegeSelect" className="dashboard-label">
          Select College:
        </label>
        <select
          id="collegeSelect"
          className="dashboard-select"
          onChange={handleCollegeChange}
          value={selectedCollege}
        >
          <option value="">Select a college</option>
          {Object.keys(collegeData).map((college) => (
            <option key={college} value={college}>
              {college}
            </option>
          ))}
        </select>
      </div>
      <div className="dashboard-card-row">
        {selectedCollege &&
          collegeData[selectedCollege].courses.map((course) => (
            <div className="dashboard-column" key={course.id}>
              <article className="dashboard-card">
                <label className="dashboard-card-label">{course.name}</label>
                <section className="dashboard-card-body">
                  <div className="dashboard-stats">
                    <div className="dashboard-stats-item">
                      <div className="dashboard-stats-label">Students Enrolled:</div>
                      <div className="dashboard-stats-number">
                        {course.studentsEnrolled}/{course.seats}
                      </div>
                    </div>
                    <div className="dashboard-stats-item">
                      <div className="dashboard-stats-label">Empty Seats:</div>
                      <div className="dashboard-stats-number">
                        {course.seats - course.studentsEnrolled}
                      </div>
                    </div>
                  </div>
                </section>
                <section className="dashboard-graph">
                  <div className="dashboard-bar-graph">
                    <div
                      className="dashboard-bar-fill"
                      style={{
                        width: `${(course.studentsEnrolled / course.seats) * 100}%`,
                      }}
                    ></div>
                  </div>
                </section>
              </article>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Dashboard;
