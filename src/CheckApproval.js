import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";

const CheckApproval = () => {
  const params = useParams();
  const [uuid, setUuid] = useState("");
  const [approval, setApproval] = useState({});
  const [approver, setApprover] = useState([]);

  const checkApproval = () => {
    axios
      .post(`${process.env.REACT_APP_API_HOSTNAME}/api/approval/check`, {
        uuid: params.id,
      })
      .then((res) => {
        console.log(res);
        if(res.status == 200){
            if (res.data) {
                setApproval(res.data.approval);
                setApprover(res.data.listApprover);
            }
            toast.success("Data loaded")

        } else {
            toast.error("Data not found")
        }
      })
      .catch((err) => {

      });
  };

  const renderStatus = (stat) => {
    if (stat == "A") {
      return (
        <h1 class="text-sm md:text-sm bg-green-100 px-2 py-1 text-center rounded-md">
          Approve
        </h1>
      );
    } else if (stat == "R") {
      return (
        <h1 class="text-sm md:text-sm bg-red-100 px-2 py-1 text-center rounded-md">
          Reject
        </h1>
      );
    } else {
      return (
        <h1 class="text-sm md:text-sm bg-gray-100 px-2 py-1 text-center rounded-md">
          None
        </h1>
      );
    }
  };

  useEffect(() => {
    checkApproval();
  }, []);
  return (
    <div className=" py-4 px-6 ">
      <div className="h-full flex flex-col gap-4">
        <h4 className="text-lg font-bold ">Approval Status</h4>
        <div className="rounded-lg flex flex-col w-full gap-4 ">
          <div className="flex flex-col w-full sm:flex-row gap-2">
            <b className="sm:w-1/4 w-full text-left text-sm sm:text-lg">Title</b>
            <p className="sm:w-3/4 w-full text-left border p-2 rounded-md bg-gray-100 font-semibold text-sm sm:text-lg">
              {approval.title}
            </p>
          </div>
          <div className="flex w-full flex-col w-full sm:flex-row gap-2">
            <b className="sm:w-1/4 w-full text-left text-sm sm:text-lg">Description</b>
            <p className="sm:w-3/4 w-full text-left border p-2 rounded-md bg-gray-100 text-sm sm:text-lg">
              {approval.description}
            </p>
          </div>
        </div>
      </div>
      <div className=" rounded-lg -2 mt-4 py-4">
        <h4 className="text-sm sm:text-lg font-bold ">List Responder</h4>
        {approver
          ? approver.map((app, idx) => (
              <div class=" flex px-4 py-3 bg-white-600 text-gray-700 border rounded-md rounded flex-col md:flex-row mt-4">
                <div class="flex items-center justify-between w-full text-left ">
                  <div className=" w-1/7">
                    <h1 class="md:text-lg text-left  ">{idx + 1}</h1>
                  </div>
                  <div className="flex flex-col text-left items-start  md:text-md w-3/6">
                    <h1 class="md:text-lg font-semibold text-left text-sm">
                      {app.email}
                    </h1>
                    <h3 class="md:text-lg font-semibold text-left text-sm">
                      {app.role}
                    </h3>
                  </div>
                  <div className="flex flex-col md:text-lg w-2/6">
                    {renderStatus(app.status)}
                  </div>
                </div>
              </div>
            ))
          : ""}
      </div>
      <Link to={"/home"}>
      <button
          className=" mt-6 py-2 w-1/2 sm:w-1/4 border bg-indigo-600 text-sm sm:text-lg text-white font-bold rounded-lg hover:bg-gray-500"
        >
          {" "}
          Home
        </button>
      </Link>
    </div>
  );
};
export default CheckApproval;
