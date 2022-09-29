import { useState } from "react";

const Form = () => {
  const [value, setValue] = useState({ FirstName: "", LastName: "" });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
      FirstName : ${value.FirstName}
      LastName : ${value.LastName}
      
    `);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name :
        <input
          name="FirstName"
          type="text"
          value={value.FirstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name :
        <input
          name="LastName"
          type="text"
          value={value.LastName}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
