import { useState } from 'react';
import './App.css';
import ThemeToggle from './ThemeToggle';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const fetchGitHubData = async () => {
    setLoading(true);
    setError('');
    setUserData(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error('No GitHub user found!');
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <div className="animated-bg" />
      <ThemeToggle toggleTheme={toggleTheme} darkMode={darkMode} />

      <h1 className="title typewriter"> GitHub Profile Finder</h1>
      <div className="search-bar">
        <input
          placeholder="Type your GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={fetchGitHubData}>Fetch</button>
      </div>

      {loading && <div className="loader">Fetching profile...</div>}
      {error && <p className="error">{error}</p>}

      {userData && (
        <div className="card glass fade-in">
          <img src={userData.avatar_url} alt="Avatar" className="avatar" />
          <h2>{userData.name || 'Anonymous Dev'}</h2>
          <p>@{userData.login}</p>
          <p className="bio">
              Passionate dev | {userData.public_repos} Repos | {userData.followers} Followers | {userData.following} Following
          </p>
          <a className="profile-link" href={userData.html_url} target="_blank" rel="noreferrer">
              Visit GitHub
          </a>
        </div>
      )}

    </div>

  );
}

export default App;


Add App.js to src folder
