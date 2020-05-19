function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9.9 0H0v9.9l2.01-2.011V2.01H7.89L9.899 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.657 4.243L21.92 20.506l-1.414 1.414L4.243 5.657l1.414-1.414zM23 7l-5.5-5.5L12 7h1.414L17.5 2.914 21.586 7H23z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 18c6.075 0 11-4.925 11-11h-1c0 5.523-4.477 10-10 10H5v1h2z"
}));

export default SvgComponent;