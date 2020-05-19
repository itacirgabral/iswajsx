function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 60
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M10 9v51H2V9h8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 .781L7.313 5H0V.781zM10 7v2H2V7h8z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.594 0L12 5.438V7H0V5h7.313L0 .781V0h2.594z"
}));

export default SvgComponent;