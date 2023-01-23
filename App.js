import './App.css';

import SignupForm from './Pages/Form1'
import Table from './Pages/Table'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"




function App() {
  return (
    <div className="App">
    
<Router> 
<Routes>
 <Route path="/" element={<Table />}/>
 <Route path="/Form1" element={<SignupForm />}/>

</Routes>


</Router>
   <div>
</div>
    </div>
  );
}

export default App;
