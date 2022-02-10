import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Main from './commons/components/main/Main';
import List from './commons/components/list';
import Menu from './commons/components/menu';
import Footer from './commons/components/main/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" exact element={<Main />}></Route>
          <Route path="/main" exact element={<Main />}></Route>
          <Route path="/list" exact element={<List />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
