import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="my-20">
      <h4 className="text-4xl font-bold my-5">
        Approva<span className="text-indigo-600">Flow</span>
      </h4>
      <p className="w-5/6 sm:w-1/2 m-auto">
        Do you have problem to get approval from your{" "}
        <i>
          <b>upper level, then supervisor, then managers and lastly boss</b>
        </i>{" "}
        ? Here is your one stop solution for that problem
      </p>
      {/* <h4 className="text-lg font-semibold mb-2">Need approval ? </h4> */}
      <Link to={"/new"}>
        <button className="py-4 px-7 border bg-indigo-700 text-sm sm:text-lg text-white font-bold rounded-lg hover:bg-indigo-600 mt-8">
          {" "}
          Create Approval Flow
        </button>
      </Link>
      <div className="w-1/2 sm:w-1/3 m-auto flex flex-col justify-center items-center mt-20 gap-2">
        <p className="font-semibold text-gray-400 text-sm sm:text-lg">Track approval</p>
        <input
          type="text"
          placeholder="approval id"
          className="border rounded-lg py-2 w-full text-sm sm:text-lg text-center"
        ></input>
        <button className="py-2 w-full border bg-gray-400 text-sm sm:text-lg text-white font-bold rounded-lg hover:bg-gray-500">
          {" "}
          Check
        </button>
      </div>
    </div>
  );
};
export default Home;
