function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 0v30h15V15H6V0H4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 17H6v11h11V17z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.5 5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
}));

export default SvgComponent;