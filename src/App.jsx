import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import PrivateRoute from './components/privateRoute';
import Login from './pages/auth/login';
import MainLayout from './components/mainLayout';
import Dashboard from './pages/appScreeens/dashboard';
import UserRole from './pages/appScreeens/userRole';
import RoleAccess from './pages/appScreeens/roleAccess';
import Sites from './pages/appScreeens/sites';
import Users from './pages/appScreeens/users';
import CreateSites from './pages/appScreeens/createSite';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="user/role" element={<UserRole />} />
              <Route path="role/access" element={<RoleAccess />} />
              <Route path="site" element={<Sites />} />
              <Route path="users" element={<Users />} />
              <Route path='createSite' element={<CreateSites/>}/>
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;