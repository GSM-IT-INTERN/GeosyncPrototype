import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../../components/AuthLayout.jsx'
import FormInput from '../../components/FormInput.jsx'
import Button from '../../components/Button.jsx'
import './ForgotPasswordPage.css'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setEmail(e.target.value)
    if (error) setError('')
  }

  const validate = () => {
    if (!email) return 'Email is required.'
    if (!/\S+@\S+\.\S+/.test(email)) return 'Enter a valid email address.'
    return ''
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const err = validate()
    if (err) { setError(err); return }

    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
  }

  return (
    <AuthLayout panelTitle="RESET" panelSubtitle="We'll send a reset link to your email">
      {sent ? (
        <div className="forgot-success">
          <div className="forgot-success__icon">
            <CheckIcon />
          </div>
          <h2 className="forgot-success__title">Check your inbox</h2>
          <p className="forgot-success__text">
            A password reset link has been sent to <strong>{email}</strong>. Please check your email and follow the instructions.
          </p>
          <Link to="/login">
            <Button variant="primary" size="md" fullWidth>
              Back to Login
            </Button>
          </Link>
        </div>
      ) : (
        <form className="forgot-form" onSubmit={handleSubmit} noValidate>
          <FormInput
            label="Email"
            type="email"
            name="email"
            placeholder="account@company.com"
            value={email}
            onChange={handleChange}
            helpText="Enter your registered email address"
            error={error}
            required
            autoComplete="email"
          />

          <div className="forgot-form__submit">
            <Button type="submit" variant="primary" size="lg" fullWidth loading={loading}>
              Send Reset Link
            </Button>
          </div>

          <div className="forgot-form__divider" />

          <p className="forgot-form__back">
            Remembered your password?{' '}
            <Link to="/login" className="forgot-form__back-link">
              Login here
            </Link>
          </p>
        </form>
      )}
    </AuthLayout>
  )
}

function CheckIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
