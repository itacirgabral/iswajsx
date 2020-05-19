function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 11
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 5.5a2.5 2.5 0 11-5 0 2.5 2.5 0 115 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 0h1v11H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.035 1.257l.708.707-7.779 7.779-.707-.708z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.257 1.964l.707-.707 7.779 7.778-.708.708z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 6V5h11v1z"
}));

export default SvgComponent;