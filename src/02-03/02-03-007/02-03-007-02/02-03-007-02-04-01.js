function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 16,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v11.656L10.344 22l1.406-1.406L2 10.844V0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 0v9.156l8.594 8.594L16 16.344l-8-8V0H6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v10.844l9.75 9.75 2.844-2.844L6 9.156V0H2z",
  fill: "#fff"
}));

export default SvgComponent;