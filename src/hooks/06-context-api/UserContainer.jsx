import { useContext } from "react";
import { NavbarContext } from "./Navbar";

const UserContainer = () => {
  const { user, logout } = useContext(NavbarContext);
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello there, {user?.name}</p>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};
export default UserContainer;
