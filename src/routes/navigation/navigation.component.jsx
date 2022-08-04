import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Crwlogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.contexts";
import { UserSignOut } from "../../utils/firebase/firebase.util";
import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser,setCurrentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    await UserSignOut();
    setCurrentUser(null);
  }
  //console.log(currentUser);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <Crwlogo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>Sign Out</span>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              Sign-In
            </Link>
          )}
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Navigation;
