function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 27
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 11h11v16H7z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M9 13h7v12H9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 .344l-.875.5L16.844 9H18L13 .344zM6 0l-.688.719L13.595 9H15L6 0zM2.469 3.5l-.5.875 8 4.625H12L2.469 3.5zM.5 7.219l-.25.968L7 10V9h.125L.5 7.219z"
}));

export default SvgComponent;