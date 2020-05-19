function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 8,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8.016 8.016V.946H7V7H.945v1.016h7.071z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.542 4.834L1.299.592l-.707.707 4.242 4.243.708-.708z"
}));

export default SvgComponent;