import React from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
//style 
import './assets/style.scss';
//components
import Header from './components/header/index';
import routes from './routes';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import WorkDetails from './components/work/WorkDetails';
import BlogInner from './components/blogs/BlogInnerPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
        <Switch>
          { 
                routes.map(item => {
                    return (
                      <Route 
                      render={()=> item.component}
                      key={item.name}
                      path={item.url}
                      exact={item.exact}
                      />
                    );
                }
                ) 
          }
          <Route exact path="/work/:id">
              <WorkDetails />
          </Route>
          <Route exact path="/blog/:id">
              <BlogInner />
          </Route>
          <Route exact path="/">
              <Home />
          </Route>
          <Route>
              <h1 className="title is-size-2">
                404 - Page Not Found
              </h1>
          </Route>
        </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
