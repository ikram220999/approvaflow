import React, { useEffect, useState } from "react";

const StepTwo = (props) => {
  const [approver, setApprover] = useState(props.approver);
  const [input, setInput] = useState({
    position: "",
    email: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const addApprover = () => {
    setApprover([...approver, input]);
    setInput({
        position:"",
        email:""
    })
  };

  useEffect(() => {
    props.setApprover(approver)
  }, [approver])
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
            placeholder="Position"
            name="position"
            value={input.position}
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

                <div class="flex items-center gap-6 ">
                  <h1 class="md:text-lg">{idx + 1}</h1>
                  <div className="flex flex-col text-left md:text-lg ">
                    <h1 class="md:text-xl font-semibold">{app.email}</h1>
                    <h3><i></i>{app.position}</h3>
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
