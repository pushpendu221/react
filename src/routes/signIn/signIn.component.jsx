import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignupForm from "../../components/signup-form/signup-form.component";

import {
  auth,
  SignInWithGooglePopup,
  SignInWithGoogleRedirect,
  CreateUserDocumentfromAuth,
} from "../../utils/firebase/firebase.util";

const SignIn = () => {
  useEffect(() => {
    async function signIN() {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await CreateUserDocumentfromAuth(response.user);
      }
      console.log(response);
    }
    signIN();
  }, []);

  const googleAuthwithPopup = async () => {
    const { user } = await SignInWithGooglePopup();
    const userDocRef = await CreateUserDocumentfromAuth(user);
  };

  return (
    <div>
      <button onClick={googleAuthwithPopup}>Sign Up with Google Popup</button>
      {/* <button onClick={SignInWithGoogleRedirect}>Sign Up with Google Redirect</button> */}
      <SignupForm/>
    </div>
  );
};

export default SignIn;
