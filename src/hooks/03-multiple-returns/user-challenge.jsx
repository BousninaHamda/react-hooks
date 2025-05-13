import { useState } from "react";

export const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "vynas" });
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <div>
      {user ? (
        <div>
          <h4>hello there, user {user.name}</h4>
          <button type="button" className="btn" onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>please login</h4>
          <button type="button" className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );
};
