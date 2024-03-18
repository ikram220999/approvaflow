import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { validateEmail } from "./function";

const StepTwo = (props) => {
  const [approver, setApprover] = useState(props.approver);
  const [input, setInput] = useState({
    role: "",
    email: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const validateInput = (approver, input) => {

    let result = {
      status: true,
      msg: "Success"
    }

    console.log(approver, input);
    if (approver.filter((app) => app.email == input.email).length > 0) {
      result.status = false
      result.msg = "Cannot list duplicate email"
      return result;
    }

    if(!validateEmail(input.email)){
      result.status = false
      result.msg = "Wrong email format"
      return result;
    }

    return result;
  };

  const addApprover = () => {
    let validateResult = validateInput(approver, input)
    if (validateResult.status) {
      setApprover([...approver, input]);
      setInput({
        role: "",
        email: "",
      });
    } else {
      toast.error(validateResult.msg);
    }
  };

  const removeApprover = (email) => {
    setApprover(approver.filter((app) => app.email != email));
  };

  useEffect(() => {
    props.setApprover(approver);
  }, [approver]);
  return (
    <>
      <div className="flex flex-col gap-3">
        <b>Approver details</b>
        <div className="border rounded-lg px-4 flex flex-col gap-3 py-4">
          <input
            type="email"
            className="border py-1.5 px-4 rounded-md w-full font-semibold "
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
          <input
            type="text"
            className="border py-1.5 px-4 rounded-md w-full "
            placeholder="Role"
            name="role"
            value={input.role}
            onChange={handleChange}
          />
          <button
            className="py-2 px-5 border bg-indigo-700 text-white font-bold rounded-lg hover:bg-indigo-600 mt-8 text-sm sm:text-md"
            onClick={() => addApprover()}
          >
            {" "}
            Add
          </button>
        </div>
        <hr className="mt-4" />
        <div class=" border-gray-400 rounded-lg p-2">
          <div class="mt-5 overflow-scroll h-60">
            <b className="">Approver List</b>
            <div class="flex h-auto items-center justify-start bg-white w-full mt-4">
              <div class=" w-full">
                {approver.map((app) => (
                  <div class="w-full mb-2 flex justify-between  border-l-4 border-s rounded-md border-indigo-500 py-4 px-4 shadow-sm">
                    <div className="flex">
                     
                      <div class="ml-6 text-start">
                        <h4 class="font-bold text-indigo-500">{app.email}</h4>
                        <p class=" max-w-screen-sm text-sm text-gray-500">
                          {app.role}
                        </p>
                        {/* <span class="mt-1 block text-sm font-semibold text-indigo-500">
                    2007
                  </span> */}
                      </div>
                    </div>
                    <div onClick={() => removeApprover(app.email)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="h-7 w-7 text-red-500 cursor-pointer"
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                      </svg>
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StepTwo;
