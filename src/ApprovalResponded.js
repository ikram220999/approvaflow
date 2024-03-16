import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";

const ApprovalResponded = () => {

  return (
    <>
      <div className="w-full h-full py-4 px-6">
        <div className="flex flex-col justify-center items-center mb-0 gap-4">
            <div className="sm:w-16 w-12 ">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="green"
                >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
            </div>
          <h4 className="text-lg font-bold">Thankyou for your respond</h4>
          <hr />
        </div>
        <Link to={"/home"}>
              <button
                className="text-sm sm:text-md w-1/2 sm:w-1/4 py-2 px-5 border bg-indigo-700 text-white font-bold rounded-lg hover:bg-indigo-600 mt-8"
                //   onClick={""}
              >
                {" "}
                Home
              </button>
            </Link>
        
      </div>
    </>
  );
};
export default ApprovalResponded;
