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
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 3,
      name: "birthday",
      type: "text",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
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
    <div className="h-screen w-screen flex items-center justify-center bg-gray-500">
      <form className="border-4 border-black p-5 rounded-xl">
        <h1 className="text-2xl text-center mb-3">Register</h1>
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
          className="text-center w-full px-3 py-2 rounded-lg font-xl cursor-pointer my-3 border-4 border-black">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
