function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

const SvgComponent = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 23,
  height: 22
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M17.343 4.243L1.08 20.506l1.414 1.414L18.757 5.657l-1.414-1.414z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 18c0-6.075-4.925-11-11-11v1c5.523 0 10 4.477 10 10v2h1v-2zM6 13V2L.5 7.5 6 13zm-.994-2.408L1.914 7.5l3.07-3.07.022 6.162zM13.1 0H23v9.9L13.1 0zm2.431 1.016l6.453 6.453V1.016H15.53z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.531 1.016h6.453V7.47L15.53 1.016zM5.006 10.592L4.984 4.43 1.914 7.5l3.092 3.092z",
  fill: "#fff"
}));

export default SvgComponent;