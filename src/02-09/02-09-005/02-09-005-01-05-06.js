function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 20,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20 5L15.5.5 11 5h9zm-2.438-1h-4.125L15.5 1.906 17.563 4zM6 18c5.523 0 10-4.477 10-10V5h-1v3a9 9 0 01-9 9H0v1h6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.563 4L15.5 1.906 13.437 4h4.126z",
  fill: "#fff"
}));

export default SvgComponent;