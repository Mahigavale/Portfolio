import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      
      {/* <header>
        <h1>Welcome to My Portfolio</h1>
      </header> */}
      <Outlet />
    </div>
  );
}

export default App;
