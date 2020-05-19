function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 26,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 14v4H0v2h4v4h2v-4h4v-2H6v-4H4zM12 7v4H8v2h4v4h2v-4h4v-2h-4V7h-2zM20 0v4h-4v2h4v4h2V6h4V4h-4V0h-2z"
}));

export default SvgComponent;