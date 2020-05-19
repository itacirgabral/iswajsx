function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.1 0H23v9.9l-2.01-2.011V2.01H15.11L13.101 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.343 4.243L1.08 20.506l1.414 1.414L18.757 5.657l-1.414-1.414zM6 1L.5 6.5 6 12v-1.414L1.914 6.5 6 2.414V1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 17c0-6.075-4.925-11-11-11v1c5.523 0 10 4.477 10 10v2h1v-2z"
}));

export default SvgComponent;