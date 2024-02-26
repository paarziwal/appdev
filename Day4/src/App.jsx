import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from "react";
import LazyLayout from './components/LazyLayout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminLander from './pages/admin/AdminLander';
import AddCollege from './pages/admin/AddCollege';
import AddCourse from './pages/admin/AddCourse';
import Dashboard from './pages/admin/Dashboard';

const LazyLogin = lazy(() => import("./pages/auth/Signin"));
const LazyRegister = lazy(() => import("./pages/auth/Signup"));
const LazyProfile = lazy(() => import("./components/Student_Profile"));
const LazyCourses = lazy(() => import("./pages/CoursePage"));
const LazyLanding = lazy(() => import("./pages/user/Lander"));
const LazyColleges = lazy(() => import('./pages/user/CollegePage'));
const LazyApply = lazy(() => import('./pages/user/Apply'));

const UserRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/lander" element={<LazyLayout component={LazyLanding} />} />
        <Route path="/courses" element={<LazyLayout component={LazyCourses} />} />
        <Route path="/profile" element={<LazyLayout component={LazyProfile} />} />
        <Route path="/apply" element={<LazyLayout component={LazyApply} />} />
        <Route path="/college" element={<LazyLayout component={LazyColleges} />} />
      </Routes>
      <Footer />
    </>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/educonnect/login" />} />
      <Route path="/educonnect/login" element={<LazyLayout component={LazyLogin} />} />
      <Route path="/educonnect/register" element={<LazyLayout component={LazyRegister} />} />
      <Route path="/educonnect/user/*" element={<UserRoutes />} />
      <Route path="/educonnect/admin/lander" element={<AdminLander />} />
      <Route path="/educonnect/admin/college" element={<AddCollege />} />
      <Route path="/educonnect/admin/course" element={<AddCourse />} />
      <Route path="/educonnect/admin/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
