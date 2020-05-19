function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 15
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6 0h15v15H6z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M8 2h6v11H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.219 4.469l-1.719 1L6 15v-3.969L2.219 4.47z"
}));

export default SvgComponent;