import './App.css';
import Header from './components/header';
import AddPrice from './components/addPrice';
import AllPrices from './components/AllPrices';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <Header/>

        <AllPrices/>
        
        <Routes>
           <Route path='/' exact element = {<AddPrice/>}/>
        </Routes>
        
        
      </div>
    </Router>
    
  );
}

export default App;
