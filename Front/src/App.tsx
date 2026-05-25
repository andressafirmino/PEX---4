import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import AuthProvider from './context/auth';
import ItemsProvider from './context/items';
import AdminPage from './pages/AdminPage/AdminPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ItemsProvider>
                <Header />
                <HomePage />
              </ItemsProvider>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
