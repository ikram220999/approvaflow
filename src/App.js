import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import { Toaster } from "react-hot-toast";
import Submission from "./Submission";
import ApprovalProcess from "./ApprovalProcess";
import ApprovalResponded from "./ApprovalResponded";
import CheckApproval from "./CheckApproval";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App py-6 min-h-screen flex items-center bg-indigo-50">
      <SpeedInsights />
      <Analytics />
      <Toaster />
      <div className="border w-11/12 md:w-4/5 lg:w-1/2 rounded-2xl m-auto shadow-lg py-4 bg-white">
       <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to={"/"} />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/new/:id" element={<Form />}></Route>
          <Route path="/submission/:id" element={<Submission />}></Route>

          <Route path="/approval/check/:id" element={<CheckApproval />}></Route>
          <Route path="/approval/process/:id" element={<ApprovalProcess />}></Route>
          <Route path="/approval/responded" element={<ApprovalResponded />}></Route>

        </Routes>
       </BrowserRouter>
      {/* <div class=" mb-4 text-center text-sm">Build with ❤️ by <a href="https://github.com/ikram220999" target="_blank">Ikram </a></div> */}
      </div>

    </div>
  );
}

export default App;
