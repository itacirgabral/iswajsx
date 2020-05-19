function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19 0v2l6 6-6 6v2l8-8-8-8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 7v2H7a5 5 0 00-5 5v1a5 5 0 005 5h16v4H8a8 8 0 01-8-8v-2a7 7 0 017-7h12z"
}));

export default SvgComponent;