function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 15,
  height: 14
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.5 0v1H2V0h7.5zm0 8v3H5V8h4.5zM9.5 0a5.5 5.5 0 010 11V8a3.5 3.5 0 100-7V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.25 5.25l1.063 1.063L2.124 9.5l3.188 3.188L4.25 13.75 0 9.5l4.25-4.25z"
}));

export default SvgComponent;