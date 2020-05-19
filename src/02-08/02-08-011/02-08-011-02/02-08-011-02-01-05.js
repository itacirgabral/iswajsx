function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 39
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M23 0a6 6 0 00-6 6v27c0 1.105-1.343 2-3 2-1.105 0-2-1.343-2-3v-3H4v4c0 3.314 3.582 6 8 6h2a5 5 0 005-5V6a4 4 0 118 0v10h2V6a6 6 0 00-6-6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 29h16l-8-8-8 8z"
}));

export default SvgComponent;