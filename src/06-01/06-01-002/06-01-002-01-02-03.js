function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 36,
  height: 32
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 5h36v4H0V5z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 0v1.875L7 14l8 13.844v.843C14.004 28.13 13.128 27 12 27h-1c-1.49 0-2.51 2-4 2H4v3h1v-2h2c1.49 0 2.51-2 4-2h1c1.49 0 2.51 2 4 2V27.844L8 14l7-12.125V0h-1zm20 0v4H16.062l-5.78 10L18 27.344V32h1v-4.656L11.281 14 16.5 5H35V0h-1zM11 30c-1.49 0-2.51 2-4 2h2c.627-.5 1.255-1 2-1h1c.745 0 1.373.5 2 1h2c-1.49 0-2.51-2-4-2h-1z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 0v1.875L8 14l8 13.844V30c-1.49 0-2.51-2-4-2h-1c-1.49 0-2.51 2-4 2H5v2h2c1.49 0 2.51-2 4-2h1c1.49 0 2.51 2 4 2h2v-4.656L10.281 14l5.781-10H34V0H15z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 6h36v2H0V6z"
}));

export default SvgComponent;