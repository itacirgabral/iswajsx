function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 22,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 12a8 8 0 100 16 8 8 0 000-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 14a6 6 0 000 12V14z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 0v13.75a8.055 8.055 0 012 2.375V0h-2zM8 3v11.719a8.035 8.035 0 012-1.625V3H8zM2 11L.594 12.406l5.656 5.656a7.873 7.873 0 01.813-2L2 11z"
}));

export default SvgComponent;