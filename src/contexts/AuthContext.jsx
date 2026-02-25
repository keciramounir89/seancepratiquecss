import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const MOCK_ADMIN = { email: 'admin@school.dz', password: 'admin123', name: 'Ahmed Benkhelil', role: 'Super Admin' };

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('admin_user');
    return stored ? JSON.parse(stored) : null;
  });

  const login = (email, password) => {
    if (email === MOCK_ADMIN.email && password === MOCK_ADMIN.password) {
      const userData = { email: MOCK_ADMIN.email, name: MOCK_ADMIN.name, role: MOCK_ADMIN.role };
      setUser(userData);
      localStorage.setItem('admin_user', JSON.stringify(userData));
      return { success: true };
    }
    return { success: false };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('admin_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
