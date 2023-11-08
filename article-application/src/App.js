import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Article from './Components/Article';
import ArticleDashboard from './Components/ArticleDashboard';
import ArticleList from './Components/ArticleList';
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ArticleList} />
        <Route exact path="/dashboard" component={ArticleDashboard} />
        <Route path="/article/:id" component={Article} />
      </Switch>
    </div>
  );
}

export default App;
