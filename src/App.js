import { BrowserRouter, Route, Routes } from "react-router-dom";



import MyQuery from "./components/QueryPortal/MyQuery";
import Portal from "./components/Portal/Portal";
import { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Capstone from "./components/Capstone/Capstone";
import Requirment from "./components/Requirment/Requirment";
import Portfolio from "./components/portfolio/Portfolio";
import Interview from "./components/Interview/Interview";
import Certificate from "./components/Certificate/Certificate";
import MyApplication from "./components/emptyComponents/MyApplication";
import Testimonial from "./components/emptyComponents/Testimonial";
import LeaveApplication from "./components/emptyComponents/LeaveApplication";
import AllQuery from "./components/displayQuery/AllQuery";
import { useStateValue } from "./components/chat/context/StateProvider";
import AllChatComponents from "./components/chat/AllChatComponents/AllChatComponents";
import Form from "./components/displayQuery/Form";
import Login from "./components/chat/login/Login";

function App() {
  const [query, setQuery] = useState("+ Create Query");
  const [{ user }] = useStateValue();
  return (
    <div className="App">
      <BrowserRouter>
      {!user ? (
        <Login />
      ) : (
        <Routes>
          <Route path="/" element={<Dashboard />} />
           <Route path="/portal" element={<Portal query={query} setQuery={setQuery} />}>
            <Route path="queries" element={<MyQuery query={query} setQuery={setQuery} />}/>
            <Route path="createquery" element={<Form />} />
            <Route path="allQuery" element={<AllQuery />} />
            <Route path="capstone" element={<Capstone />} />
            <Route path="requirment" element={<Requirment />} />
            <Route path="interview" element={<Interview />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="myApplication" element={<MyApplication />} />
            <Route path="testimonial" element={<Testimonial />} />
            <Route path="leaveApplication" element={<LeaveApplication />} />
            <Route path="certificate" element={<Certificate />} />
            </Route>
            
            <Route path="/chat" element={<AllChatComponents/>} />
              <Route path="/room/:roomId" element={<AllChatComponents />} />
        </Routes>
         )}
      </BrowserRouter> 
      
       
     
    </div>
  );
}

export default App;
