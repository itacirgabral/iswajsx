function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 0h8v18h-8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M12 1h3v16h-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 0v7h3V4h2V0H4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.813 1.969L.405 3.406 9 12V9.187L1.812 1.97z"
}));

export default SvgComponent;