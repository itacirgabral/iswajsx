function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 26V2s7 0 7 7v9c0 8-7 8-7 8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 4v20s1.815.002 3-1.844V5.531C10.815 4.001 9 4 9 4z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M.531.063L0 2l8 2.156V2.063l-7.469-2zM.531 5.063L0 7l8 2.156V7.062l-7.469-2zM.531 10.063L0 12l8 2.156v-2.094l-7.469-2zM.531 15.063L0 17l8 2.156v-2.093l-7.469-2zM8 23H0v2h8v-2z"
}));

export default SvgComponent;