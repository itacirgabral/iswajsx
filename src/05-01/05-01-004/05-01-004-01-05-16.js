function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 58,
  height: 20
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 16h42v4H16v-4zM0 12v7.071h1.016v-6.055h6.055V12H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.475 15.182l.707-.707 4.243 4.243-.707.707-4.243-4.243zM15 15V7.929h-1.016v6.055H7.929V15H15z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.525 11.818l-.707.707-4.243-4.243.707-.707 4.243 4.243zM12 0v7.071h1.016V1.016h6.055V0H12z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.475 3.182l.707-.707 4.243 4.243-.707.707-4.243-4.243z"
}));

export default SvgComponent;