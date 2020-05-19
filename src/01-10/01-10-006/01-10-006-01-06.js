function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0h15v15H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 4v3h3.5a2.5 2.5 0 104 0H15V4H0z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.5 6c-.822 0-1.544.388-2 1h4a2.477 2.477 0 00-2-1z"
}));

export default SvgComponent;