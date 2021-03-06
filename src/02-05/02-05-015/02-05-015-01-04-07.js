function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 43,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M36 8H0v2h36V8zM29 0l3.5 3.5L29 7V0zM36 16V2l7 7-7 7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M29 3v1h-2a5 5 0 00-5 5c0 1.657 2.239 3 5 3h5v3h-5a6 6 0 010-12h2zM17 11l3.5 3.5L17 18v-7zM14 4a6 6 0 000 12h3v-3h-3c-2.761 0-5-1.343-5-3a5 5 0 015-5h3V4h-3z"
}));

export default SvgComponent;