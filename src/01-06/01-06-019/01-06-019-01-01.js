function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 8h15v15H4z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M6 10h11v11H6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 0C0 0 0 4 0 4c0 5 4 8 4 8V8h1C3 6 3 4 3 4c0-2 1-2 1-2 1 0 1.129 1.01 1 1v1h2V3c0-3-3-3-3-3z"
}));

export default SvgComponent;