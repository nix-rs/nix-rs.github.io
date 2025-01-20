import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';

import Home from './components/Home';
import Footer from './components/Footer'
import Blogs from './blogs/Blogs';
import Projects from './projects/Projects';
import {useEffect, useState} from 'react';

export default function App() {
  const [view, setView] = useState<boolean>(false)

  const height = window.innerHeight
  const width = window.innerWidth

  const clicked = () => {
    setView(!view)
  }

  return (
    <>
      <div className='flex flex-col justify-between  p-10 '>   
        <Router>
          <div className='flex flex-col border-2 h-full'>  
            <div className='flex flex-row justify-between'>
              <div className='saf2'>
                <Link to="/">Aniket</Link>
              </div>
        
                { (width < 400) ? 
                <div>
                <button name="menu" type='button' onClick={() => clicked()}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
                  {view ? 
              <div className=' flex flex-col justify-around'>    
                <Link className='nav' to="/blogs">Blogs</Link>
                <Link className='nav' to="/projects">Projects</Link>
                <Link className='nav' to="/topics">Topics</Link>
              </div>
                  : ''}
                </div>
                :
              <div className='justify-around border'>    
                <Link className='nav' to="/blogs">Blogs</Link>
                <Link className='nav' to="/projects">Projects</Link>
                <Link className='nav' to="/topics">Topics</Link>
              </div>
              }
            </div>

            <div className='flex flex-col-reverse md:flex-row justify-around md:pt-20 pt-10'>
              <Switch>
                <Route path="/projects">
                  <Projects />
                </Route>
                <Route path="/blogs">
                  <Blogs />
                </Route>
                <Route path="/topics">
                  <Topics />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>

          </div>
        </Router> 

        <Footer />
      </div>
    </>
  )
}


function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

