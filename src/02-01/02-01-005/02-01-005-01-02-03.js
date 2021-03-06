function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 34
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 0v4H0v2h4v4h2V6h4V4H6V0H4zM4 12v4H0v2h4v4h2v-4h4v-2H6v-4H4zM4 24v4H0v2h4v4h2v-4h4v-2H6v-4H4z"
}));

export default SvgComponent;