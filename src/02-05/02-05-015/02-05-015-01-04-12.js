function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M18.385 22.799L0 4.414 1.414 3 19.8 21.385l-1.414 1.414zM14 22l-5.5 5.5L3 22h11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24 17.1L14.1 27H24v-9.9zM19 11c-6.075 0-11 4.925-11 11h1c0-5.523 4.477-10 10-10h2v-1h-2zM12 11l5.5-5.5L12 0v11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 16C1 9.925 5.925 5 12 5v1C6.477 6 2 10.477 2 16v2H1v-2z"
}));

export default SvgComponent;