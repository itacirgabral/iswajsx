function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M32 7v2H7V7h25zM7 15L0 8l7-7v2.844L2.844 8 7 12.156V15zM27 15l-4.5-4.5L18 15h1.406l3.094-3.094L25.594 15H27z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 0v15a2 2 0 004 0h5c0 2.21-2.239 4-5 4s-5-1.79-5-4V0h1z"
}));

export default SvgComponent;