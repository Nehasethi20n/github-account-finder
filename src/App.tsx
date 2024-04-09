import './style/app.css';
import Header from './components/header'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import More from './service/More';

const App = () => {
  return (
	<Router>
       <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/more/:repo_url" element={<More/>} />
		</Routes>
    </Router>
  )
}

export default App