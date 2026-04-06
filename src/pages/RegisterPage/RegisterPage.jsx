import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../../components/AuthLayout.jsx'
import FormInput from '../../components/FormInput.jsx'
import Button from '../../components/Button.jsx'
import './RegisterPage.css'

export default function RegisterPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const errs = {}
    if (!form.fullName.trim()) errs.fullName = 'Full name is required.'
    if (!form.email) errs.email = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email address.'
    if (!form.password) errs.password = 'Password is required.'
    else if (form.password.length < 8) errs.password = 'Password must be at least 8 characters.'
    if (!form.confirmPassword) errs.confirmPassword = 'Please confirm your password.'
    else if (form.password !== form.confirmPassword) errs.confirmPassword = 'Passwords do not match.'
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    navigate('/login')
  }

  return (
    <AuthLayout panelTitle="REGISTER" panelSubtitle="Create your GeoSync account">
      <form className="register-form" onSubmit={handleSubmit} noValidate>
        <FormInput
          label="Full Name"
          type="text"
          name="fullName"
          placeholder="Juan dela Cruz"
          value={form.fullName}
          onChange={handleChange}
          helpText="Enter your full name"
          error={errors.fullName}
          required
          autoComplete="name"
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          placeholder="account@company.com"
          value={form.email}
          onChange={handleChange}
          helpText="Enter your company email address"
          error={errors.email}
          required
          autoComplete="email"
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          placeholder=""
          value={form.password}
          onChange={handleChange}
          helpText="Minimum 8 characters"
          error={errors.password}
          required
          autoComplete="new-password"
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder=""
          value={form.confirmPassword}
          onChange={handleChange}
          helpText="Re-enter your password"
          error={errors.confirmPassword}
          required
          autoComplete="new-password"
        />

        <div className="register-form__submit">
          <Button type="submit" variant="primary" size="lg" fullWidth loading={loading}>
            Create Account
          </Button>
        </div>

        <div className="register-form__divider" />

        <p className="register-form__login">
          Already have an account?{' '}
          <Link to="/login" className="register-form__login-link">
            Login here
          </Link>
        </p>
      </form>
    </AuthLayout>
  )
}
