function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 62,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M62 6H20v4h42V6zM0 11l5 5 .719-.719L1.437 11 5.72 6.719 5 6l-5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 13v-1h6v1H4zM4 10V9h6v1H4zM18 5l-5 5-.719-.719L16.562 5 12.282.719 13 0l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 7V6H8v1h6zM14 4V3H8v1h6z"
}));

export default SvgComponent;