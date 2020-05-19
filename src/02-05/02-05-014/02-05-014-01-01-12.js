function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M22.343 19.799L3.958 1.414 5.372 0l18.385 18.385-1.414 1.414zM13 14l-5.5 5.5L13 25V14z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M28 14.1L18.1 24H28v-9.9zM24 9c0 6.075-4.925 11-11 11v-1c5.523 0 10-4.477 10-10V7h1v2zM6 7L.5 12.5 6 18V7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 2c0 6.075-4.925 11-11 11v-1c5.523 0 10-4.477 10-10V0h1v2z"
}));

export default SvgComponent;