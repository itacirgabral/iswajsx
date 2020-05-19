function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.201 22.343L23.586 3.958 25 5.372 6.615 23.757l-1.414-1.414zM11 13L5.5 7.5 0 13h11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.9 28L1 18.1V28h9.9zM16 24C9.925 24 5 19.075 5 13h1c0 5.523 4.477 10 10 10h2v1h-2zM18 6L12.5.5 7 6h11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23 17c-6.075 0-11-4.925-11-11h1c0 5.523 4.477 10 10 10h2v1h-2z"
}));

export default SvgComponent;