function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 15h8v15h-8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M14 16h6v13h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 15v2h11v-2H0zM17 0h1v13h-1zM14 2h1v11h-1zM11 4h1v9h-1zM27.375 17.813L22 23.188V26l6.781-6.781-1.406-1.407z"
}));

export default SvgComponent;