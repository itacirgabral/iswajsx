function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 5L4.5.5 9 5H0zM4 5v13a4 4 0 004 4 5 5 0 005-5H8c0 1.657-.672 3-1.5 3S5 18.657 5 17V5H4zM10 5L14.5.5 19 5h-9zM14 5v13a4 4 0 004 4 5 5 0 005-5h-5c0 1.657-.672 3-1.5 3S15 18.657 15 17V5h-1z"
}));

export default SvgComponent;