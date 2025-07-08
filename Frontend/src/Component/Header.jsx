import React, { useContext } from "react";
import { GacContext } from "../Context/GacContext";
import "../Styles/Header.css";

export default function Header() {
  const { user, setUser } = useContext(GacContext);

  const HandleLogin = () => {
    window.location.href = "/Login"; // or initiate Google OAuth redirect
  };

  const HandleRedirect = (path) => {
    // For production, you can use useNavigate from react-router-dom
    alert(`Redirect to: ${path}`);
  };

  return (
    <header className="hh">
      <div className="Top_Container">
        {/* Logo */}
        <div>
          <img
            src="https://res.cloudinary.com/dieboinjz/image/upload/v1739719838/mern-uploads/ejrkwcxdmqfjdxwyieo9.jpg"
            alt="Logo"
            width={50}
            height={50}
          />
        </div>

        {/* Navigation */}
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Contact</li>
            <li>IIT JEE</li>
            {user && (
              <li onClick={() => HandleRedirect("/My_Courses")}>
                My Courses
              </li>
            )}
          </ul>
        </nav>

        {/* User/Profile Section */}
        <div className="User-Login-button">
          {!user ? (
            <button className="Login_button" onClick={HandleLogin}>
              Login
            </button>
          ) : (
            <div className="Profile-Icon" role="button" title={user.name}>
              <img
                src={user.picture || "https://default-avatar.com/avatar.png"}
                alt="Profile"
                width={50}
                height={50}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
