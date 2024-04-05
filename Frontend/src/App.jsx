// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Institute from './pages/Institute';
import Course from './pages/Course';
import Aboutus from './pages/Aboutus';
import Login from './pages/Login';
import Registration from './pages/Registration';
import AdminLogin from './pages/Admin_Login';
import Enroll from './pages/Enroll';
import ProfileCreation from './pages/Profile_Creation';
import Profile from './pages/Profile';
import AdminInstitute from './pages/Admin_Institute';
import AdminCourses from './pages/Admin_Course';
import AdminHome from './pages/Admin_Landing';
import Sidebar from './components/Sidebar';
import EnrolledCourses from './pages/Enrolled_Courses';
import AdminAboutus from './pages/Admin_Aboutus';
import AdminStudent from './pages/AdminStudent';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        
        <Route index path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/institute' element={<Institute/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/enroll' element={<Enroll/>}/>
        <Route path='/profilecreation' element={<ProfileCreation/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/admininstitute' element={<AdminInstitute/>}/>
        <Route path='/admincourse' element={<AdminCourses/>}/>
        <Route path='/adminhome' element={<AdminHome/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/enrolledcourse' element={<EnrolledCourses/>}/>
        <Route path='/adminaboutus' element={<AdminAboutus/>}/>
        <Route path='/adminstudent' element={<AdminStudent/>}/>


      </Routes>
    </Router>
    </>
  )
}

export default App


// // App.jsx
// import { Navigate, Route,Routes, Router} from 'react-router-dom';
// import { lazy } from "react"
// // import UserLayout from './pages/user/UserLayout';
// import LazyLayout from './components/LazyLayout';
// // import AdminLayout from './pages/admin/AdminLayout.jsx';
// const LazyLogin =lazy(()=>import("./pages/Login.jsx"))
// const LazyRegister = lazy(()=>import("./pages/Registration"))
// const LazyHome = lazy(()=> import("./pages/Home.jsx"))
// const LazyEnroll = lazy(()=> import("./pages/Enroll.jsx"))
// const LazyEnrolledCourses = lazy(()=> import("./pages/Enrolled_Courses.jsx"))
// const LazyProfile = lazy(()=> import("./pages/Profile.jsx"))
// const LazyProfileCreation = lazy(()=> import("./pages/Profile_Creation.jsx"))
// const LazyCourse = lazy(()=> import("./pages/Course.jsx"))
// const LazyInstitute = lazy(()=> import("./pages/Institute.jsx"))
// const LazyAbout = lazy(()=> import("./pages/Aboutus.jsx"))
// const LazyAdminLogin = lazy(()=> import("./pages/Admin_Login.jsx"))
// const LazyAdminLanding = lazy(()=> import("./pages/Admin_Landing.jsx"))
// const LazyAdminInstitute = lazy(()=> import("./pages/Admin_Institute.jsx"))
// const LazyAdminStudent= lazy(()=> import("./pages/AdminStudent.jsx"))
// const LazyAdminCourse= lazy(()=> import("./pages/Admin_Course.jsx"))
// const LazyAdminAboutUs = lazy(()=> import("./pages/Admin_Aboutus.jsx"))


// const UserRoutes = () => {
//   return(
//     // <Router>
//     <Routes>
//       <Route path="/home" element={<LazyLayout component={LazyHome}/>}/>
//       <Route path="/course" element={<LazyLayout component={LazyCourse}/>}/>
//       <Route path="/enroll" element={<LazyLayout component={LazyEnroll}/>}/>
//       <Route path="/enrolledcourses" element={<LazyLayout component={LazyEnrolledCourses}/>}/>
//       <Route path="/institute" element={<LazyLayout component={LazyInstitute}/>}/>
//       <Route path="/course" element={<LazyLayout component={LazyCourse}/>}/>
//       <Route path="/register" element={<LazyLayout component={LazyRegister}/>}/>
//       <Route path="/profile" element={<LazyLayout component={LazyProfile}/>}/>
//       <Route path="/about" element={<LazyLayout component={LazyAbout}/>}/>
//     </Routes>
//     // </Router>
//   )
// }

// const AdminRoutes = () => {
//   return(
//     // <Router>
//     <Routes>
//       <Route path="/profilecreation" element={<LazyLayout component={LazyProfileCreation}/>}/>
//       <Route path="/Adminhome" element={<LazyLayout component={LazyAdminLanding}/>}/>
//       <Route path="/Admincourse" element={<LazyLayout component={LazyAdminCourse}/>}/>
//       <Route path="/AdminInstitute" element={<LazyLayout component={LazyAdminInstitute}/>}/>
//       <Route path="/Adminstudent" element={<LazyLayout component={LazyAdminStudent}/>}/>
//       <Route path="/Adminabout" element={<LazyLayout component={LazyAdminAboutUs}/>}/>
//     </Routes>
//     // </Router>
//   )
// }


// const App = () => {
//   return (
//     <>
//     {/* <Router> */}
//     <Routes>
//       <Route path="/" element={<Navigate to="educonnect/login" />} />
//       <Route path="/educonnect/login" element={<LazyLayout component={LazyLogin}/>}/>
//       <Route path="/educonnect/adminlogin" element={<LazyLayout component={LazyAdminLogin}/>}/>
//       <Route path="/educonnect/register" element={<LazyLayout component={LazyRegister}/>}/>
//       <Route path="/educonnect/user/*" element={<UserRoutes/>}/>
//       <Route path="/educonnect/admin/*" element={<AdminRoutes/>}/>
//     </Routes>
//     {/* </Router> */}
//     </>
//   );
// };

// export default App;
