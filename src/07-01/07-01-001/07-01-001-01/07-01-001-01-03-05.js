function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 74,
  height: 10
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M47 4h27V2H47v2zM26 2H0v2h26V2zM0 8h74v2H0V8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M47 2v2h27v4H0V4h26V2h21z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36.5 0c3.666 0 6.724 2.568 7.5 6h-1.156A6.729 6.729 0 0036.5 1.5 6.729 6.729 0 0030.156 6H29c.776-3.432 3.834-6 7.5-6z"
}));

export default SvgComponent;