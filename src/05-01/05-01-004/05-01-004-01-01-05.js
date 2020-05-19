function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 54,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 5h42V1H0v4zM49 10l-5-5 .719-.719L49 8.563l4.281-4.282L54 5l-5 5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M48.5 6h1V0h-1v6z"
}));

export default SvgComponent;