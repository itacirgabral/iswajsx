function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 43,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 16L0 9l7-7v2.844L2.844 9 7 13.156V16zM7 10h36V8H7v2zM20 11v1.406l2.094 2.094L20 16.594V18l3.5-3.5L20 11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 4v1h-3a5 5 0 00-5 5c0 1.657 2.239 3 5 3h3v3h-3a6 6 0 010-12h3zM32 0v1.406L34.094 3.5 32 5.594V7l3.5-3.5L32 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M30 3a6 6 0 000 12h5v-3h-5c-2.761 0-5-1.343-5-3a5 5 0 015-5h2V3h-2z"
}));

export default SvgComponent;