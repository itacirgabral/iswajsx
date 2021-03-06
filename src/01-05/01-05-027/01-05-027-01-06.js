function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0h8v18H8zM6 0v4H2v4H0V0h6zM6 16H2v-4H0v6h6v-2z"
}));

export default SvgComponent;