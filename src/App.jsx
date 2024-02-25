// App.jsx
import { Navigate, Route,Routes } from 'react-router-dom';
import { lazy } from "react"
import UserLayout from './pages/user/UserLayout';
import LazyLayout from './components/LazyLayout';
const LazyLogin =lazy(()=>import("./pages/auth/Login.jsx"))
const LazyRegister = lazy(()=>import("./pages/auth/Register"))
// import './App.css'; // Import global styles
const LazyHome = lazy(()=> import("./pages/user/Home.jsx"))
const LazyProfile = lazy(()=> import("./pages/user/StudentProfile.jsx"))
const LazyCourses = lazy(()=> import("./pages/user/Coursesdata.jsx"))
// const LazyDashboard = lazy(()=> import("./pages/auth/LandingPage.jsx"))
const UserRoutes = () => {
  return(
    <UserLayout>
    <Routes>
      <Route path="/home" element={<LazyLayout component={LazyHome}/>}/>
      <Route path="/courses" element={<LazyLayout component={LazyCourses}/>}/>
      <Route path="/profile" element={<LazyLayout component={LazyProfile}/>}/>
    </Routes>
    </UserLayout>
  )
}

// const AdminRoutes = () => {
//   return(
//     <UserLayout>
//     <Routes>
//       <Route path="/dashboard" element={<LazyLayout component={LazyDashboard}/>}/>
//     </Routes>
//     </UserLayout>
//   )
// }


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="educonnect/login" />} />
      <Route path="/educonnect/login" element={<LazyLayout component={LazyLogin}/>}/>
      <Route path="/educonnect/register" element={<LazyLayout component={LazyRegister}/>}/>
      <Route path="/educonnect/user/*" element={<UserRoutes/>}/>
      {/* <Route path="/educonnect/user/Courses1" element={<Courses/>}/> */}
      {/* <Route path="/educonnect/admin/*" element={<AdminRoutes/>}/> */}
    </Routes>
  );
};

export default App;
