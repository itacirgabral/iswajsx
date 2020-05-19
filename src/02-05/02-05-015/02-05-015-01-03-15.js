function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 43,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 16L0 9l7-7v2.844L2.844 9 7 13.156V16zM7 10h36V8H7v2zM19 0v1.406L21.094 3.5 19 5.594V7l3.5-3.5L19 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 3v1h-2a5 5 0 00-5 5c0 1.657 2.239 3 5 3h5v3h-5a6 6 0 010-12h2zM33 18v-1.406l2.094-2.094L33 12.406V11l3.5 3.5L33 18zM30 4a6 6 0 100 12h3v-3h-3c-2.761 0-5-1.343-5-3a5 5 0 015-5h3V4h-3z"
}));

export default SvgComponent;