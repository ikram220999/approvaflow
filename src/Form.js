import React, { useEffect, useState } from "react";
import StepTwo from "./StepTwo";
import StepOne from "./StepOne";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Form = () => {
  const [step, setStep] = useState(1);
  const stepArr = [1, 2];
  const [input, setInput] = useState({
    email: "",
    title: "",
    description: "",
  });
  const [approver, setApprover] = useState([]);

  const submitApproval = () => {};

  useEffect(() => {
    toast.success("Saved !");
  }, [step]);
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
            <button
              className="py-2 px-5 border text-sm sm:text-lg bg-indigo-700 text-white font-bold rounded-lg hover:bg-indigo-600 mt-8"
              onClick={() => setStep(2)}
            >
              {" "}
              Next
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                className="py-2 px-5 border text-sm sm:text-lg bg-indigo-100 text-gray-500 font-bold rounded-lg hover:bg-indigo-200 mt-8"
                onClick={() => setStep(1)}
              >
                {" "}
                Prev
              </button>
              <Link to={"/submission"}>
                <button
                  className="py-2 px-5 border text-sm sm:text-lg bg-indigo-700 text-white font-bold rounded-lg hover:bg-indigo-600 mt-8"
                //   onClick={""}
                >
                  {" "}
                  Submit
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
