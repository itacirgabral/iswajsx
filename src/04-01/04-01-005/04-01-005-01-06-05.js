function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5 10l5-5-.719-.719L5 8.563.719 4.28 0 5l5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 6V0h-1v6h1z"
}));

export default SvgComponent;