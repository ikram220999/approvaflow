import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [uuid, setUuid] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const [approvalCount, setApprovalCount] = useState(null)

  const createFlow = () => {
    axios
      .post(`${process.env.REACT_APP_API_HOSTNAME}/api/flow/new`)
      .then((res) => {
        if (res.data) {
          navigate("/new/" + res.data.uuid);
        }
      })
      .catch((err) => {});
  };

  const checkApproval = () => {
    navigate(`/approval/check/${uuid}`);
  };

  const getApprovalCount = () => {
    axios.get(`${process.env.REACT_APP_API_HOSTNAME}/api/approval/count`)
    .then((res) => {
      if(res.data) {
        setApprovalCount(res.data)
      }
    })
    .catch((err) => {});
  }

  useEffect(() => {
    getApprovalCount()
  }, [])

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
      {/* <Link to={"/new"}> */}
      <div className="w-5/6 sm:w-2/5 md:1/4 m-auto mt-4 flex justify-center items-center gap-4 px-4 py-2 shadow-sm rounded-lg">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class=" h-6 w-6 rounded-full text-indigo-500"
        >
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clip-rule="evenodd"
          />
        </svg>
        <span className="text-black font-bold text-xl">{approvalCount}</span> Flow Created
      
      </div>
      <div className="flex flex-col px-4 items-center gap-3">
        <button
          className="w-2/3 sm:w-1/2 py-4 px-7 border bg-indigo-700 text-sm sm:text-lg text-white font-bold rounded-lg hover:bg-indigo-600 mt-8"
          onClick={() => createFlow()}
        >
          {" "}
          Create Approval Flow
        </button>
        {!isCheck ? (
          <button
            className="w-2/3 sm:w-1/2 py-4 px-7 border border-indigo-700 bg-white text-sm sm:text-lg text-indigo-700 font-bold rounded-lg hover:bg-indigo-100"
            onClick={() => setIsCheck(true)}
          >
            {" "}
            Check Approval
          </button>
        ) : (
          ""
        )}
      </div>
      {/* </Link> */}
      {isCheck ? (
        <>
          <div className="w-1/2 sm:w-1/3 m-auto flex flex-col justify-center items-center mt-20 gap-2">
            <p className="font-semibold text-gray-400 text-sm sm:text-lg">
              Track approval
            </p>
            <input
              type="text"
              placeholder="approval id"
              name="uuid"
              value={uuid}
              onChange={(e) => setUuid(e.target.value)}
              className="border rounded-lg py-2 w-full text-sm sm:text-lg text-center"
            ></input>

            <button
              onClick={() => checkApproval()}
              className="py-2 w-full border bg-gray-400 text-sm sm:text-lg text-white font-bold rounded-lg hover:bg-gray-500"
            >
              {" "}
              Check
            </button>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
export default Home;
