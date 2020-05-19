function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 43,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M36 8H0v2h36V8zM23 11l-3.5 3.5L23 18v-7zM36 16V2l7 7-7 7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23 4v1h3a5 5 0 015 5c0 1.657-2.239 3-5 3h-3v3h3a6 6 0 000-12h-3zM11 0L7.5 3.5 11 7V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 3v1h2a5 5 0 015 5c0 1.657-2.239 3-5 3H8v3h5a6 6 0 000-12h-2z"
}));

export default SvgComponent;