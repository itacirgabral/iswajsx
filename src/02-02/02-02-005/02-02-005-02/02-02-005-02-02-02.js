function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 12a3 3 0 100 6 3 3 0 000-6zm0 1a2 2 0 110 4 2 2 0 010-4zM9 6a3 3 0 100 6 3 3 0 000-6zm0 1a2 2 0 110 4 2 2 0 010-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 13a2 2 0 100 4 2 2 0 000-4zM9 7a2 2 0 100 4 2 2 0 000-4z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 0a3 3 0 100 6 3 3 0 000-6zm0 1a2 2 0 110 4 2 2 0 010-4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 1a2 2 0 100 4 2 2 0 000-4z",
  fill: "#fff"
}));

export default SvgComponent;