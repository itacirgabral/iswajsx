function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 9,
  height: 8
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 4l4-4 .719.719L1.406 4 4.72 7.281 4 8 0 4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 3.5v1h5v-1H4z"
}));

export default SvgComponent;