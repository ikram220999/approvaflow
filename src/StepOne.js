import React from "react";

const StepOne = (props) => {
  const handleChange = (e) => {
    props.setInput({
      ...props.input,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="flex flex-col gap-3">
        <b>Sender details</b>
        <input
          type="email"
          className="border py-1.5 px-4 rounded-md w-full font-semibold"
          placeholder="Email"
          name="email"
          value={props.input ? props.input.email : ""}
          onChange={handleChange}
        />
        <input
          type="text"
          className="border py-1.5 px-4 rounded-md w-full"
          placeholder="Title"
          name="title"
          value={props.input ? props.input.title : ""}
          onChange={handleChange}
        />
        <textarea
          type="text"
          className="border py-1.5 px-4 rounded-md w-full min-h-60 "
          placeholder="Description"
          name="description"
          value={props.input ? props.input.description : ""}
          onChange={handleChange}
        />
      </div>
    </>
  );
};
export default StepOne;
