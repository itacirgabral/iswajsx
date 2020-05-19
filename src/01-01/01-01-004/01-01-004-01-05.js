function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18 0h2v13h-2zM12 15v15h8V15h-8zm-2.125.094C-.013 15.973 0 23 0 23c0 5.193 6.59 6.498 10 6.844v-1.907C3.012 27.392 3 24 3 24c0-3.493 4.352-4.558 7-4.875v-4.031c-.039.003-.086-.004-.125 0z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M13 16h3v13h-3z"
}));

export default SvgComponent;