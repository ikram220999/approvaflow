import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";

const ApprovalProcess = () => {
  const params = useParams();
  const urlparams = new URLSearchParams(window.location.search);
  const navigate = useNavigate();

  const [data, setData] = useState({
    sender: "",
    title: "",
    description: ""
  });

  const fetchApproval = () => {
    const loadDataToast = toast.loading("Load approval..")
    axios.get(`${process.env.REACT_APP_API_HOSTNAME}/api/approval/` + params.id + '?secret=' + urlparams.get("secret")).then((res) => {
        console.log("res", res);
        toast.remove(loadDataToast)
        if(res.data){
          if(res.data.approver){
            if(res.data.approver.status){
              toast.remove(loadDataToast)
              toast.success("Already responded")
              setTimeout(() => {
                navigate("/approval/responded")
              },1000)
            }
          }else { 
            setData({
              sender: res.data && res.data.sender ? res.data.sender.email : "",
              title: res.data && res.data.approval ? res.data.approval.title : "",
              description: res.data && res.data.approval ? res.data.approval.description : ""
            })
          }
        }

        toast.success("Data loaded ")

    }).catch((err) => {
        console.log("err", err);
        toast.remove(loadDataToast)
        toast.error("Error load data")

    })
  }

  const respond = (type) => {

    let respond = ""
    if(type == "R"){
      respond = "reject"
    }else {
      respond = "approve"
    }

    const submitResponse = toast.loading("Submitting respond ...")
    axios.post(`${process.env.REACT_APP_API_HOSTNAME}/api/approval/` + params.id + `/${respond}`,
     {secret: urlparams.get("secret")}
     ).then((res) => {
      console.log("res", res);
      toast.remove(submitResponse)
      if(res.data.message == "success"){
        toast.success("Respond submitted")
      } else {
        toast.error("Approval already completed")
      }
      setTimeout(() => {
        navigate("/approval/responded")
      }, 2000)

  }).catch((err) => {
      console.log("err", err);
      toast.remove(submitResponse)
      toast.error("Error submit respond")

  })
  }

  useEffect(() => {
    fetchApproval()
    console.log(params);
    console.log(urlparams.get("secret"));
  }, []);

  return (
    <>
      <div className="w-full h-full py-4 px-6">
        <div className="flex justify-between mb-6">
          <h4 className="text-lg font-bold">Approval Process</h4>
          <hr />
        </div>
        <div className="rounded-lg flex flex-col w-full gap-4">
          <div className="flex flex-col w-full sm:flex-row gap-2">
            <b className="sm:w-1/4 w-full text-left">Sender</b>
            <p className="sm:w-3/4 w-full text-left border p-2 rounded-md bg-gray-100 font-semibold">{data.sender}</p>
          </div>
          <div className="flex w-full flex-col w-full sm:flex-row gap-2">
            <b className="sm:w-1/4 w-full text-left">Title</b>
            <p className="sm:w-3/4 w-full text-left border p-2 rounded-md bg-gray-100 ">{data.title}</p>
          </div>
          <div className="flex w-full flex-col w-full sm:flex-row gap-2">
            <b className="sm:w-1/4 w-full text-left">Description</b>
            <p className="sm:w-3/4 w-full text-left border p-2 rounded-md bg-gray-100">{data.description}</p>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          {/* <Link to={"/home"}> */}
            <button
              className="text-sm sm:text-md  py-2 px-5 bg-red-400 text-white font-bold rounded-lg hover:bg-red-500 mt-8"
              onClick={() => respond("R")}
            >
              {" "}
              Reject
            </button>
          {/* </Link> */}
          {/* <Link to={"/home"}> */}
          <button
            className="text-sm sm:text-md  py-2 px-5 bg-indigo-700 text-white font-bold rounded-lg hover:bg-indigo-600 mt-8"
              onClick={() => respond("A")}
          >
            {" "}
            Approve
          </button>
        {/* </Link> */}
        </div>
      </div>
    </>
  );
};
export default ApprovalProcess;
