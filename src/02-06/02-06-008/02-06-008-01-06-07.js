function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 11,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 0H0v8l1-1V1h6l1-1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 11.5c0-2.623-1.062-5-2.781-6.719l-2.5-2.5L5 3l2.5 2.5a8.458 8.458 0 012.5 6 8.458 8.458 0 01-2.5 6l-3.781 3.813.687.687 3.813-3.781A9.472 9.472 0 0011 11.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 11.5a8.458 8.458 0 00-2.5-6L5 3 2.875 5.125l2.5 2.5C6.37 8.62 7 9.981 7 11.5c0 1.519-.63 2.88-1.625 3.875l-3.781 3.813 2.125 2.125L7.5 17.5a8.458 8.458 0 002.5-6z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 11.5c0-1.519-.63-2.88-1.625-3.875l-2.5-2.5-.688.688 2.5 2.5A4.494 4.494 0 016 11.5a4.494 4.494 0 01-1.313 3.188l-3.812 3.78.719.72 3.781-3.813C6.37 14.38 7 13.019 7 11.5z"
}));

export default SvgComponent;