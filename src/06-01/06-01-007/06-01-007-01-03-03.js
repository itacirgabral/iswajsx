function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 37
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8.5 23a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 1a4.5 4.5 0 110 9 4.5 4.5 0 010-9z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v22l15 15 1.406-1.406L2 21.187V5h22V0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24 5v1H3v14.75l14.844 14.844L16.437 37H15l1.406-1.406L2 21.187V5h22zm-9 32h-1.406L0 23.437V22l15 15z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.5 24a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
}));

export default SvgComponent;