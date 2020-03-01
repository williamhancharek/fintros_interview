import React, { Component } from 'react';
import Home from './Home';
import StoryList from './StoryList';
import StoryAdd from './StoryAdd';
// import StoryInfo from './StoryInfo';
import {HashRouter as Router, Route, NavLink, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
    <div className="App">
      <Router>
        <div className="container">
          <Navigation />
          <Main />
        </div>
      </Router>
    </div>
    );
  }
}

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/stories">Stories</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/stories/new">Create Story</NavLink></li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/stories" component={StoryList} />
    <Route exact path="/stories/new" component={StoryAdd} />
  </Switch>
);

export default App;