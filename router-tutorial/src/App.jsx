import './App.css';
import { Outlet, Link } from "react-router-dom";


function App() {
  return (
    <div>
      <h1>UserPage</h1>
      <ul>  
      <li><Link to="/Home">Home</Link></li>
      <li><Link to="/About">About</Link></li>
      <li><Link to="/Expenses">Expenses</Link></li>
      <li><Link to="/Invoices">Invoices</Link></li>
      <li><Link to="/Articles">Articles</Link></li>
      <li><Link to="/MyPage">Mypage</Link></li>
      </ul>
      <Outlet />
    </div>
  );
}

export default App;
