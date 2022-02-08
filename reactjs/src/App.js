import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Main from './commons/components/main/Main';
import List from './commons/components/list';
import Header from './commons/components/main/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='menu'>
          <Link to="/list">리스트</Link>
        </div>
        <Header />
        <Routes>
          <Route path="" exact element={<Main />}></Route>
          <Route path="list" exact element={<List />}></Route>
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
