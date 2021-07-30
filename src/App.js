import { Header } from './components'
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

const github = process.env.REACT_APP_GITHUB_SUBFOLDER || ""

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path={github + '/'} exact component={Home} />
        <Route path={github + "/cart"} component={Cart} />
      </div>
    </div>
  );
}

export default App;

