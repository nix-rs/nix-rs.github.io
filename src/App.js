import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
            <FontAwesomeIcon icon={faSquareGithub} style={{color: 'black'}} />
          </a>
          <a href="mailto:aniket2contact@gmail.com" target="_blank" className="email">
            <FontAwesomeIcon icon={faEnvelope} style={{color: 'black'}} />
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
