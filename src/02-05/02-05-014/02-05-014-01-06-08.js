function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 25
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18.1 1H28v9.9l-2.01-2.011V3.01H20.11L18.101 1z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22.343 5.201L3.958 23.586 5.372 25 23.757 6.615l-1.414-1.414zM0 13l5.5-5.5L11 13H9.586L5.5 8.914 1.414 13H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 24C9.925 24 5 19.075 5 13h1c0 5.523 4.477 10 10 10h2v1h-2zM7 6L12.5.5 18 6h-1.414L12.5 1.914 8.414 6H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23 17c-6.075 0-11-4.925-11-11h1c0 5.523 4.477 10 10 10h2v1h-2z"
}));

export default SvgComponent;