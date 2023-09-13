import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TransactionList from "./components/TransactionList";
import TransactionView from "./components/TransactionView";

function App() {
  return (
      <>
          <Router>
              <Routes>
                  <Route path="/" element=<TransactionList/> />
                  <Route path="/transaction" element=<TransactionView/> />
              </Routes>
          </Router>
</>
  );
}

export default App;
