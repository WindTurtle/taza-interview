import { Route, Switch } from "react-router";
import ArticleFeature from "features/Article";
import "./App.css";
import Header from "./components/Header";
import Footer from "components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={ArticleFeature} exact />
        <Route path="/article" component={ArticleFeature} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
