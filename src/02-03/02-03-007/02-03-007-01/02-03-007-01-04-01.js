function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 14,
  height: 18
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v8.969L9.063 18l1.406-1.406L2 8.125V0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 0v6.875l7.594 7.594L14 13.063 7 6.03V0H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v8.125l8.469 8.469 2.125-2.125L5 6.875V0H2z",
  fill: "#fff"
}));

export default SvgComponent;