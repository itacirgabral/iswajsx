function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 16
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M2.594 0L12 5.438V7H0V5h7.313L0 .781V0h2.594zM2.594 9L12 14.438V16H0v-2h7.313L0 9.781V9h2.594z"
}));

export default SvgComponent;