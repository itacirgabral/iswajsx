function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 74,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M27 4H0V2h27v2zM48 2h26v2H48V2zM74 8H0v2h74V8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M27 2v2H0v4h74V4H48V2H27z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M37.5 0c-3.666 0-6.724 2.568-7.5 6h1.156A6.729 6.729 0 0137.5 1.5 6.729 6.729 0 0143.844 6H45c-.776-3.432-3.834-6-7.5-6z"
}));

export default SvgComponent;