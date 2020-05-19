function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M11 0h8v18h-8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M12 1h6v16h-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 0v8h2V4h4V0H3zM0 16h9v2H0z"
}));

export default SvgComponent;