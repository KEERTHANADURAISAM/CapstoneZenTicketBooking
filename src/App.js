import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import CreateQuery from './components/CreateQuery/CreateQuery';
import MyQuery from './components/QueryPortal/MyQuery';
import Portal from './components/Portal/Portal';
// import Test from './components/Testing/Test';
import { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Capstone from './components/Capstone/Capstone';
import Requirment from './components/Requirment/Requirment';
import Portfolio from './components/portfolio/Portfolio';
import Interview from './components/Interview/Interview';
import Certificate from './components/Certificate/Certificate';

function App() {
  const [query,setQuery] = useState("+ Create Query");
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        
        <Route path='/portal' element={<Portal query={query} setQuery={setQuery}/>}>
          <Route path='queries' element={<MyQuery query={query} setQuery={setQuery}/>}/>
          <Route path='createquery' element={<CreateQuery/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='capstone' element={<Capstone/>}/>
          <Route path='requirment' element={<Requirment/>}/>
          <Route path='interview' element={<Interview/>}/>
          <Route path='portfolio' element={<Portfolio/>}/>
          <Route path='certificate' element={<Certificate/>}/>

        </Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
