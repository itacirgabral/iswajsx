function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1 9.9V0h9.9L8.888 2.01H3.01V7.89L1 9.899z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.201 5.657l18.385 18.385L25 22.628 6.615 4.243 5.201 5.657zM0 15l5.5 5.5L11 15H9.586L5.5 19.086 1.414 15H0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 4C9.925 4 5 8.925 5 15h1C6 9.477 10.477 5 16 5h2V4h-2zM7 22l5.5 5.5L18 22h-1.414L12.5 26.086 8.414 22H7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23 11c-6.075 0-11 4.925-11 11h1c0-5.523 4.477-10 10-10h2v-1h-2z"
}));

export default SvgComponent;