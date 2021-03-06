function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 26
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15 11h8v15h-8z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M16 12h3v13h-3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 0v11h2V0h-2zM8.625 3.625L7.219 5.063 13.187 11H15v-1L8.625 3.625zM0 11h15v3H0zM6.156 14L15 22.813V20l-6-6H6.156z"
}));

export default SvgComponent;