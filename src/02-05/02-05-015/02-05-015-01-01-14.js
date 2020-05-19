function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.201 18.385L23.586 0 25 1.414 6.615 19.8l-1.414-1.414zM11 9L5.5 3.5 0 9h11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.9 24L1 14.1V24h9.9zM16 20C9.925 20 5 15.075 5 9h1c0 5.523 4.477 10 10 10h2v1h-2zM23 7l5.5 5.5L23 18V7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2c0 6.075 4.925 11 11 11v-1c-5.523 0-10-4.477-10-10V0h-1v2z"
}));

export default SvgComponent;