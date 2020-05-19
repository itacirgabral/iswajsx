function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v2h8a3 3 0 013 3v10h2V5a5 5 0 00-5-5H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 0a5 5 0 015 5v10h1V5a5.999 5.999 0 00-2.688-5H8zM0 2v1h8a2 2 0 012 2v10h1V5a3 3 0 00-3-3H0z",
  fill: "#fff"
}));

export default SvgComponent;