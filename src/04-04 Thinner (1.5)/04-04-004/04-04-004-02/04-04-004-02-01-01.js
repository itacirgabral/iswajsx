function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 35,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 0C7.835 0 0 7.835 0 17.5S7.835 35 17.5 35 35 27.165 35 17.5 27.165 0 17.5 0zm0 1.5c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 21c-2.485 0-4.5 1.79-4.5 4s2.015 4 4.5 4 4.5-1.79 4.5-4-2.015-4-4.5-4zm0 1.5c1.657 0 3 1.12 3 2.5s-1.343 2.5-3 2.5-3-1.12-3-2.5 1.343-2.5 3-2.5zM9 24h1v4H9zM25 24h1v4h-1zM25.5 19l-2.594 4.469.875.531 1.719-2.969L27.218 24l.875-.531L25.5 19zM9.5 19l-2.594 4.469.875.531L9.5 21.031 11.219 24l.875-.531L9.5 19z"
}));

export default SvgComponent;