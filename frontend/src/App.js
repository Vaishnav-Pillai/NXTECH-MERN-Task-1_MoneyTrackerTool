import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AddExpense from './Components/AddExpense';
import Expenses from './Components/Expenses';
import Navbar from './Components/Navbar';
import DeleteExpense from './Components/DeleteExpense';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/addExpense"  element={<AddExpense />} />
          <Route exact path="/" element={<Expenses />} />
          <Route exact path="/deleteExpense" element={<DeleteExpense />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
