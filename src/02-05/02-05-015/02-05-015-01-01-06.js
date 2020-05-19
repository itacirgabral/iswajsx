function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 29,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M23.799 18.385L5.414 0 4 1.414 22.385 19.8l1.414-1.414zM18 9l5.5-5.5L29 9H18z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.1 24l9.9-9.9V24h-9.9zM13 20c6.075 0 11-4.925 11-11h-1c0 5.523-4.477 10-10 10h-2v1h2zM6 7L.5 12.5 6 18V7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 2c0 6.075-4.925 11-11 11v-1c5.523 0 10-4.477 10-10V0h1v2z"
}));

export default SvgComponent;