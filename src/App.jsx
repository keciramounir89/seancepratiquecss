import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import './i18n';

// Public school website
import SchoolHome from './school/pages/SchoolHome';

// Auth
import Login from './admin/pages/Login';

// Admin
import AdminLayout from './admin/components/AdminLayout';
import ProtectedRoute from './admin/components/ProtectedRoute';
import Dashboard from './admin/pages/Dashboard';
import Students from './admin/pages/Students';
import Teachers from './admin/pages/Teachers';
import Classes from './admin/pages/Classes';
import Attendance from './admin/pages/Attendance';
import Payments from './admin/pages/Payments';
import Announcements from './admin/pages/Announcements';
import Settings from './admin/pages/Settings';

// Global styles
import './styles/theme.css';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public */}
            <Route path="/" element={<SchoolHome />} />

            {/* Admin Login */}
            <Route path="/admin/login" element={<Login />} />

            {/* Admin Panel (Protected) */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="students" element={<Students />} />
              <Route path="teachers" element={<Teachers />} />
              <Route path="classes" element={<Classes />} />
              <Route path="attendance" element={<Attendance />} />
              <Route path="payments" element={<Payments />} />
              <Route path="announcements" element={<Announcements />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
