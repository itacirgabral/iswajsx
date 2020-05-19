function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 17l7 7 7-7h-2l-5 5-5-5H0zM10 0a4 4 0 00-4 4v6c0 1.576-1.123 3.782-2 5.313V17h6v-1.688c-.877-1.53-2-3.736-2-5.312V4a2 2 0 012-2 1 1 0 011 1v6h2V3a3 3 0 00-3-3z"
}));

export default SvgComponent;