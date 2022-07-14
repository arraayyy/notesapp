import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import NotesPage from './pages/NotesPage'
import NotePage from './pages/NotePage'

import './App.css';

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header/>
          <Route path="/" component={NotesPage} exact />
          <Route path="/note/:id" component={NotePage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
