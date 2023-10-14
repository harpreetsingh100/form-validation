import { useState } from "react";
import FormInput from "./components/FormInput";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errorMessage: "Passwords dont match!",
      required: true,
      pattern: values.password,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(values);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-purple-600">
      <form className="shadow-2xl p-5 rounded-xl w-1/3 bg-white">
        <h1 className="text-2xl text-center mb-3 text-purple-600">Register</h1>
        {inputs.map((input) => {
          return (
            <FormInput
              {...input}
              key={input.id}
              values={input.name}
              onChange={onChange}
            />
          );
        })}
        <button
          onClick={handleSubmit}
          className="text-center w-full px-3 py-2 rounded-lg font-xl cursor-pointer my-3 bg-purple-600 ">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
