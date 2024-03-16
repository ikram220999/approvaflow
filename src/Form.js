import React, { useEffect, useState } from "react";
import StepTwo from "./StepTwo";
import StepOne from "./StepOne";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Form = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const stepArr = [1, 2];
  const [input, setInput] = useState({
    email: "",
    title: "",
    description: "",
  });
  const [approver, setApprover] = useState([]);

  const submitApproval = () => {
    const submitToast = toast.loading("Submitting ...")

    if(approver.length > 0){
      axios
      .post(
        `${process.env.REACT_APP_API_HOSTNAME}/api/flow/submit/` + params.id,
        { approver: approver }
        )
        .then((res) => {
          console.log("res", res);
          if (res) {
            toast.remove(submitToast)
            navigate("/submission/" + params.id)
          }
        })
        .catch((err) => {
          toast.error("Error submit flow")
        });
    } else {
      toast.remove(submitToast)
      toast.error("Need at least 1 approver")
    }
  };

  const saveStepOne = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_HOSTNAME}/api/flow/update/` + params.id,
        input
      )
      .then((res) => {
        console.log("res", res);
        if (res) {
          setStep(2);
        }
      })
      .catch((err) => {});
  };

  useEffect(() => {
    toast.success("Saved !");
  }, [step]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_HOSTNAME}/api/flow/` + params.id)
      .then((res) => {
        console.log(res);
        setInput({
          email: res.data.sender.email,
          title: res.data.title,
          description: res.data.description,
        });
        setApprover(res.data.receiver);

        if (res.data.status != "D") {
          navigate("/submission/" + params.id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="w-full h-full py-4 px-6">
        <div className="flex justify-between mb-4">
          <h4 className="text-lg font-bold">New Approval Flow</h4>
          <div className="flex gap-2">
            {stepArr.map((st) => (
              <>
                {st === step ? (
                  <p className="px-3 py-2 bg-indigo-400 rounded-md  border-2 border-indigo-400 font-bold text-white">
                    {st}
                  </p>
                ) : (
                  <p className="px-3 py-2 bg-white rounded-md border-2 border-gray-100 font-bold">
                    {st}
                  </p>
                )}
              </>
            ))}
          </div>
        </div>
        {step === 1 ? (
          <StepOne input={input} setInput={setInput} />
        ) : (
          <StepTwo approver={approver} setApprover={setApprover} />
        )}
        <div className="w-full flex justify-end">
          {step === 1 ? (
            <div className="flex gap-2">
              <Link to={"/home"}>
                <button className="py-2 px-5 border text-sm sm:text-md bg-indigo-100 text-gray-500 font-bold rounded-lg hover:bg-indigo-200 mt-8">
                  {" "}
                  Cancel
                </button>
              </Link>
              <button
                className="py-2 px-5 border text-sm sm:text-md bg-indigo-700 text-white font-bold rounded-lg hover:bg-indigo-600 mt-8"
                onClick={() => saveStepOne()}
              >
                {" "}
                Next
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <button
                className="py-2 px-5 border text-sm sm:text-md bg-indigo-100 text-gray-500 font-bold rounded-lg hover:bg-indigo-200 mt-8"
                onClick={() => setStep(1)}
              >
                {" "}
                Prev
              </button>
              {/* <Link to={"/submission"}> */}
              <button
                className="py-2 px-5 border text-sm sm:text-md bg-indigo-700 text-white font-bold rounded-lg hover:bg-indigo-600 mt-8"
                onClick={() => submitApproval()}
              >
                {" "}
                Submit
              </button>
              {/* </Link> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
