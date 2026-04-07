import { useState } from "react";
import "./BankDetails.css";
import "../LoginPage/LoginPage.css";

const steps = [
  { label: "Employee Information" },
  { label: "Bank and Government Details" },
  { label: "Other Information" },
];

export default function BankDetails() {
  const [form, setForm] = useState({
    bankName: "",
    accountName: "",
    accountNo: "",
    sssNumber: "",
    pagIbigNumber: "",
    philhealthNumber: "",
    tinNumber: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <span className="logo-bars"></span>GEOSYNC
        </div>

        <p className="sidebar-tagline">
          Access range of powerful streamlined and integrated tools designed to
          simplify and automate organizational workflows, enhancing efficiency
          and collaboration across departments.
        </p>

        <nav className="steps">
          {steps.map((step, i) => (
            <div key={i} className={`step ${i === 1 ? "step--active" : ""}`}>
              <div className="step-icon">
                {i === 0 ? "👤" : i === 1 ? "🏦" : "ℹ️"}
              </div>
              <div>
                <div className="step-label">{step.label}</div>
              </div>
              {i < steps.length - 1 && <div className="step-connector" />}
            </div>
          ))}

          <div className="step">
            <div className="step-icon">🔐</div>
            <div>
              <div className="step-label">Role-based Access Control</div>
              <div className="step-desc">
                Employees are granted to appropriate permissions based on their
                responsibilities.
              </div>
            </div>
          </div>
        </nav>

        <div className="sidebar-footer">GEOSPECTRUM</div>
      </aside>

      <div className="divider-strip" />

      {/* Activity */}
      <main className="main">
        <div className="main-header">
          <div>
            <h1 className="main-title">Bank and Government Details</h1>
            <p className="main-subtitle">
              Please fill out the required fields in the form to complete your
              registration.*
            </p>
          </div>
          <div className="nav-btns">
            <button className="btn btn--back">BACK</button>
            <button className="btn btn--next">NEXT</button>
          </div>
        </div>

        {/* Progress tabs */}
        <div className="progress-tabs">
          <div className="tab tab--done" />
          <div className="tab tab--active" />
          <div className="tab" />
        </div>

        {/* Bank Details */}
        <section className="section">
          <h2 className="section-title">
            <span className="section-icon">🏧</span> BANK DETAILS
          </h2>
          <div className="form-row form-row--3">
            <div className="field">
              <label className="field-label">
                BANK NAME<span className="req">*</span>
              </label>
              <input
                className="field-input"
                name="bankName"
                value={form.bankName}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label className="field-label">
                ACCOUNT NAME<span className="req">*</span>
              </label>
              <input
                className="field-input"
                name="accountName"
                value={form.accountName}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label className="field-label">
                ACCOUNT NO<span className="req">*</span>
              </label>
              <input
                className="field-input"
                name="accountNo"
                value={form.accountNo}
                onChange={handleChange}
              />
            </div>
          </div>
        </section>

        {/* Government Contributions */}
        <section className="section">
          <h2 className="section-title">
            <span className="section-icon">⚙️</span> GOVERNMENT CONTRIBUTIONS
          </h2>
          <div className="form-row form-row--2">
            <div className="field">
              <label className="field-label">
                SSS NUMBER<span className="req">*</span>
              </label>
              <input
                className="field-input"
                name="sssNumber"
                value={form.sssNumber}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label className="field-label">
                PAG-IBIG NUMBER<span className="req">*</span>
              </label>
              <input
                className="field-input"
                name="pagIbigNumber"
                value={form.pagIbigNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row form-row--2">
            <div className="field">
              <label className="field-label">
                PHILHEALTH NUMBER<span className="req">*</span>
              </label>
              <input
                className="field-input"
                name="philhealthNumber"
                value={form.philhealthNumber}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label className="field-label">
                TIN NUMBER<span className="req">*</span>
              </label>
              <input
                className="field-input"
                name="tinNumber"
                value={form.tinNumber}
                onChange={handleChange}
              />
            </div>
          </div>
        </section>

        <div className="main-footer">
          Already registered?{" "}
          <a className="login-link" href="login">
            Login here
          </a>
        </div>
      </main>
    </div>
  );
}
