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
import Signup from './pages/auth/signup';
import Profile from './pages/appScreeens/profile';
import Labels from './pages/appScreeens/labels';
import Audits from './pages/appScreeens/auditScreens/audit';
import SurveyEdit from './pages/appScreeens/auditScreens/surveyEdit';

function App() {
  return (
    <Router>
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoute />}>
          <Route element={<MainLayout />}>
            <Route index              element={<Dashboard />} />
            <Route path='profile/:id' element={<Profile/>}/>
            <Route path="dashboard"   element={<Dashboard />} />
            <Route path="user/role"   element={<UserRole />} />
            <Route path="role/access" element={<RoleAccess />} />
            <Route path="site"        element={<Sites />} />
            <Route path="users"       element={<Users />} />
            <Route path="createSite"  element={<CreateSites />} />
            <Route path="labels" element={<Labels/>}/>
            <Route path='audits/auditchecklists' element={<Audits/>}/>
            <Route path='audits/survey_edit/:surveyId' element={<SurveyEdit/>} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  </Router>
  
  );
}

export default App;