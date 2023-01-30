import './App.css'
import {TransactionsProvider} from "./context/TransactionContext";
import {Route, Routes} from "react-router-dom";
import Home from "./component/Home";

function App() {
  return (
    <div>
        <TransactionsProvider>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </TransactionsProvider>
    </div>
  )
}

export default App
