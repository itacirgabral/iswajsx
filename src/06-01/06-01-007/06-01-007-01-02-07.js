function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 27,
  height: 30
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M22.5 20c1.859 0 3.504.932 4.5 2.344v6.312A5.637 5.637 0 0125.656 30h-6.312A5.507 5.507 0 0117 25.5a5.5 5.5 0 015.5-5.5z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24 0v29L7.75 12.75l1.406-1.438L22 24.188V5H0V0h24z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25 0v30h-1.438L6.313 12.75l2.844-2.844L21 21.75V6H0V5h22v19.156L9.156 11.313 7.75 12.75 24 29V0h1z",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22.5 21a4.5 4.5 0 110 9 4.5 4.5 0 010-9z"
}));

export default SvgComponent;