import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

export function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            Shop
          </Link>{" "}
          <Link className="nav-link" to={"/sign-in"}>
            SignIn
          </Link>
        </div>
      </div>
      <Outlet /> {/* This is the placeholder for nested routes */}
    </>
  );
}
