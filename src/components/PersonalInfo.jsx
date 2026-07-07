function PersonalInfo({
  formData,
  handleChange,
  nextStep,
}) {
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  const isValid =
    formData.name.trim() !== "" && emailValid;

  return (
    <div className="form">
      <h2>Personal Information</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />

      {formData.email !== "" && !emailValid && (
        <p style={{ color: "red", fontSize: "14px" }}>
          Please enter a valid email address.
        </p>
      )}

      <br />

      <button
        onClick={nextStep}
        disabled={!isValid}
      >
        Next
      </button>
    </div>
  );
}

export default PersonalInfo;