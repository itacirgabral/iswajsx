function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 43,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M36 16l7-7-7-7v2.844L40.156 9 36 13.156V16zM36 10H0V8h36v2zM29 0v1.406L31.094 3.5 29 5.594V7l3.5-3.5L29 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M29 3v1h-2a5 5 0 00-5 5c0 1.657 2.239 3 5 3h5v3h-5a6 6 0 010-12h2zM17 11v1.406l2.094 2.094L17 16.594V18l3.5-3.5L17 11zM14 4a6 6 0 000 12h3v-3h-3c-2.761 0-5-1.343-5-3a5 5 0 015-5h3V4h-3z"
}));

export default SvgComponent;