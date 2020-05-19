function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 18,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M0 0v23L18 5l-1.406-1.406L2 18.188V0H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 0V10.937l9.469-9.468L13.063.062 7 6.125V0H5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 0v18.188L16.594 3.594l-2.125-2.125L5 10.938V0H2z",
  fill: "#fff"
}));

export default SvgComponent;