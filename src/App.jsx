import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import AccountDetails from "./components/AccountDetails";
import ReviewSubmit from "./components/ReviewSubmit";
import ProgressBar from "./components/ProgressBar";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="container success">
        <h1>🎉 Registration Successful!</h1>
        <p>Your account has been created successfully.</p>

        <button
          onClick={() => {
            setSubmitted(false);
            setStep(1);
            setFormData({
              name: "",
              email: "",
              username: "",
              password: "",
            });
          }}
        >
          Create Another Account
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <ProgressBar step={step} />

      {step === 1 && (
        <PersonalInfo
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      )}

      {step === 2 && (
        <AccountDetails
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
      )}

      {step === 3 && (
        <ReviewSubmit
          formData={formData}
          prevStep={prevStep}
          setSubmitted={setSubmitted}
        />
      )}
    </div>
  );
}

export default App;