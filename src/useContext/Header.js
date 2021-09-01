import React from "react";
import { useUser } from "./context";

const Header = () => {
  const { name, loggedIn } = useUser();

  return (
    <header>
      <span>
        Hello, {name} you are {loggedIn ? "login" : "logout"}
      </span>
    </header>
  );
};

export default Header;
