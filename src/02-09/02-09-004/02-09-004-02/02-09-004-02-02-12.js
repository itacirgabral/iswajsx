function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 33,
  height: 33
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 19v14l-7-7 7-7zm-1 2.438L1.406 26 6 30.563v-9.125zM27 0a6 6 0 010 12h-8a2 2 0 00-2 2c0 .552.232 1.044.594 1.406l3.281 2.813A3.994 3.994 0 0122 21a7 7 0 01-7 7H7v-4h10a3 3 0 003-3c0-.536-.22-1.016-.563-1.375l-3.28-2.781A4.01 4.01 0 0115 14a5 5 0 015-5h7a4 4 0 100-8h-8V0h8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 21.438v9.125L1.406 26 6 21.437z",
  fill: "#fff"
}));

export default SvgComponent;