import { useState } from "react";
import {
  CreateAuthUserUsingEmailAndPassword,
  CreateUserDocumentfromAuth,
} from "../../utils/firebase/firebase.util";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  repassword: "",
};

const SignupForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, repassword } = formFields;

  //console.log(formFields);
  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== repassword) {
      alert("Password Doesn't Match");
      return;
    }
    try {
      const { user } = await CreateAuthUserUsingEmailAndPassword(
        email,
        password
      );
      await CreateUserDocumentfromAuth(user, { displayName });
      resetFormField();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Cannot Create User, User Already Exists");
      }
      console.log("ERROR AUTHENTICATING USER", err);
    }
  };

  const eventHandler = (event) => {
    //console.log(event);
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1> This Is Sign Up Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          onChange={eventHandler}
          value={displayName}
          name="displayName"
          required
        />
        <label>Email</label>
        <input
          type="email"
          onChange={eventHandler}
          value={email}
          name="email"
          required
        />
        <label>Password</label>
        <input
          type="password"
          onChange={eventHandler}
          value={password}
          name="password"
          required
        />
        <label>Retype Password</label>
        <input
          type="password"
          onChange={eventHandler}
          value={repassword}
          name="repassword"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;
