function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 41,
  height: 35
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M23.5 0C14.376 0 6.904 6.993 6.094 15.906l2 .188C8.802 8.19 15.412 2 23.5 2 32.06 2 39 8.94 39 17.5 39 26.06 32.06 33 23.5 33c-3.362 0-6.46-1.088-9-2.906l-1.156 1.625C16.21 33.769 19.707 35 23.5 35 33.165 35 41 27.165 41 17.5S33.165 0 23.5 0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 23v2h17v-2H0zM17 26L0 30.563.5 32.5l17.031-4.563L17 26zM.5 15.5L0 17.438 17 22l.531-1.938L.5 15.5z"
}));

export default SvgComponent;