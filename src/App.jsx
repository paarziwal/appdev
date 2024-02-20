// App.jsx
import { Navigate,Route,Routes } from 'react-router-dom';
import { lazy } from "react"
import UserLayout from './pages/user/UserLayout';
import LazyLayout from './components/LazyLayout';
const LazyLogin =lazy(()=>import("../pages/auth/Login"))
const LazyRegister = lazy(()=>import("../pages/auth/register"))
import './App.css'; // Import global styles
const LazyHome = lazy(()=> import("./pages/user/Home"))
const LazyDashboard = lazy(()=> import("./pages/admin/Dashboard"))

const UserRoutes = () => {
  return(
    <UserLayout>
    <Routes>
      <Route path="/home" element={<LazyLayout component={LazyDashboard}/>}/>
    </Routes>
    </UserLayout>
  )
}

const AdminRoutes = () => {
  return(
    <UserLayout>
    <Routes>
      <Route path="/dashboard" element={<LazyLayout component={LazyHome}/>}/>
    </Routes>
    </UserLayout>
  )
}


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to=""/>}/>
      <Route path="/rovertours/login" element={<LazyLayout component={LazyLogin}/>}/>
      <Route path="/rovertours/register" element={<LazyLayout component={LazyRegister}/>}/>
      <Route path="/rovertours/user/*" element={<UserRoutes/>}/>
      <Route path="/rovertours/admin/*" element={<AdminRoutes/>}/>
    </Routes>
  );
};

export default App;
