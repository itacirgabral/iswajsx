function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 32,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 7v2h25V7H0zM25 15l7-7-7-7v2.844L29.156 8 25 12.156V15zM5 15l4.5-4.5L14 15h-1.406L9.5 11.906 6.406 15H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 0v15a2 2 0 01-4 0H7c0 2.21 2.239 4 5 4s5-1.79 5-4V0h-1z"
}));

export default SvgComponent;