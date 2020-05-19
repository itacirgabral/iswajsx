function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 43,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M36 16l7-7-7-7v2.844L40.156 9 36 13.156V16zM36 10H0V8h36v2zM24 0v1.406L21.906 3.5 24 5.594V7l-3.5-3.5L24 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24 3v1h2a5 5 0 015 5c0 1.657-2.239 3-5 3h-5v3h5a6 6 0 000-12h-2zM10 11v1.406L7.906 14.5 10 16.594V18l-3.5-3.5L10 11zM10 4v1h3a5 5 0 015 5c0 1.657-2.239 3-5 3h-3v3h3a6 6 0 000-12h-3z"
}));

export default SvgComponent;