import SignupForm from "../../components/signup-form/signup-form.component";
import SignInForm from "../../components/signIn-form/signIn-form.component";
import './authentication.styles.scss'
const Authentication = () => {

  return (
    <div className="authentication-container">
      <SignInForm/>
      <SignupForm/>
    </div>
  );
};

export default Authentication;
