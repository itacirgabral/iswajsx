function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 29
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M21 21l-8-8-8 8h16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v23a4 4 0 004 4c1.657 0 3-2.686 3-6h8a8 8 0 01-8 8H6a6 6 0 01-6-6V0h2z"
}));

export default SvgComponent;