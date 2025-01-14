import { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import Title from "./Title";
import useNetworkStatus from "../utils/useNetworkStatus";

const HeaderComponent = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const { user } = useContext(userContext);

  const isOnline = useNetworkStatus();
  // we destructure the object extracting the user obj from userContext
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <nav className="nav-bar">
        <Title />

        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="link">
              Contact
            </Link>
          </li>

          <li>
            <Link to="/Cart" className="cart-btn link" data-testid="cartItem">
              Cart - {cartItems.length}
            </Link>
          </li>
          <li>
            <span data-testid="user">{user.name}</span>
            <span data-testid="isOnline" className="ml-1">
              {isOnline ? " ✅ " : " 🔴 "}
            </span>
          </li>
        </ul>

        <div>
          {isLoggedIn ? (
            <Link to="/reg" className="link">
              <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
            </Link>
          ) : (
            <Link to="/reg" className="link">
              <button onClick={() => setIsLoggedIn(true)}>LogIn</button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default HeaderComponent;
