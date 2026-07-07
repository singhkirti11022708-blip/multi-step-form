function AccountDetails({
  formData,
  handleChange,
  nextStep,
  prevStep,
  showPassword,
  setShowPassword,
}) {
  const isValid =
    formData.username.trim() !== "" &&
    formData.password.length >= 8;

  return (
    <div className="form">
      <h2>Account Details</h2>

      <input
        type="text"
        name="username"
        placeholder="Enter Username"
        value={formData.username}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}
      />

      <br />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? "Hide Password" : "Show Password"}
      </button>

      {formData.password !== "" &&
        formData.password.length < 8 && (
          <p style={{ color: "red" }}>
            Password must be at least 8 characters.
          </p>
        )}

      <br />

      <button onClick={prevStep}>Back</button>

      <button
        onClick={nextStep}
        disabled={!isValid}
        style={{ marginLeft: "10px" }}
      >
        Next
      </button>
    </div>
  );
}

export default AccountDetails;