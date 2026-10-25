import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">REDDITIQ</h2>

      <nav>
        <Link to="/home">🏠 Dashboard</Link>
        <Link to="/trending">🔥 Trending Sentiment</Link>
        <Link to="/overview">🧠 Sentiment Overview</Link>
        <Link to="/saved">💾 Saved Posts</Link>
        <Link to="/settings">⚙️ Settings</Link>
        <Link to="/about">ℹ️ About</Link>
      </nav>

      <div className="sidebar-upgrade">
        <strong>AI Pro Mode</strong>
        <p>Unlock advanced sentiment analytics and trend predictions.</p>
      </div>
<div className="coming-soon-box">
  <span className="soon-badge">🚀 Coming Soon</span>
  <h4>Smart Trend Predictor</h4>
  <p>AI-powered forecasting & deeper sentiment insights.</p>
</div>




      <button className="sidebar-logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;