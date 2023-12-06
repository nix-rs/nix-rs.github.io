import './App.css';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <nav>
          <a>about</a>
          <a>projects</a>
          <a>others</a>
        </nav>
      </div>

      <div> Body </div>

      <hr />
      <footer>
        <div className="fot-icon">
          <a href="https://github.com/nix-rs" target="_blank" className="git">
            <i className="fa-brands fa-square-github"></i>
          </a>
          <a href="mailto:aniket2contact@gmail.com" target="_blank" className="email">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
        <div className="copyright">
          Copyright <i className="fa-regular fa-copyright"></i> 2023
          <a href="https://nix-rs.github.io/">Aniket Mishra.</a>
          All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
