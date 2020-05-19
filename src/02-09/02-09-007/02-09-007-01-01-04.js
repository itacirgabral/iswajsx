function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 36
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 0h-1v36h1V0zM11 20l-5.5-5.5L0 20h11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 0h-3v36h3V0z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 0h-1v36h1V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 20v5a3 3 0 003 3h12v3H10a5 5 0 01-5-5v-6h1zM19 18l5.5-5.5L19 7v11zM10 2v1a3 3 0 00-3 3v2a3 3 0 003 3h9v3h-9a5 5 0 01-5-5V7a5 5 0 015-5z"
}));

export default SvgComponent;