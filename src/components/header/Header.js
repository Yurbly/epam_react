import React from "react";
import "./index.css";

const Title = React.createElement("h3", {className: "header-title"}, "Epam react training test");

const Header = React.createElement("header", {className: "header"}, Title);

export default Header

