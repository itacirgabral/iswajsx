function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 19,
  height: 31
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M7.5 0l-7 7h2.719l4.219-4.25L11.688 7H14.5l-7-7zM4 7v24l8-8v8h2V18.187l-8 8V7H4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 6.094l-8 8V7H9v11.938l8-8V31h2V6.094z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 7v19.188l8-8V31h3V10.937l-8 8V7H6z",
  fill: "#fff"
}));

export default SvgComponent;