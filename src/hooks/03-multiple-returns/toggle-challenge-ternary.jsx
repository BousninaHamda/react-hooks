import { useState } from "react";

export const ToggleChallengeTernary = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(!showAlert);
  };
  return (
    <div>
      <button type="button" className="btn" onClick={handleClick}>
        toggle
      </button>
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">Hello world</div>;
};
