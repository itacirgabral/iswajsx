function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 25,
  height: 28
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1 18.1V28h9.9l-2.011-2.01H3.01V20.11L1 18.101z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.201 22.343L23.586 3.958 25 5.372 6.615 23.757l-1.414-1.414zM13 0L7.5 5.5 13 11V9.586L8.914 5.5 13 1.414V0z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M24 16c0-6.075-4.925-11-11-11v1c5.523 0 10 4.477 10 10v2h1v-2zM6 7L.5 12.5 6 18v-1.414L1.914 12.5 6 8.414V7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 23c0-6.075-4.925-11-11-11v1c5.523 0 10 4.477 10 10v2h1v-2z"
}));

export default SvgComponent;