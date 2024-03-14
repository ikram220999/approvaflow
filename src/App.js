import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import { Toaster } from "react-hot-toast";
import Submission from "./Submission";

function App() {
  return (
    <div className="App my-4 h-screen flex items-center bg-indigo-50">
      <Toaster />
      <div className="border w-11/12 md:w-4/5 lg:w-1/2 rounded-2xl m-auto my-4 shadow-lg bg-white">
       <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to={"/"} />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/new" element={<Form />}></Route>
          <Route path="/submission" element={<Submission />}></Route>

        </Routes>
       </BrowserRouter>
      {/* <div class=" mb-4 text-center text-sm">Build with ❤️ by <a href="https://github.com/ikram220999" target="_blank">Ikram </a></div> */}
      </div>

    </div>
  );
}

export default App;
