function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 30,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 0v15h8V0h-8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M16 1h6v13h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 0h15v4H0zM27.938 4.219L23 9.187V12l6.375-6.375-1.438-1.406z"
}));

export default SvgComponent;