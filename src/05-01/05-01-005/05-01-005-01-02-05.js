function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 54,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 6h42V2H0v4zM45 7h1V0h-1v7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M48 8.5a2.5 2.5 0 10-5 0 2.5 2.5 0 105 0zM51 7h1V0h-1v7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M54 8.5a2.5 2.5 0 10-5 0 2.5 2.5 0 105 0z"
}));

export default SvgComponent;