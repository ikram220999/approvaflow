import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

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

    console.log(approver, input);
    if(approver.filter((app) => app.email == input.email).length > 0){
      return false
    }

    return true
  }

  const addApprover = () => {

    if(validateInput(approver, input)){
      setApprover([...approver, input]);
      setInput({
        role: "",
        email: "",
      });
    } else {
      toast.error("Error add data")
    }
  };

  const removeApprover = (email) => {
    setApprover(approver.filter((app) => app.email != email))
  }

  useEffect(() => {
    props.setApprover(approver);
  }, [approver]);
  return (
    <>
      <div className="flex flex-col gap-3">
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
        <div class="border-2 border-gray-400 rounded-lg p-2">
          <div class="border-l-2 mt-10 overflow-scroll h-60">
            {approver.map((app, idx) => (
              <div class="transform transition cursor-pointer  ml-10  flex px-6 py-4 bg-indigo-400 text-white rounded mb-10 flex-col md:flex-row space-y-2 md:space-y-2">
                <div class="w-5 h-5 bg-indigo-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-0 md:mt-0"></div>

                <div class="w-10 h-1 bg-indigo-300 absolute -left-10 z-0"></div>

                <div class="flex items-center justify-between w-full">
                  {/* <h1 class="md:text-lg w-1/6">{idx + 1}</h1> */}
                  <div className="flex flex-col text-left md:text-lg w-5/6">
                    <h1 class="md:text-xl font-semibold">{app.email}</h1>
                    <h3>
                      <i></i>
                      {app.role}
                    </h3>
                  </div>
                  <div className="w-1/6">
                    <button className="bg-red-600 p-2 rounded-lg w-8" onClick={() => removeApprover(app.email)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        fill="white"
                      >
                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default StepTwo;
