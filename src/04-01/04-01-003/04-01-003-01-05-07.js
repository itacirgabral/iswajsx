function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 48
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25.469 14.938C31.125 17.837 35 23.706 35 30.5 35 40.165 27.165 48 17.5 48S0 40.165 0 30.5c0-6.793 3.875-12.663 9.531-15.563l.906 1.782C5.438 19.29 2 24.489 2 30.5 2 39.06 8.94 46 17.5 46 26.06 46 33 39.06 33 30.5c0-6.01-3.437-11.21-8.438-13.781l.907-1.782z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 11l5-5 .719.719L8.438 11l4.28 4.281L12 16l-5-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 9v1h6V9h-6zM11 12v1h6v-1h-6zM24 5l-5-5-.719.719L22.563 5 18.28 9.281 19 10l5-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 3v1h-6V3h6zM20 6v1h-6V6h6zM24 17l-5-5-.719.719L22.563 17l-4.282 4.281L19 22l5-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 15v1h-6v-1h6zM20 18v1h-6v-1h6z"
}));

export default SvgComponent;