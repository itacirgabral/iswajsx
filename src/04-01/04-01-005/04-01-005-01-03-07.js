function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 48
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25.781 15.094C31.27 18.047 35 23.83 35 30.5 35 40.165 27.165 48 17.5 48S0 40.165 0 30.5c0-6.67 3.73-12.453 9.219-15.406l.937 1.781C5.311 19.495 2 24.605 2 30.5 2 39.06 8.94 46 17.5 46 26.06 46 33 39.06 33 30.5c0-5.895-3.311-11.004-8.156-13.625l.937-1.781zM9 5l5 5 .719-.719L10.438 5l4.28-4.281L14 0 9 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 5.5v-1h6v1h-6zM26 11l-5 5-.719-.719L24.563 11 20.28 6.719 21 6l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 11.5v-1h-6v1h6z"
}));

export default SvgComponent;