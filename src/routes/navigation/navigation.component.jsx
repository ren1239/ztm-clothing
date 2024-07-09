import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

export function Navigation() {
  const { currentUser } = useContext(UserContext);
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
          {currentUser ? (
            <Link className="nav-link" onClick={signOutUser}>
              SignOut
            </Link>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              SignIn
            </Link>
          )}
        </div>
      </div>
      <Outlet /> {/* This is the placeholder for nested routes */}
    </>
  );
}
