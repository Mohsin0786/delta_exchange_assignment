
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./dashboard" 
function App() {
  return (
   
  <Router>
    <div>
      <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>

        </Routes>
      </div> 
   </Router>
  );
}

export default App;
