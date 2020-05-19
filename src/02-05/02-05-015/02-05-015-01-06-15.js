function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 43,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7 16L0 9l7-7v2.844L2.844 9 7 13.156V16zM7 10h36V8H7v2zM14 0v1.406L11.906 3.5 14 5.594V7l-3.5-3.5L14 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 3v1h2a5 5 0 015 5c0 1.657-2.239 3-5 3h-5v3h5a6 6 0 000-12h-2zM26 11v1.406L23.906 14.5 26 16.594V18l-3.5-3.5L26 11zM26 4v1h3a5 5 0 015 5c0 1.657-2.239 3-5 3h-3v3h3a6 6 0 000-12h-3z"
}));

export default SvgComponent;