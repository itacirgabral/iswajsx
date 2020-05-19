function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 38,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 7v2h31V7H0zM31 15l7-7-7-7v2.844L35.156 8 31 12.156V15zM14 15l4.5-4.5L23 15h-1.406L18.5 11.906 15.406 15H14z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25 0v15a2 2 0 01-4 0h-5c0 2.21 2.239 4 5 4s5-1.79 5-4V0h-1zM1 15l4.5-4.5L10 15H8.594L5.5 11.906 2.406 15H1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 0v15a2 2 0 01-4 0H3c0 2.21 2.239 4 5 4s5-1.79 5-4V0h-1z"
}));

export default SvgComponent;