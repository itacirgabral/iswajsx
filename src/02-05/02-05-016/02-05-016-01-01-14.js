function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17 19C9.82 19 4 13.18 4 6h1c0 6.627 5.373 12 12 12h2v1h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 18C10.373 18 5 12.627 5 6h3a9 9 0 009 9h2v3h-2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4.151 17.435L17.586 4 19 5.414 5.565 18.85l-1.414-1.414z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 15a9 9 0 01-9-9h1a8 8 0 008 8h2v1h-2zM12 6L6.5.5 1 6h11zM9.9 23L0 13.1V23h9.9z"
}));

export default SvgComponent;