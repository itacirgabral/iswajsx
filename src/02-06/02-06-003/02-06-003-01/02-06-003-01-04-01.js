function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 23
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M12 .031v1c5.563.266 10 4.84 10 10.469C22 17.299 17.299 22 11.5 22S1 17.299 1 11.5V10H0v1.5C0 17.851 5.149 23 11.5 23S23 17.851 23 11.5C23 5.316 18.12.293 12 .031z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 1.031v3a7.48 7.48 0 017 7.469 7.5 7.5 0 11-15 0V10H1v1.5C1 17.299 5.701 22 11.5 22S22 17.299 22 11.5c0-5.628-4.437-10.203-10-10.469z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 4.031v1c3.352.26 6 3.05 6 6.469a6.5 6.5 0 11-13 0V10H4v1.5a7.5 7.5 0 1015 0 7.48 7.48 0 00-7-7.469z"
}));

export default SvgComponent;