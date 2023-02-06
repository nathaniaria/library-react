import Nav from "./components/Nav";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import { books } from './data'
import BookInfo from "./Pages/BookInfo";



function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact render={() => <Home books={books} />}/>
      <Route path="/books" exact render={() => <Books books={books} />}/>
      <Route path="/books/:id" exact render={() => <BookInfo books={books} />}/>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
