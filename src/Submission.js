import React from "react";
import { Link } from "react-router-dom";

const Submission = () => {
  return (
    <>
      <div className="py-10">
        <div className=" sm:w-4/5 m-auto flex flex-col items-center gap-4">
          <div className="sm:w-16 w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="green"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
            </svg>
          </div>
          <h4 className="text-md font-semibold">
            Your Approval Request Submitted
          </h4>
          <hr />
          <div className="flex flex-col gap-2">
            <h4 className="text-md font-semibold">Below is your approval ID</h4>
            <input
              disabled
              value={"asd12-kjjn1-uyy6t-ooi98"}
              className="bg-indigo-200 text-gray-700 font-bold px-6 py-2 rounded-md text-center text-sm sm:text-lg"
            ></input>
            <div className=" flex items-center gap-2 py-2 w-full text-center justify-center bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-400">
              <p className="text-sm sm:text-lg">Copy</p>
              <div className="w-4 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white">
                  <path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z" />
                </svg>
              </div>
            </div>
            <Link to={"/home"}>
              <button
                className="text-sm sm:text-lg w-full py-2 px-5 border bg-indigo-700 text-white font-bold rounded-lg hover:bg-indigo-600 mt-8"
                //   onClick={""}
              >
                {" "}
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Submission;
