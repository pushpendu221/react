import {SignInWithGooglePopup,CreateUserDocumentfromAuth} from '../../utils/firebase/firebase.util';

const googleAuth = async() => {
const {user} = await SignInWithGooglePopup();
const userDocRef = await CreateUserDocumentfromAuth(user);
}



const SignIn = () => {
  return (
    <div>
     <button onClick={googleAuth}>Sign Up with Google Popup</button>
    </div>
  );
};

export default SignIn;