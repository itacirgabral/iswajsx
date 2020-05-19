function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 62,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M62 10H20V6h42v4zM0 5l5-5 .719.719L1.437 5 5.72 9.281 5 10 0 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 3v1h6V3H4zM4 6v1h6V6H4zM18 11l-5-5-.719.719L16.562 11l-4.28 4.281L13 16l5-5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 9v1H8V9h6zM14 12v1H8v-1h6z"
}));

export default SvgComponent;