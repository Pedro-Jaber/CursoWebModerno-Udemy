import React from "react";
import "./Nav.css";

import NavLink from "./NavLink";

export default (props) => (
  <aside className="menu-area">
    <nav className="menu">
      <NavLink link="/" icon="home" title="Início" />
      <NavLink link="/users" icon="users" title="Usuários" />
    </nav>
  </aside>
);
