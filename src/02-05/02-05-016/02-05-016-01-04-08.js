function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 21,
  height: 19
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 19C8.82 19 3 13.18 3 6h1c0 6.627 5.373 12 12 12h2v1h-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 18C9.373 18 4 12.627 4 6h3a9 9 0 009 9h2v3h-2z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.435 4.15L2 17.587 3.414 19 16.85 5.565l-1.414-1.414z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 15a9 9 0 01-9-9h1a8 8 0 008 8h2v1h-2zM11 6L5.5.5 0 6h11zM21 9.9L11.1 0H21v9.9z"
}));

export default SvgComponent;