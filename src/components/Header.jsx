import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
export default function Header() {
  return (
    <div>
      <MenuItem title="HOME" address="/" icon={AiFillHome} />
      <h1>menu</h1>
      <h1>logo</h1>
    </div>
  );
}
