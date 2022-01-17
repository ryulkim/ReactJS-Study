import './App.css';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Main from './commons/components/main'
import List from './commons/components/list'

function App() {
  return (
    <div className="App">
      <h1>Rush</h1>
      
        <BrowserRouter>
          <div className='menu'>
            <Link to="/">main</Link>
            <Link to="/list">리스트</Link>
          </div>
          
          <Routes>
            <Route path="" exact element={<Main/>}></Route>
            <Route path="list" exact element={<List/>}></Route>
          </Routes>
        </BrowserRouter>
        
      
      
    </div>
  );
}

export default App;
