import "./ProgressBar.css";
function ProgressBar({ step }) {
  const progress = (step / 3) * 100;

  return (
    <div className="progress-container">
      <h1>Multi-Step Form</h1>

      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="steps">
        <div className={step >= 1 ? "circle active" : "circle"}>
          1
        </div>

        <div className={step >= 2 ? "circle active" : "circle"}>
          2
        </div>

        <div className={step >= 3 ? "circle active" : "circle"}>
          3
        </div>
      </div>

      <p>Step {step} of 3</p>
    </div>
  );
}

export default ProgressBar;