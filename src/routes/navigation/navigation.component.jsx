import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import {ReactComponent as Crwlogo} from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
         <Crwlogo/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            Shop
          </Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Navigation;