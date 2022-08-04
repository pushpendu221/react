import { useState,useContext } from "react";
import {
  SignInWithGooglePopup,
  CreateUserDocumentfromAuth,
  SignUserUsingEmailAndPassword,
} from "../../utils/firebase/firebase.util";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.contexts";
import "./signIn-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {setCurrentUser} = useContext(UserContext);
  const { email, password } = formFields;

  //console.log(formFields);
  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const googleAuthwithPopup = async () => {
    const { user } = await SignInWithGooglePopup();
    const userDocRef = await CreateUserDocumentfromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await SignUserUsingEmailAndPassword(email, password);
      setCurrentUser(user);
      resetFormField();
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          alert("User Not Found");
          break;
          case "auth/wrong-password":
            alert("Invalid Password");
            break; 
        default:
          console.log(err);
      }
    }
  };

  const eventHandler = (event) => {
    //console.log(event);
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an Account?</h2>
      <span> Sign In with your email and Password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={googleAuthwithPopup}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
