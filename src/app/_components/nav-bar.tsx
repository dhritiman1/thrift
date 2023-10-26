"use client";

import type { ReactElement } from "react";
import {
  BagIcon,
  CategoryIcon,
  FavoriteIcon,
  HomeIcon,
  UserIcon,
} from "./icons";

type NIWProps = {
  children: ReactElement;
  onClick: () => void;
};
const NavItemWrapper = ({ children, onClick }: NIWProps) => {
  return (
    <div
      onClick={onClick}
      className="flex w-12 cursor-pointer items-center justify-center active:scale-90 active:opacity-40"
    >
      {children}
    </div>
  );
};

const NavBar = () => {
  return (
    <nav className="absolute bottom-0 my-2 flex h-12 w-full justify-around px-2 shadow-sm sm:hidden">
      <NavItemWrapper onClick={() => console.log("do something!!")}>
        <HomeIcon />
      </NavItemWrapper>
      <NavItemWrapper onClick={() => console.log("do something!!")}>
        <FavoriteIcon />
      </NavItemWrapper>
      <NavItemWrapper onClick={() => console.log("do something!!")}>
        <CategoryIcon />
      </NavItemWrapper>
      <NavItemWrapper onClick={() => console.log("do something!!")}>
        <BagIcon />
      </NavItemWrapper>
      <NavItemWrapper onClick={() => console.log("do something!!")}>
        <UserIcon />
      </NavItemWrapper>
    </nav>
  );
};

export default NavBar;
