function ReviewSubmit({
  formData,
  prevStep,
  setSubmitted,
}) {
  const handleSubmit = () => {
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className="form review">
      <h2>Review & Submit</h2>

      <div className="review-box">
        <p>
          <strong>Name:</strong> {formData.name}
        </p>

        <p>
          <strong>Email:</strong> {formData.email}
        </p>

        <p>
          <strong>Username:</strong> {formData.username}
        </p>

        <p>
          <strong>Password:</strong>{" "}
          {"*".repeat(formData.password.length)}
        </p>
      </div>

      <div className="btn-group">
        <button onClick={prevStep}>Back</button>

        <button onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default ReviewSubmit;