import './App.css';

const ThemeToggle = ({ toggleTheme, darkMode }) => (
  <div className="toggle-wrap">
    <label className="switch">
      <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
      <span className="slider" />
    </label>
    <span>{darkMode ? 'Night Hacker' : 'Morning Coder'}</span>
  </div>
);

export default ThemeToggle;
