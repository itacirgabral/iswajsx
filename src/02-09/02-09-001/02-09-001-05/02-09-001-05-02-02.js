function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 43,
  height: 21
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14 7v14l7-7-7-7zm1 2.438L19.594 14 15 18.563V9.438z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 0a8 8 0 000 16h6v-4H8c-3.314 0-6-1.79-6-4a6 6 0 016-6h35V0H8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 9.438v9.124L19.594 14 15 9.437z",
  fill: "#fff"
}));

export default SvgComponent;