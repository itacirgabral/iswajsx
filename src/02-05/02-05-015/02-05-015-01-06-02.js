function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 28,
  height: 24
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1 9.9V0h9.9L8.888 2.01H3.01V7.89L1 9.899z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.201 5.615L23.586 24 25 22.586 6.615 4.2 5.201 5.615zM28 12l-5.5-5.5L17 12h1.414L22.5 7.914 26.586 12H28z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 23c6.075 0 11-4.925 11-11h-1c0 5.523-4.477 10-10 10h-2v1h2zM6 20L.5 14.5 6 9v1.414L1.914 14.5 6 18.586V20z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 4c0 6.075-4.925 11-11 11v-1c5.523 0 10-4.477 10-10V2h1v2z"
}));

export default SvgComponent;