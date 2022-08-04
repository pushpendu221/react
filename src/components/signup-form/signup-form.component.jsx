import { useState,useContext } from "react";
import {
  CreateAuthUserUsingEmailAndPassword,
  CreateUserDocumentfromAuth,
} from "../../utils/firebase/firebase.util";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.contexts";
import './signup-form.styles.scss';
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  repassword: "",
};
const SignupForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, repassword } = formFields;
  const {setCurrentUser} = useContext(UserContext); 
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
      setCurrentUser(user);
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
    <div className="sign-up-container">
      <h2>Don't have an Account?</h2>
      <span> Sign up with your email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          onChange={eventHandler}
          value={displayName}
          name="displayName"
          required
        />

        <FormInput
          label="Email"
          type="email"
          onChange={eventHandler}
          value={email}
          name="email"
          required
        />
        <FormInput
          label="Password"
          type="password"
          onChange={eventHandler}
          value={password}
          name="password"
          required
        />

        <FormInput
          label="Retype Password"
          type="password"
          onChange={eventHandler}
          value={repassword}
          name="repassword"
          required
        />
        <Button children='Submit' type="submit"/>
      </form>
    </div>
  );
};

export default SignupForm;
