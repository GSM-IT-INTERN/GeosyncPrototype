import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx'
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage.jsx'
import DashboardPage from './pages/DashboardPage/DashboardPage.jsx'
import BankDetails from './pages/RegisterPage/BankDetails.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/bankdetails" element={<BankDetails />} />
    </Routes>
  )
}
